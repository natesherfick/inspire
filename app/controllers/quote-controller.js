import QuoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function drawQuote() {
  let quote = store.State.quote.body
  let author = store.State.quote.author
  console.log("HERE IT IS", quote);

  document.getElementById("quote").innerText = quote
  document.getElementById("author").innerText = author
  

}

export default class QuoteController {

  constructor(){
    QuoteService.getQuote()
    store.subscribe("quote", drawQuote)
  }
}
