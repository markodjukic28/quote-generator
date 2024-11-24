const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = 'https://qapi.vercel.app/api/random';
const newQuoteBtn = document.querySelector('.new-quote');
const tweetBtn = document.querySelector('.tweet-btn');

async function getquote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
}

getquote(api_url);

newQuoteBtn.addEventListener('click', function () {
  getquote(api_url);
});

function tweet() {
  window.open(
    'https://twitter.com/intent/tweet?text=' +
      quote.innerHTML +
      '---- by ' +
      author.innerHTML,
    'Tweet Window',
    'width=600, height=300'
  );
}

tweetBtn.addEventListener('click', tweet);
