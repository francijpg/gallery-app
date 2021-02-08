import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const showIn = keyframes`
from {
  background-color: rgba(0, 0, 0, .7);
}

to {
  background-color: rgba(0, 0, 0, 0.8);
}
`;

export const StyledWrapper = styled.div`
  padding-left: calc(100vw - 100%);
  padding-top: 20px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${showIn} 1s linear forwards;
`;

export const StyledHeadingWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 10px;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  margin: 25px 0px 25px 0px;
  text-align: center;
`;

export const ParagraphLink = styled(Link)`
  color: #1fb0d4;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;
