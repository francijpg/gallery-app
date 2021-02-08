import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import Title from "../../common/Title";
import PublicGalleryList from "./PublicGalleryList";

import { getImages } from "../../../redux/thunks/Gallery";
import { StyledWrapper, StyledHeadingWrapper } from "./PublicGalleryStyle";

const PublicGallery: FC = () => {
  const { images } = useSelector((state: RootState) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper>
      <StyledHeadingWrapper>
        <Title as="h1" align="center" color="white">
          Gallery
        </Title>
        <Title as="h3" align="center" color="white">
          Share and find awesome pictures!
        </Title>
      </StyledHeadingWrapper>
      {images && <PublicGalleryList imagesArray={images} />}
    </StyledWrapper>
  );
};

export default PublicGallery;
