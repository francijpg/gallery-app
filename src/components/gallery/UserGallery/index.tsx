import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

import { GalleryImage } from "../../../types/gallery";
import { StyledWrapper, StyledHeadingWrapper } from "./UserGalleryStyle";

import Title from "../../common/Title";
import UserGalleryList from "./UserGalleryList";

import { getUserImages } from "../../../redux/thunks/Gallery";
import { setSuccess } from "../../../redux/actions/authActions";
import Message from "../../common/Message";

const UserGallery: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const { images } = useSelector((state: RootState) => state.gallery);
  const [userImages, setUserImages] = useState<GalleryImage[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = user?.id;
    dispatch(getUserImages(id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const filtered = images.filter(
        (i: GalleryImage) => i.uploaderId === user?.id
      );
      setUserImages(filtered);
    } else {
      setUserImages([]);
    }
    // eslint-disable-next-line
  }, [images]);

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
      <UserGalleryList imagesArray={userImages} />
    </StyledWrapper>
  );
};

export default UserGallery;
