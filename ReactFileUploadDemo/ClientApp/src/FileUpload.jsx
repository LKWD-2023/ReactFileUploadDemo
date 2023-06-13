import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const toBase64 = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const FileUpload = () => {

    const fileRef = useRef(null);

    const onUploadClick = async () => {
        const file = fileRef.current.files[0];
        const base64 = await toBase64(file);
        await axios.post('/api/imageupload/upload', { base64, name: file.name });
        window.location.href= `/api/imageupload/view?name=${file.name}`;
    }

    return <>
        <div className='row'>
            <div className='col-md-6'>
                <input ref={fileRef} type='file' className='form-control' />
            </div>
            <div className='col-md-6'>
                <button className='btn btn-primary w-100' onClick={onUploadClick}>Upload</button>
            </div>
        </div>
    </>
}

export default FileUpload;