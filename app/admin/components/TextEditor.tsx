'use client'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


const TextEditor = () => {
    const [description, setDescription] = useState('');

    const handleQuillChange = (content: string) => {
        // Handle the content change
        setDescription(content);
    };

    return (
        <div className='bg-white dark:bg-gray-600'>
            <ReactQuill
                theme="snow"
                onChange={handleQuillChange}
            />
        </div>
    )
}

export default TextEditor