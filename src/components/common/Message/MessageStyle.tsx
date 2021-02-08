import styled, { css } from "styled-components";
import { MessageProps } from "./";

export const StyledMesssage = styled.div<MessageProps>`
  padding: 5px 10px;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: black;
  border: 2px solid white;
  color: white;
  font-size: 1.5rem;
  z-index: 1001;

  ${({ type }) =>
    type === "info" &&
    css`
      color: white;
      border: 2px solid #0e7dc7;
      background-color: #0e7dc7;
    `};

  ${({ type }) =>
    type === "warning" &&
    css`
      color: white;
      border: 2px solid yellow;
      background-color: #2b2b09;
    `};

  ${({ type }) =>
    type === "success" &&
    css`
      color: greenyellow;
      border: 2px solid green;
      background-color: #133613;
    `};

  ${({ type }) =>
    type === "danger" &&
    css`
      color: red;
      border: 2px solid red;
      background-color: #1f0909;
    `};
`;
