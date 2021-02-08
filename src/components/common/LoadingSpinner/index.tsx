import React, { FC } from "react";
import { StyledLoadingSpinner, StyledBackground } from "./LoadingSpinnerStyle";
import { FaSpinner } from "react-icons/fa";

export type Props = {
  center?: boolean;
  background?: boolean;
};

const LoadingSpinner: FC<Props> = ({ center, background }) => (
  <StyledBackground background={background}>
    <StyledLoadingSpinner center={center} data-testid="loading-spinner">
      <FaSpinner />
    </StyledLoadingSpinner>
  </StyledBackground>
);

export default LoadingSpinner;
