import { FC, useEffect } from "react";
import { ImageAPI } from "../../../types/unsplash";
import { StyledVeilImage, StyledIconSaveImage } from "./PictureModalStyle";
import PictureModalInfo from "../PictureModalInfo";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GoCloudDownload } from "react-icons/go";
import utils from "../../../utils";
import ButtonIcon from "../../common/ButtonIcon";
import ModalImage from "../../common/ModalImage";

type Props = {
  pictureData: ImageAPI;
  pictureIndex: number;
  lastIndex: number;
  changePicture: (num: number) => void;
  savePicture: (picture: ImageAPI) => void;
  closeModal: () => void;
};

const PictureModal: FC<Props> = ({
  pictureData,
  pictureIndex,
  lastIndex,
  changePicture,
  savePicture,
  closeModal,
}) => {
  const { urls, alt_description } = pictureData;
  const { disableScroll, enableScroll } = utils;

  useEffect(() => {
    disableScroll();
    return () => {
      enableScroll();
    };
  }, [disableScroll, enableScroll]);

  return (
    <ModalImage
      url={urls.regular}
      alt={alt_description}
      closeModal={closeModal}
      opacity="opacity"
      padding={"md"}
    >
      <PictureModalInfo pictureData={pictureData} />
      <StyledVeilImage>
        <ButtonIcon clicked={() => savePicture(pictureData)}>
          <StyledIconSaveImage>
            <GoCloudDownload />
          </StyledIconSaveImage>
        </ButtonIcon>
      </StyledVeilImage>
      {pictureIndex !== 0 && (
        <ButtonIcon leftArrow clicked={() => changePicture(pictureIndex - 1)}>
          <FaAngleLeft />
        </ButtonIcon>
      )}
      {pictureIndex !== lastIndex && (
        <ButtonIcon rightArrow clicked={() => changePicture(pictureIndex + 1)}>
          <FaAngleRight />
        </ButtonIcon>
      )}
    </ModalImage>
  );
};

export default PictureModal;
