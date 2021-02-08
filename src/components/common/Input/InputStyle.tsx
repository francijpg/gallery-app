import styled from "styled-components";

const colors = {
  edge: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};

export const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;
`;

export const InputGroup = styled.div`
  position: relative;
  z-index: 10;
`;

export const InputStyle = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid gray;

  &:focus {
    border: 3px solid ${colors.edge};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
