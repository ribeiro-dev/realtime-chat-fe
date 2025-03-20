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

