import '../assets/MarkdownToText.css';
import IconMemo from '../assets/img/memo-icon.png';
import IconTrash from '../assets/img/trash-icon.png';
import { HtmlRenderer } from '../Utils';

function MarkdownToText({onClickBack, onChangeInput, onClickClear, input, output}){
    return(
        <div>
            <button className="back" onClick={onClickBack} >Back</button>
            <div className="container">
                <div className="markdown">
                    <div className="markdown-navbar">
                        <p>Markdown</p>
                        <div className="icon">
                            <img src={IconTrash} alt="memo-icon" onClick={onClickClear} />
                            <img src={IconMemo} alt="memo-icon" />
                        </div>

                    </div>
                    <textarea onChange={onChangeInput} value={input}></textarea>
                </div>
                <div className="text">
                    <div className="text-navbar">
                            <p>Result</p>
                            <img src={IconMemo} alt="memo-icon" />
                    </div>
                    <div className="result">{<HtmlRenderer htmlString={output} />}</div>
                </div>
            </div>
        </div>
    )
}

export default MarkdownToText;