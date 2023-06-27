'use client'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
interface TextEditorProps {
    id: string
    setValue: any;
    disabled?: boolean
    value?: any
}

const TextEditor: React.FC<TextEditorProps> = ({
    id,
    setValue,
    disabled,
    value
}) => {

    const handleQuillChange = (content: string) => {
        setValue(id, content); // Set the value using setValue from react-hook-form
    };

    return (
        <div className='bg-white text-black dark:bg-gray-600 w-full relative'>
            <ReactQuill
                theme="snow"
                onChange={handleQuillChange}
                readOnly={disabled}
                value={value}
            />
        </div>
    );
};

export default TextEditor;
