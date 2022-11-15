/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { Icon } from "../components";
import { useDropzone } from "react-dropzone";
import { Pen } from "../icons";

import { toBase64 } from "../utils";

type FileUploadProps = {
  blob: string;
  setBlob: (blob: string) => void;
  setFile: (file: File) => void;
  file: any;
  isPorfile?: boolean;
  v2?: boolean;
};

const FileUpload = ({
  blob,
  file,
  setFile,
  setBlob,
  isPorfile = false,
  v2 = false,
}: FileUploadProps) => {
  const handleDropCover = useCallback((acceptedFiles: string) => {
    // Do something with the files
    setBlob(acceptedFiles);
  }, []);

  const onDrop = async ([file]: File[]) => {
    const acceptedFiles = (await toBase64(file)) as string;
    setFile(file);
    handleDropCover(acceptedFiles);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const filePath = !blob ? file : blob;

  const placeholder = isPorfile
    ? "/assets/images/user-placeholder.jpg"
    : "/assets/images/image-placeholder.jpg";
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div
        className={`relative overflow-hidden rounded-lg ${
          v2 ? "w-full h-[300px]" : "w-[200px]  h-[200px] "
        }`}
      >
        <img
          src={!filePath ? placeholder : filePath}
          alt="image"
          className="h-full w-full object-center object-cover"
        />
        <div className="bg-white rounded-full cursor-pointer absolute p-1 bottom-2 right-2 w-[32px] h-[32px] flex justify-center items-center">
          <Icon Component={Pen} variant="primary" size="xSmall" />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
