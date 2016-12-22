import QuoteManager from './components/QuoteManager'
import data from '../data.json'

const quoteManager = new QuoteManager(data)

// weirdo trick
// elements with a specific id can be referred to via the window object
var quoteElement = window.quote;
var twitterAnchor = window.twitteranchor;

window.quotebutton.onclick = () => {
  var quoteOrDialog = quoteManager.getRandomQuoteOrDialog();

  var quoteOrDialogAsTweet = encodeURIComponent(quoteOrDialog.join(' - '));

  if (quoteOrDialogAsTweet.length > 125) {
    quoteOrDialogAsTweet = quoteOrDialogAsTweet.substr(0, 125) + '...';
  }

  // set the quote
  quoteElement.innerHTML = quoteOrDialog.reduce((textContent, quote) => {
    return `
      ${textContent}
      <p>${quote}</p>
    `
  }, '') 

  // set the twitter href
  twitterAnchor.href = 'https://twitter.com/intent/tweet?via=Mi_PiCo&hashtags=frasesdorante&url=https://painatalman.github.io/frasesdorante&text=' + quoteOrDialogAsTweet;
};

// set an initial quote
window.quotebutton.click();
