"use client";

import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadImg({ onChange }) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,

    onDrop: (acceptedFiles) => {
      const uploadedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setFiles(uploadedFiles);

      if (uploadedFiles.length > 0) {
        onChange(uploadedFiles[0].name);
      }
    },
  });

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center hover:bg-gray-100"
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500">
          Drag & Drop an image here or click to upload
        </p>
      </div>

      {files.length > 0 && (
        <img
          src={files[0].preview}
          alt="Preview"
          className="h-28 w-28 rounded-lg border object-cover"
        />
      )}
    </div>
  );
}