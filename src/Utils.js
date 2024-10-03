const date = new Date();

export default function currentDate(){
    return date.toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "numeric",
    day: "numeric"
});
}