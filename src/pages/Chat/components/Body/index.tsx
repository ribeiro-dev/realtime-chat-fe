import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Message } from "./components/Message";
import { MessageForm } from "./components/MessageForm";
import { Loading } from "./components/Loading";

import { Container, MessagesContainer, MessagesWrapper } from "./styles";
import { socket } from "../../../../socket";

interface Message {
  id: string
  user: string
  content: string
  date: Date
}

export function Body() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form[0] as HTMLInputElement).value.trim(); // handles the .value error

    const messageDate = new Date()
    const messageId = socket.id! + messageDate.getTime()

    const newMessage: Message = {
      id: messageId,
      user: username,
      content: value,
      date: messageDate,
    }
    socket.emit('messages@new', newMessage)

    setMessages(prevState => {
      return [...prevState, newMessage]
    })
  }

  useEffect(() => {
    const user = localStorage.getItem("username")
    if (!user) {
      navigate("/")
      return
    }

    setUsername(user)
  }, [navigate])

  // Socket Listeners
  useEffect(() => {
    const getMessages = (data: Message[]) => {
      const formattedData = data.map((message: Message) => {
        message.date = new Date(message.date)

        return message
      })
      setMessages(formattedData);

      console.log(data)
    }

    const getNewMessage = (data: Message) => {
      setMessages(prevState => {
        data.date = new Date(data.date)
        return [...prevState, data]
      })
    }

    socket.on("getMessages", getMessages)
    socket.on('messages@new', getNewMessage)

    return () => {
      socket.off("getMessages", getMessages)
      socket.off("messages@new", getNewMessage)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  return (
    <Container>
      {!socket.connected
        ? (
          <Loading />
        ) : (
          <MessagesContainer>
            <MessagesWrapper>
              {messages.map(({ id, user, content, date }) => (
                <Message
                  key={id}
                  user={user}
                  content={content}
                  date={date.toLocaleString()}
                  owner={user == username}
                />
              ))}

              {/* Only to scroll reference */}
              <div ref={messagesEndRef} />
              </MessagesWrapper>
          </MessagesContainer>
        )
      }

      <MessageForm onSubmit={sendMessage} />
    </Container>
  );
}
