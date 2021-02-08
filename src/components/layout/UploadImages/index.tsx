import React, { FC, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../common/Modal";
import FileUpload from "../../common/FileUpload";
import Button from "../../common/Button";
import { RootState } from "../../../redux/store";
import { addImages } from "../../../redux/thunks/Gallery";
import Title from "../../common/Title";

import { StyledContent } from "./UploadImagesModalStyle";

interface UploadImagesModalProps {
  onClose: () => void;
  goTo?: () => void;
}

interface Image {
  name: string;
  progress: number;
}

const UploadImagesModal: FC<UploadImagesModalProps> = ({ onClose, goTo }) => {
  const [files, setFiles] = useState<FileList | null>();
  const [filesArr, setFilesArr] = useState<Image[]>([]);
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setDisabled(false);
      let images: Image[] = [];
      Array.from(e.currentTarget.files).forEach((file) =>
        images.push({ name: file.name, progress: 0 })
      );
      setFilesArr(images);
    } else {
      setFilesArr([]);
      setDisabled(true);
    }
    setFiles(e.currentTarget.files);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (files && files.length > 0 && user) {
      dispatch(
        addImages(files, user, (progress, file) => {
          const copyOfFilesArr = [...filesArr];
          const findFile = copyOfFilesArr.find((f) => f.name === file.name);
          if (findFile) {
            findFile.progress = Math.floor(progress);
          }
          const updatedArr = copyOfFilesArr.map((f) =>
            f.name === file.name ? (findFile ? findFile : f) : f
          );
          setFilesArr(updatedArr);
        })
      );
      setFiles(null);
      setDisabled(true);
    }
  };

  return (
    <>
      <Modal onClose={onClose}>
        <StyledContent>
          <Title as="h3" align="center">
            {"Upload images"}
          </Title>
          <form onSubmit={submitHandler}>
            <FileUpload onChange={changeHandler} />
            {filesArr.length > 0 && (
              <ul>
                {filesArr.map((file: Image, index) => (
                  <li key={index}>
                    <p>
                      {file.name}
                      {file.progress === 100 && <span>UPLOADED</span>}
                    </p>
                    <progress value={file.progress} max="100">
                      {file.progress}%
                    </progress>
                  </li>
                ))}
              </ul>
            )}
            <Button text="Upload" disabled={disabled} type={"submit"} />
            <Button text="Close" onClick={onClose} />
          </form>
        </StyledContent>
      </Modal>
    </>
  );
};

export default UploadImagesModal;
