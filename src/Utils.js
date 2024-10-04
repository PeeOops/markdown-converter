import DOMPurify from "dompurify";

const date = new Date();

export function currentDate(){
    return date.toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "numeric",
    day: "numeric"
});
}

export function HtmlRenderer({ htmlString }) {
    const sanitizedHtml = DOMPurify.sanitize(htmlString);

    return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    );
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text Copied');
        })
        .catch(err => {
            alert('Failed to copy text: ', err);
        });
}

  