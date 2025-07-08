import { Content, Container, User, Date } from "./styles";

interface MessageProps {
  user: string;
  content: string;
  date: string;
  owner: boolean; // Only to test messages sent by user
}

export function Message({ user, content, date, owner }: MessageProps) {
  return (
    <Container className={owner ? 'user' : 'another'}>
      <User>
        {user}
      </User>
      <Content>
        {content}
      </Content>
      <Date>
        {date}
      </Date>
    </Container>
  );
}
