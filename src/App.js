import Menu from './components/Menu.js';
import MarkdownToText from './components/MarkdownToText.js';
import TextToMarkdown from './components/TextToMarkdown.js';
import './components/MarkdownToText.js';
import './components/TextToMarkdown.js';
import React, {useState, useEffect} from 'react';
import {currentDate} from './Utils.js';
import './assets/App.css';
import { marked } from 'marked';


function App() {

  const [menuChange, setMenuChange] = useState("menu");
  const [markdownInput, setMarkdownInput] = useState(`
  # Title

  ## Subtitle

  This is a paragraph with **bold text** and *italic text*.

  ### List Example

  - Item 1
  - Item 2
    - Subitem A
    - Subitem B

  ### Code Block

  \`\`\`javascript
  function helloWorld() {
      console.log("Hello, world!");
  }
  \`\`\`
  `);
  const [markdownOutput, setMarkdownOutput] = useState(marked(markdownInput));
  const date = currentDate();

  function handleClickMarkToText(){
    setMenuChange("markdown");
  }

  function handleClickTextToMark(){
    setMenuChange("text");
  }

  function handleClickBack(){
    setMenuChange("menu");
  }

  function handleChangeInput(event){
    const text = event.target.value;
    setMarkdownInput(text);
    setMarkdownOutput(marked(text));
  }

  function handleClickClear(){
    setMarkdownInput("");
    setMarkdownOutput("");
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#F4BF96';
  },[])

  return (
    <div>
      {(menuChange === 'menu') ? <Menu currDate={date} onClickChangeMarkdown={handleClickMarkToText} onClickChangeText={handleClickTextToMark} /> : (menuChange === 'markdown') ? <MarkdownToText  onClickBack={handleClickBack} input={markdownInput} onChangeInput={handleChangeInput} onClickClear={handleClickClear} output={markdownOutput} /> : <TextToMarkdown />}
    </div>

  );
}

export default App;
