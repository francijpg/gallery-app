import styled from "styled-components";

export const StyledForm = styled.form`
  padding-left: 10px;
  width: 80%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  z-index: 15;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  border-radius: 10px;
  outline: none;
  border: none;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const StyledIcon = styled.i`
  color: #555;
  font-size: 1.3rem;
`;
