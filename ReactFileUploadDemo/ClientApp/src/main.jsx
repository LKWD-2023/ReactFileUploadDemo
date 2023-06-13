import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import FileUpload from './FileUpload';

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='container mt-5'>
        <FileUpload />
    </div>
)
