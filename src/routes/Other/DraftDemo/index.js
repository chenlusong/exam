import React from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import {Card,Row,Col,BackTop} from 'antd'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css'

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class DraftDemo extends React.Component{
  state = {
    editorState: EditorState.createEmpty(),
    contentState:content
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  onContentStateChange =  (contentState) => {
    this.setState({
      contentState,
    });
  };

  uploadImageCallBack = ()=>{

  }
  render(){
    const cardContent = `此页面用到的富文本编辑是<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg@^1.12.13</a>`
    const { editorState,contentState } = this.state;
    return (
      <div>
       1
      </div>
    )
  }
}
export default DraftDemo