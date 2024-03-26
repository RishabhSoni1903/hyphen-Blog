import { convertToRaw, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import PostBlogBtn from "./PostBlogBtn";

export default function TextEditor() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

    const data = { title, summary, content }

    const onEditorStateChange = function (editorState) {
        setEditorState(editorState);
        let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        setContent(text);
    };

    return (
        <div
            className="editorJs relative">
            <div
                className="p-4 float-right">
                <PostBlogBtn
                    data={data}
                />
            </div>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title of the blog"
                    className="w-2/5 rounded border-none mt-8 text-gray-700 text-2xl font-semibold focus:ring-0"
                />
            </div>
            <div>
                <input
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    type="text"
                    placeholder="Summary of the blog..."
                    className="w-2/5 rounded border-none mt-8 mb-8 text-gray-700 text-lg font-medium focus:ring-0"
                />
            </div>
            <div>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                    placeholder="Write something interesting here..."
                />
            </div>
        </div>
    );
}
