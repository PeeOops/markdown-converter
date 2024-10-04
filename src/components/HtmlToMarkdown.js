import '../assets/HtmlToMarkdown.css';
import IconTrash from '../assets/img/trash-icon.png';
import IconMemo from '../assets/img/memo-icon.png';

function HtmlToMarkdown({onClickBack, onClickClear, onClickCopyOutput, onChangeInput, onClickCopyInput, input, output}){
    return(
        <div>
            <button className="back" onClick={onClickBack} >Back</button>
            <div className="container">
                <div className="html">
                    <div className="html-navbar">
                        <p>HTML</p>
                        <div className="icon">
                            <img src={IconTrash} alt="trash-icon" onClick={onClickClear} />
                            <img src={IconMemo} alt="memo-icon" onClick={onClickCopyInput} />
                        </div>
                    </div>
                    <textarea onChange={onChangeInput} value={input} ></textarea>
                </div>
                <div className="markeddown">
                    <div className="markeddown-navbar">
                        <p>Result</p>
                        <img src={IconMemo} alt="memo-icon" onClick={onClickCopyOutput} />
                    </div>
                    <div className="markeddownResult">{output}</div>
                </div>

            </div>
        </div>
    )
}

export default HtmlToMarkdown;