const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = option2.value = currency;
      option1.textContent = option2.textContent = currency;
      fromCurrencySelect.appendChild(option1);
      toCurrencySelect.appendChild(option2);
    });
  })
  .catch(error => console.error("Error:", error));

convertBtn.addEventListener("click", convertCurrency);

function convertCurrency() {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (!amount) {
    resultElement.textContent = "Please enter an amount.";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency];
      const converted = (amount * rate).toFixed(2);
      resultElement.textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
    })
    .catch(error => {
      console.error("Error:", error);
      resultElement.textContent = "Conversion failed. Try again.";
    });
}
