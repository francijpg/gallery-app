import React, { FC } from "react";
import Title from "../../common/Title";
import {
  Paragraph,
  ParagraphLink,
  StyledHeadingWrapper,
  StyledWrapper,
} from "./Response404Style";

const Response404: FC = () => {
  return (
    <StyledWrapper>
      <StyledHeadingWrapper>
        <Title as="h1" align="center" color="white">
          {"404: Page not found"}
        </Title>
        <Paragraph>
          <ParagraphLink to="/forgot-password">Go to my Gallery</ParagraphLink>
        </Paragraph>
      </StyledHeadingWrapper>
    </StyledWrapper>
  );
};

export default Response404;
