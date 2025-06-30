import { FormEvent, useEffect, useRef, useState } from "react";

import { Message } from "../Message";
import { MessageForm } from "../MessageForm";

import { Container, MessagesContainer, MessagesWrapper } from "./styles";
import { socket } from "../../socket";

interface Message {
  id: number
  user: string
  content: string
  date: string
  owner: boolean
}

export function Body() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form[0] as HTMLInputElement).value.trim(); // handles the .value error


    const newMessage: Message = {
      id: new Date().getTime(), // temporary id
      user: socket.id!,
      content: value,
      date: Date.now().toLocaleString(),
      owner: true
    }
    socket.emit('messages@new', newMessage)

    setMessages(prevState => {
      return [...prevState, newMessage]
    })
  }

  // Socket Listeners
  useEffect(() => {
    socket.on("getMessages", (data) => {
      setMessages(data);
    });

    socket.on('messages@new', (data) => {
      setMessages(prevState => {
        return [...prevState, data]
      })
    })
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  return (
    <Container>
      <MessagesContainer>
        <MessagesWrapper>
          {messages.map(({ id, user, content, date, owner }) => (
              <Message
                key={id}
                user={user}
                content={content}
                date={date}
                owner={owner}
              />
          ))}

        {/* Only to scroll reference */}
        <div ref={messagesEndRef} />
        </MessagesWrapper>
      </MessagesContainer>

      <MessageForm onSubmit={sendMessage} />
    </Container>
  );
}
