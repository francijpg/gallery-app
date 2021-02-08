import styled, { css } from "styled-components";
import { StyledButtonProps } from "./";

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: 18px;
  height: 45px;
  line-height: 45px;
  width: 45%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.1s ease all;
  margin-bottom: 10px;
  margin-right: .75rem !important;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }

  ${({ colorType }) =>
    colorType === "info" &&
    css`
      color: white;
      border: 2px solid #0e7dc7;
      background-color: #0e7dc7;
    `};

  ${({ colorType }) =>
    colorType === "warning" &&
    css`
      color: black;
      border: 2px solid #dbdb0f;
      background-color: #dbdb0f;
    `};

  ${({ colorType }) =>
    colorType === "success" &&
    css`
      color: white;
      border: 2px solid green;
      background-color: green;
    `};

  ${({ colorType }) =>
    colorType === "danger" &&
    css`
      color: white;
      border: 2px solid red;
      background-color: red;
    `};

  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: #646262;
      cursor: default;
      &:hover {
        box-shadow: none;
      }
    `}
`;
