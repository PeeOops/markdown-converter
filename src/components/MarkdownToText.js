import '../assets/MarkdownToText.css';
import IconMemo from '../assets/img/memo-icon.png';

function MarkdownToText(){
    return(
        <div>
            <button>Back</button>
            <div className="container">
                <div className="markdown">
                    <div className="markdown-navbar">
                        <p>Markdown</p>
                        <img src={IconMemo} alt="memo-icon" />
                    </div>
                    <textarea></textarea>
                </div>
                <div className="text">
                    <div className="text-navbar">
                            <p>Result</p>
                            <img src={IconMemo} alt="memo-icon" />
                    </div>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}

export default MarkdownToText;