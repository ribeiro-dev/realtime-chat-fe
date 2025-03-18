import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1440px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  padding: 24px 0;
`;

export const MessagesContainer = styled.div`
  flex: 1;
`;

export const MessageInput = styled.div`
  background: #2E333D;
  height: 50px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10px;
  padding: 0 14px;

  input {
    flex: 1;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    color: #FFF;
    font-size: 14px;
  }

  button {

  }
`;
