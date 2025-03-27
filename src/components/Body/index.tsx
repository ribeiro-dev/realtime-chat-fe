import { FormEvent } from "react";

import { Message } from "../Message";
import { MessageForm } from "../MessageForm";

import { Container, MessagesContainer } from "./styles";
import { messages } from "../../mocks/messages";

export function Body() {
  function sendMessage(e: FormEvent) {
    e.preventDefault();
    alert('Message sent');
  }

  return (
    <Container>
      <MessagesContainer>
        {messages.map(({ user, content, date, owner }) => (
            <Message
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
