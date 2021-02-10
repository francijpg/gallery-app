import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import Title from "../../common/Title";
import PublicGalleryList from "./PublicGalleryList";

import { getImages } from "../../../redux/thunks/Gallery";
import { StyledWrapper, StyledHeadingWrapper, StyledBackground } from "./PublicGalleryStyle";
import { GalleryImage } from "../../../types/gallery";

const PublicGallery: FC = () => {
  const { images, imagesLoaded } = useSelector((state: RootState) => state.gallery);
  const [publicImages, setPublicImages] = useState<GalleryImage[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!imagesLoaded) {
      dispatch(getImages());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      let filtered: GalleryImage[] = []
      filtered = images.filter(i => i.privacity !== true)
      setPublicImages(filtered);
    } else {
      setPublicImages([]);
    }
  }, [images]);

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
      {publicImages && <PublicGalleryList imagesArray={publicImages} />}
      <StyledBackground />
    </StyledWrapper>
  );
};

export default PublicGallery;
