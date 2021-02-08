import { FC } from "react";
import { StyledMesssage } from "./MessageStyle";

export interface MessageProps {
  msg: string;
  type: "danger" | "success" | "warning" | "info";
}

const Message: FC<MessageProps> = ({ msg, type }) => {
  return (
    <StyledMesssage msg={msg} type={type}>
      {msg}
    </StyledMesssage>
  );
};

export default Message;
