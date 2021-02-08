import React, { useState, useEffect } from "react";

import Button from "../../common/Button";

import SearchBar from "../../unsplash/SearchBar";
import UploadImagesModal from "../../layout/UploadImages";

import { disableScroll, enableScroll } from "../../../utils/generic";

import {
  StyledWrapper,
  StyleSectionWrapper,
  StyleSectionItem,
} from "./NewGalleryStyle";
import Title from "../../common/Title";

const NewGallery: React.FC = () => {
  const [showUploadImagesModal, setShowUploadImagesModal] = useState(false);

  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    };
  }, []);

  return (
    <StyledWrapper>
      <StyleSectionWrapper>
        <StyleSectionItem>
          <Title as="h1" align="center" color="white">
            Find Yours
          </Title>
          <SearchBar />
          <Title as="h4" align="center" color="white">
            Powered by Unsplash
          </Title>
        </StyleSectionItem>
        <StyleSectionItem>
          <Title as="h1" align="center" color="white">
            Upload Yours
          </Title>
          <Button
            text="Upload Images"
            onClick={() => setShowUploadImagesModal(true)}
          />
          {showUploadImagesModal && (
            <UploadImagesModal
              onClose={() => setShowUploadImagesModal(false)}
            />
          )}
          <Title as="h4" align="center" color="white">
            JPEG and PNG formats supported
          </Title>
        </StyleSectionItem>
      </StyleSectionWrapper>
    </StyledWrapper>
  );
};

export default NewGallery;
