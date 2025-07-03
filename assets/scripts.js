document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/quote.json")
    .then((res) => res.json())
    .then((quotes) => {
      const random = Math.floor(Math.random() * quotes.length);
      document.getElementById("daily-quote").textContent = quotes[random];
    });
});
