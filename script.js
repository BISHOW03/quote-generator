let quotes = [];

// Fetch quotes from JSON
// fetch('data/quotes.json')
//   .then(res => res.json())
//   .then(data => {
//     quotes = data.quotes;
//     newQuote();
//   });

fetch('https://bishow03.github.io/quote-generator/data/quotes.json')
  .then(res => res.json())
  .then(data => {
    quotes = data.quotes;
    newQuote();
  });

// function newQuote() {
function newQuote() {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.innerText = random.text;
    quoteAuthor.innerText = random.author;
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 300);
}

function copyQuote() {
  const text = `"${document.getElementById('quote-text').innerText}" ${document.getElementById('quote-author').innerText}`;
  navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}

function shareTwitter() {
  const text = encodeURIComponent(`"${document.getElementById('quote-text').innerText}" ${document.getElementById('quote-author').innerText}`);
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

function shareFacebook() {
  const text = encodeURIComponent(`"${document.getElementById('quote-text').innerText}" ${document.getElementById('quote-author').innerText}`);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=&quote=${text}`, '_blank');
}

function shareWhatsApp() {
  const text = encodeURIComponent(`"${document.getElementById('quote-text').innerText}" ${document.getElementById('quote-author').innerText}`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function downloadQuote() {
  const quoteBox = document.getElementById("quote-box");

  // Hide controls temporarily
  const controls = document.querySelector('.controls');
  controls.style.display = "none";

  html2canvas(quoteBox).then(canvas => {
    const link = document.createElement("a");
    link.download = "quote.png";
    link.href = canvas.toDataURL();
    link.click();

    // Show controls again
    controls.style.display = "flex";
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
