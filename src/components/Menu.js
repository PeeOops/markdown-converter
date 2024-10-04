import '../assets/Menu.css';

function Menu({currDate, onClickChangeMarkdown, onClickChangeText}){
    return(
        <div className="menu">
            <div className="menu-navbar">
                <p>{currDate}</p>
                <div className="bullets">
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div>
            </div>
            <h1>Markdown Converter</h1>
            <p>A tool that transforms text formatted in Markdown into text formats.</p>
            <div className="menu-buttons">
                <button onClick={onClickChangeMarkdown} >Markdown to Text</button>
                <button onClick={onClickChangeText} >HTML to Markdown</button>
            </div>
        </div>
    );
}

export default Menu;