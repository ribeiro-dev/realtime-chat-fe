import { FormEvent, useEffect, useState } from "react";

import { Message } from "../Message";
import { MessageForm } from "../MessageForm";

import { Container, MessagesContainer } from "./styles";
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


  return (
    <Container>
      <MessagesContainer>
        {messages.map(({ id, user, content, date, owner }) => (
            <Message
              key={id}
              user={user}
              content={content}
              date={date}
              owner={owner}
            />
        ))}
      </MessagesContainer>

      <MessageForm onSubmit={sendMessage} />
    </Container>
  );
}
