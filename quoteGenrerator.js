const quotes = [
    {
    quotes: "You only live ones, but if you do it right, once is enough.",
    writer: "- "
},
{
    quotes: "Make money.",
    writer: "- Israel"
},
{
    quotes: "Maintain peak steeze",
    writer: "- Daniel"
},
{
    quotes: "Patience is vital",
    writer: "- Bose"
},
{
    quotes: "There's always tomorrow, so do good today",
    writer: "- Precious"
},
{
    quotes: "The purpose of our lives is to be happy.",
    writer: "- Omos"
}
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

// btn.addEventListener("click",function(){
//     let randomQuote = Math.floor(Math.random()* quotes.length);

//     quote.innerHTML = quotes[randomQuote].quotes;

//     writer.innerHTML = quotes[randomQuote].writer;
// });

function mk() {
let randomQuote = Math.floor(Math.random()* quotes.length);

quote.innerHTML = quotes[randomQuote].quotes;

writer.innerHTML = quotes[randomQuote].writer;
}