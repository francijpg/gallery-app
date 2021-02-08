import React, { FC } from "react";
import { ImageAPI } from "../../../types/unsplash";
import {
  StyledOwnerData,
  StyledOwnerImage,
  StyledOwnerInfo,
  StyledParagraph,
  StyledLikesInfo,
  StyledIconLikes,
  StyledLocationInfo,
  StyledDateInfo,
  StyledIconDate,
} from "./PictureModalInfoStyle";
import { AiFillLike } from "react-icons/ai";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import utils from "../../../utils";

type Props = {
  pictureData: ImageAPI;
};

const PictureModalInfo: FC<Props> = ({ pictureData }) => {
  const { user, likes, created_at } = pictureData;
  const userTwitterUrl = `https://twitter.com/${user.twitter_username}`;
  const { dateToStringFormat } = utils;
  const date = dateToStringFormat(created_at);

  return (
    <>
      <StyledOwnerData>
        <StyledOwnerImage src={user.profile_image.small} alt={user.name} />
        <StyledOwnerInfo>
          <StyledParagraph>{user.name}</StyledParagraph>
          <a href={userTwitterUrl} target="_blank" rel="noreferrer">
            {user.twitter_username ? `@${user.twitter_username}` : null}
          </a>
        </StyledOwnerInfo>
      </StyledOwnerData>
      <StyledLikesInfo>
        <StyledIconLikes>
          <AiFillLike />
        </StyledIconLikes>
        <StyledParagraph>{likes}</StyledParagraph>
      </StyledLikesInfo>
      {user.location && (
        <StyledLocationInfo>
          <MdLocationOn />
          <StyledParagraph>{user.location}</StyledParagraph>
        </StyledLocationInfo>
      )}
      <StyledDateInfo>
        <StyledParagraph>
          <StyledIconDate>
            <MdDateRange />
          </StyledIconDate>
          {date}
        </StyledParagraph>
      </StyledDateInfo>
    </>
  );
};

export default PictureModalInfo;
