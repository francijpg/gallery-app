import React, { FC, useRef, FormEvent } from "react";

import Button from "../Button";

interface FileUploadProps {
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pickImageButtonClickHandler = () => {
    const input = fileInputRef.current;
    if (input) {
      input.click();
    }
  };

  return (
    <>
      <input
        type="file"
        name="files"
        onChange={onChange}
        multiple
        ref={fileInputRef}
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
