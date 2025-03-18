import { Container, MessageInput, MessagesContainer } from "./styles";

export function Body() {
  return (
    <Container>
      <MessagesContainer>
      </MessagesContainer>

      <MessageInput>
        <input type="text" name="message" placeholder="Digite sua mensagem aqui" />
        <button>SEND</button>
      </MessageInput>
    </Container>
  )
}
