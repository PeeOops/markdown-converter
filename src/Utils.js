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

  