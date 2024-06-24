import { Editor } from "@tinymce/tinymce-react";
import React from "react";

type TinyMCEEditorProps = {
  id: string;
  apiKey: string;
  initialValue: any;
  onChange: (content: any) => void;
};

const TextRichEditor = ({
  id,
  apiKey,
  initialValue,
  onChange,
}: TinyMCEEditorProps) => {
  return (
    <Editor
      id={id}
      apiKey={apiKey}
      value={initialValue}
      onEditorChange={onChange}
      init={{
        height: 400,
        resize: false,
        branding: false,
        statusbar: false,
      }}
    />
  );
};

export default TextRichEditor;
