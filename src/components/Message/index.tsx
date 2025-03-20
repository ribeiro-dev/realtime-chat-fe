import { Content, Container, User, Date } from "./styles";

interface MessageProps {
  user: string;
  content: string;
  date: Date;
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
        {date.getHours()}:{date.getMinutes()}
      </Date>
    </Container>
  );
}
