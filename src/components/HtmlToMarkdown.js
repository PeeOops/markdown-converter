import '../assets/HtmlToMarkdown.css';

function HtmlToMarkdown({onClickBack}){
    return(
        <div>
            <button className="back" onClick={onClickBack} >Back</button>
        </div>
    )
}

export default HtmlToMarkdown;