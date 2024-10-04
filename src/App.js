import Menu from './components/Menu.js';
import MarkdownToText from './components/MarkdownToText.js';
import HtmlToMarkdown from './components/HtmlToMarkdown.js';
import './components/MarkdownToText.js';
import './components/HtmlToMarkdown.js';
import React, {useState, useEffect} from 'react';
import {currentDate} from './Utils.js';
import { copyToClipboard } from './Utils.js';
import './assets/App.css';
import { marked } from 'marked';
import TurndownService from 'turndown';


const turndownService = new TurndownService();

function App() {
  const date = currentDate();

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
  const [htmlInput, setHtmlInput] = useState(`<h1>Welcome</h1>`);
  const [htmlOutput, setHtmlOutput] = useState(turndownService.turndown(htmlInput));


  function handleClickMarkToText(){
    setMenuChange("markdown");
  }

  function handleClickTextToMark(){
    setMenuChange("text");
  }

  function handleClickBack(){
    setMenuChange("menu");
  }

  function handleChangeInput(event) {
    const text = event.target.value;
    if (menuChange === "markdown") {
      setMarkdownInput(text);
      setMarkdownOutput(marked(text));
    } else if (menuChange === "text") {
      setHtmlInput(text);
      setHtmlOutput(turndownService.turndown(text));
    }
  }

  function handleClickClear(){
    if(menuChange === "markdown"){
      setMarkdownInput("");
      setMarkdownOutput("");
    }else if(menuChange === "text"){
      setHtmlInput("");
      setHtmlOutput("");
    }
  }

  function handleCopyInputClick(){
    copyToClipboard(markdownInput);
  }

  function handleCopyOutputClick(){
    copyToClipboard(markdownOutput);
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#F4BF96';
  },[])

  return (
    <div>
      {(menuChange === 'menu') ? <Menu currDate={date} onClickChangeMarkdown={handleClickMarkToText} onClickChangeText={handleClickTextToMark} /> : (menuChange === 'markdown') ? <MarkdownToText  onClickBack={handleClickBack} input={markdownInput} onChangeInput={handleChangeInput} onClickClear={handleClickClear} onClickCopyInput={handleCopyInputClick} onClickCopyOutput={handleCopyOutputClick} output={markdownOutput} /> : <HtmlToMarkdown onClickBack={handleClickBack} onChangeInput={handleChangeInput} onClickClear={handleClickClear} input={htmlInput} output={htmlOutput} />}
    </div>

  );
}

export default App;
