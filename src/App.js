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


const turndownService = new TurndownService({headingStyle : 'atx'});

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
  const [htmlInput, setHtmlInput] = useState(`<div>
    <h1>Welcome to My Website</h1>
    <h2>About Us</h2>
    <p>This is a simple paragraph that describes the website. You can include <strong>bold text</strong> and <em>italic text</em> for emphasis.</p>
    <h3>Features</h3>
    <ul>
        <li>Feature One</li>
        <li>Feature Two</li>
        <li>Feature Three</li>
    </ul>
    <h4>Contact Us</h4>
    <p>If you have any questions, feel free to <a href="mailto:info@example.com">email us</a>.</p>
    <h5>Code Example</h5>
    <pre>
        <code>
function helloWorld() {
    console.log("Hello, world!");
}
        </code>
    </pre>
    <h6>Footer</h6>
    <p>Thank you for visiting our site!</p>
</div>
`);
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
    if(menuChange === "markdown"){
      copyToClipboard(markdownInput);
    }else if(menuChange === "text"){
      copyToClipboard(htmlInput);
    }
  }

  function handleCopyOutputClick(){
    if(menuChange === "markdown"){
      copyToClipboard(markdownOutput);
    }else if(menuChange === "text"){
      copyToClipboard(htmlOutput);
    }

  }

  useEffect(() => {
    document.body.style.backgroundColor = '#F4BF96';
  },[])

  return (
    <div>
      {(menuChange === 'menu') ? <Menu currDate={date} onClickChangeMarkdown={handleClickMarkToText} onClickChangeText={handleClickTextToMark} /> : (menuChange === 'markdown') ? <MarkdownToText  onClickBack={handleClickBack} input={markdownInput} onChangeInput={handleChangeInput} onClickClear={handleClickClear} onClickCopyInput={handleCopyInputClick} onClickCopyOutput={handleCopyOutputClick} output={markdownOutput} /> : <HtmlToMarkdown onClickBack={handleClickBack} onChangeInput={handleChangeInput} onClickClear={handleClickClear} input={htmlInput} output={htmlOutput} onClickCopyInput={handleCopyInputClick} onClickCopyOutput={handleCopyOutputClick} />}
    </div>

  );
}

export default App;
