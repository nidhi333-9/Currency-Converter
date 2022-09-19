const api = "https://api.exchangerate-api.com/v4/latest/USD";

let amount = document.getElementById("n-amount");
let convertBtn = document.getElementById("convert-btn");
let fromCurrency = document.querySelector(".from");
let toCurrency = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let amountValue;

fromCurrency.addEventListener('change', (event) => {
   resultFrom = `${event.target.value}`;
})

toCurrency.addEventListener('change', (event) => {
   resultTo = `${event.target.value}`
});

amount.addEventListener('input', updateValue);

function updateValue(e) {
   amountValue = e.target.value;
}

convertBtn.addEventListener("click", getResults);

async function getResults() {
   fetch(`${api}`)
      .then(currency => {
         return currency.json();
      })
      .then(displayResults);
}

function displayResults() {
   let fromRate = currency.rates[resultFrom];
   let toRate = currency.rates[resultTo];
   finalValue.innerHTML = ((toRate / fromRate) * amountValue).toFixed(3);
   finalAmount.style.display = "block";
}