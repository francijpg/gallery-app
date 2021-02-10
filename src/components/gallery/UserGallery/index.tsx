import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import { GalleryImage } from "../../../types/gallery";
import { StyledBackground, StyledHeadingWrapper, StyledWrapper } from "../PublicGallery/PublicGalleryStyle";

import Title from "../../common/Title";
import UserGalleryList from "./UserGalleryList";

import { getImages } from "../../../redux/thunks/Gallery";
import { setSuccess } from "../../../redux/actions/authActions";
import Message from "../../common/Message";

const UserGallery: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const { images, imagesLoaded, imagesPrivates } = useSelector((state: RootState) => state.gallery);
  const [userImages, setUserImages] = useState<GalleryImage[]>([]);

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
      filtered = images.filter(i => i.uploaderId === user?.id)
      setUserImages(filtered);
    } else {
      setUserImages([]);
    }
    // eslint-disable-next-line
  }, [images, imagesPrivates]);

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(""));
    }
  }, [success, dispatch]);

  return (
    <StyledWrapper>
      <StyledHeadingWrapper>
        <Title as="h1" align="center" color="white">{`Welcome ${user?.firstName}`}</Title>
        {needVerification && (
          <Message type="info" msg="Please verify your email address." />
        )}
      </StyledHeadingWrapper>
      <UserGalleryList publicImages={images} imagesArray={userImages} />
      <StyledBackground />
    </StyledWrapper>
  );
};

export default UserGallery;
