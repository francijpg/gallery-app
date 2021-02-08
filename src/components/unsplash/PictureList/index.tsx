import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useHistory } from "react-router-dom";

import { ImageAPI } from "../../../types/unsplash";
import PictureModal from "../PictureModal";

import { StyledListWrapper } from "./PictureListStyle";
import util from "../../../utils";
import { addOneImage } from "../../../redux/thunks/Gallery";
import Message from "../../common/Message";
import CardImage from "../../common/CardImage";

type Props = {
  picturesArray: ImageAPI[];
};

const PictureList: FC<Props> = ({ picturesArray }) => {
  const _isMounted = useRef(true);
  const [modalData, setModalData] = useState<ImageAPI | null>(null);
  const [modalPictureIndex, setModalPictureIndex] = useState<number>(0);
  const [isModalError, setIsModalError] = useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const { getUnsplashSinglePicture, dataUrlToFile } = util;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return () => {
      _isMounted.current = false; // ComponentWillUnmount in Class Component
    };
  }, []);

  const handleGetPicture = async (id: string, index: number) => {
    setIsModalError(false);
    const apiData: ImageAPI = await getUnsplashSinglePicture(id);
    if (apiData instanceof Error) {
      setIsModalError(true);
    } else {
      setIsModalError(false);
      setModalData(apiData);
      setModalPictureIndex(index);
    }
  };

  const handleSaveModalPicture = async (picture: ImageAPI) => {
    const fileFormat = await dataUrlToFile(picture.urls.regular, picture.id);
    if (fileFormat && user && _isMounted.current) {
      dispatch(addOneImage(fileFormat, user));
      history.push("/dashboard");
    }
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleChangeModalPicture = (index: number) => {
    handleGetPicture(picturesArray[index].id, index);
  };

  const pictures = picturesArray.map((picture, index) => (
    <CardImage
      key={picture.id}
      id={picture.id}
      image={picture.urls.small}
      alt={picture.alt_description}
      clicked={() => handleGetPicture(picture.id, index)}
    />
  ));

  return (
    <StyledListWrapper data-testid="picture-list">
      {pictures}
      {isModalError && (
        <Message msg="Connection failed... Please try again." type="danger" />
      )}
      {modalData && (
        <PictureModal
          pictureData={modalData}
          pictureIndex={modalPictureIndex}
          lastIndex={picturesArray.length - 1}
          changePicture={handleChangeModalPicture}
          savePicture={handleSaveModalPicture}
          closeModal={handleCloseModal}
        />
      )}
    </StyledListWrapper>
  );
};

export default PictureList;
