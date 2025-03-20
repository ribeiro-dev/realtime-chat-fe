import { FormEvent } from "react";

import { Message } from "../Message";
import { MessageForm } from "../MessageForm";

import { Container, MessagesContainer } from "./styles";

export function Body() {
  function sendMessage(e: FormEvent) {
    e.preventDefault();
    alert('Message sent');
  }

  return (
    <Container>
      <MessagesContainer>
        <Message
          user="Usuário"
          content="Bom dia! Está podendo falar?"
          date={new Date("2025-02-02 12:30")}
          owner={false}
        />
        <Message
          user="Eu"
          content="Olá, bom dia! Estou sim."
          date={new Date("2025-02-02 12:30")}
          owner={true}
        />
      </MessagesContainer>

      <MessageForm onSubmit={sendMessage} />

    </Container>
  );
}
