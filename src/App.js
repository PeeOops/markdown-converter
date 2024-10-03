import Menu from './components/Menu.js';
import MarkdownToText from './components/MarkdownToText.js';
import TextToMarkdown from './components/TextToMarkdown.js';
import './components/MarkdownToText.js';
import './components/TextToMarkdown.js';
import React, {useState, useEffect} from 'react';
import currentDate from './Utils.js';
import './assets/App.css';

function App() {

  const [menuChange, setMenuChange] = useState("menu");
  const date = currentDate();

  function handleClickMarkToText(){
    setMenuChange("markdown");
  }

  function handleClickTextToMark(){
    setMenuChange("text");
  }


  useEffect(() => {
    document.body.style.backgroundColor = '#F4BF96';
  },[])

  return (
    <div>
      {(menuChange === 'menu') ? <Menu currDate={date} onClickChangeMarkdown={handleClickMarkToText} onClickChangeText={handleClickTextToMark} /> : (menuChange === 'markdown') ? <MarkdownToText  /> : <TextToMarkdown />}
    </div>

  );
}

export default App;
