import socketIo from "socket.io-client";

export const socket = socketIo("http://localhost:3000", {
  transports: ["websocket"],
});
