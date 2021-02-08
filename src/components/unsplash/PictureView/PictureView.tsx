import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ImageAPI } from "../../../types/unsplash";
import { getImagesApi } from "../../../redux/thunks/Unsplash";
import {
  StyledWrapper,
  StyledBackground,
  StyledHeading,
} from "./PictureViewStyle";
import util from "../../../utils";

import SearchBar from "../SearchBar";
import PictureList from "../PictureList";
import LoadingSpinner from "../../common/LoadingSpinner";
import Message from "../../common/Message";

type Props = {
  location: {
    state: string;
    pathname: string;
  };
};

const PictureView: FC<Props> = ({ location }) => {
  const { state: searchTerm } = location;

  const [apiImages, setApiImages] = useState<ImageAPI[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { getUnsplashPictures } = util;
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    setIsInitialLoading(true);
    handleGetPictures();
    setPageNumber(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleGetPictures = async () => {
    const apiData: ImageAPI[] = await getUnsplashPictures(
      searchTerm,
      pageNumber
    );
    if (apiData instanceof Error) {
      setIsError(true);
      setIsInitialLoading(false);
    } else {
      setIsError(false);
      setIsInitialLoading(false);
      dispatch(getImagesApi(apiData));
      setApiImages(apiData);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const handleGetMorePictures = async () => {
    const apiData: ImageAPI[] = await getUnsplashPictures(
      searchTerm,
      pageNumber
    );
    if (apiData instanceof Error) {
      setIsError(true);
      setIsLoading(false);
    } else {
      const noDuplicatesImages = apiImages;
      const picturesIdsArray = noDuplicatesImages.map((item) => item.id);
      apiData.forEach((item: ImageAPI) => {
        if (!picturesIdsArray.includes(item.id)) {
          noDuplicatesImages.push(item);
        }
      });
      setApiImages([...noDuplicatesImages]);
      setIsLoading(false);
      setIsError(false);
      dispatch(getImagesApi(apiData));
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsLoading(true);
      handleGetMorePictures();
    }
  };

  return (
    <StyledWrapper data-testid="results-view">
      <SearchBar />
      <StyledHeading>{searchTerm}</StyledHeading>
      {isError && (
        <Message
          msg="Connection failed or Something went wrong... Please try again later."
          type="danger"
        />
      )}
      {apiImages && <PictureList picturesArray={apiImages} />}
      {isInitialLoading && <LoadingSpinner center />}
      {isLoading && <LoadingSpinner />}
      <StyledBackground />
    </StyledWrapper>
  );
};

export default PictureView;
