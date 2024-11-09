import React, {useEffect, useState} from 'react';
import {useDropzone,thumbsContainer} from 'react-dropzone';

export default function UploadImg() {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: {
        'image/*': []
      },
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
    
    const thumbs = files.map(file => (
      <div key={file.name}>
        <div >
          <img
            src={file.preview}
            width={100}
            height={100}
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
        </div>
      </div>
    ));
  
    useEffect(() => {
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
  
    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})} className='bg-gray-50 rounded-md p-3 h-20 my-5'>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      </section>
    );
  }