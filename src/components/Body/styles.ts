import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1440px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  padding: 24px 16px;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`;

export const MessageInput = styled.div`
  background: #2e333d;
  border-radius: 10px;

  padding: 0 14px;

  form {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
  }

  input {
    flex: 1;
    height: inherit;
    border: none;
    background: none;
    outline: none;
    color: #fff;
    font-size: 14px;
  }

  button {
    background: none;
    border: none;
    width: 38px;
    height: 38px;
    /* border-radius: 50%; */

    cursor: pointer;
    transition: ease .3s;

    svg {
      width: 24px;
      height: 24px;
      transition: ease .3s;
    }
  }

  button:hover {
    scale: 1.2;
    /* background: rgba(0, 0, 0, 0.1); */
  }
`;
