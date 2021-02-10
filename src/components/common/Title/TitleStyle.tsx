import styled, { css } from "styled-components";
import { TitleProps } from "./";

const headingStyle = css<TitleProps>`
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  letter-spacing: 1px;
  margin-top: 35px;
  margin-bottom: 50px;
  z-index: 1;
`;

const H1Styles = css`
  font-size: 2.5rem;
  font-weight: bold;
  ${headingStyle}
`;

const H2Styles = css`
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  ${headingStyle}
`;

const H3Styles = css`
  font-size: 1.5rem;
  font-weight: normal;
  ${headingStyle}
`;

const H4Styles = css`
  font-size: 1rem;
  font-weight: normal;
  ${headingStyle}
`;

export const StyledHeading = styled.div<TitleProps>`
  ${({ as }) => as === "h1" && H1Styles}
  ${({ as }) => as === "h2" && H2Styles}
  ${({ as }) => as === "h3" && H3Styles}
  ${({ as }) => as === "h4" && H4Styles}
`;
