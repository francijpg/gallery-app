import React, { FC, useRef, FormEvent } from "react";

import Button from "../Button";

interface FileUploadProps {
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onChange }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const pickImageButtonClickHandler = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        name="files"
        onChange={onChange}
        multiple
        ref={fileInput}
        hidden
      />
      <Button
        text="Pick images"
        colorType="info"
        onClick={pickImageButtonClickHandler}
        type="button"
      />
    </>
  );
};

export default FileUpload;
