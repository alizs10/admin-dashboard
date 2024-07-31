'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor() {


    return (

        <CKEditor
            editor={ClassicEditor}
            data={"<p>Your text here...</p>"}
            onChange={(event) => {
                console.log(event);
            }}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
            onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
                editor.editing.view.change((writer) => {
                    writer.setStyle(
                        "height",
                        "200px",
                        editor.editing.view.document.getRoot()
                    );
                });
            }}
        />
    );
}

export default Editor;