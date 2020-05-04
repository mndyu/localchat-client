import React, { useState, useEffect } from 'react';
import styles from './Input.css'
import {Editor} from 'react-draft-wysiwyg';
import { EditorState, convertFromHTML, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

type Props = {
  setText: Function;
};

function App({setText}: Props ) {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(),
  );

  const set = () => {
    console.log(editorState.getCurrentContent())
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

    const sampleMarkup =
    '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +
    '<a href="http://www.facebook.com">Example link</a>';
    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    setEditorState(EditorState.createWithContent(state))

  }

  const onChange = (e: any) => {
    console.log(e)
  }

  return (
      <div className={styles.container}>
          <hr />
          <div className={styles.selected}>
              selected User:
          </div>
          <div className={styles.intputGroup}>
            <div>
              <Editor editorState={editorState} onChange={onChange} onEditorStateChange={setEditorState} />
            </div>
            <div>
              <div className={styles.btn} onClick={e => set()}>
                send
              </div>
            </div>
          </div>
      </div>
    );
  }
  
export default App;