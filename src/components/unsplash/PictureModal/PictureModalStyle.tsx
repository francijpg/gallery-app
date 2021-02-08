import styled from "styled-components";

export const StyledVeilImage = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  &:hover {
    opacity: 1;
  }
`;

export const StyledIconSaveImage = styled.i`
  font-size: 150px;
  color: green;
  cursor: pointer;
`;
