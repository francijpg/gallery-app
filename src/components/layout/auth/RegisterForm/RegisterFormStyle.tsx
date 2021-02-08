import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const FormElements = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row: 1;
  grid-column: 1 / 4;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const FormOptions = styled.div`
  grid-row: 2;
  grid-column: 1 / 4;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  margin: 25px 0px 25px 0px;
  text-align: center;
`;

export const ParagraphLink = styled(Link)`
  color: #000;
  cursor: pointer;

  &:hover {
    color: #0486a7;
  }
`;
