'use client'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';

interface TextEditorProps {
    id: string;
    setValue: any;
    disabled?: boolean;
    value?: any;
}

const TextEditor: React.FC<TextEditorProps> = ({
    id,
    setValue,
    disabled,
    value,
}) => {
    const editorRef = useRef<ReactQuill | null>(null);

    const handleQuillChange = () => {
        const editor = editorRef.current?.getEditor();
        if (editor) {
            setValue(id, editor.root.innerHTML);
        }
    };

    return (
        <div className="bg-white text-black dark:bg-gray-600 w-full relative">
            <ReactQuill
                theme="snow"
                onChange={handleQuillChange}
                readOnly={disabled}
                value={value}
                ref={editorRef}
            />
        </div>
    );
};

export default TextEditor;
