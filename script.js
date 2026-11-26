console.log("the script has connected successfully");

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const swapBtn = document.getElementById('swap-btn');
const convertBtn = document.getElementById('convert-btn');
const resultOutput = document.getElementById('result-output');
const rateOutput = document.getElementById('rate-output')

console.log({amountInput, fromCurrency, toCurrency, swapBtn, convertBtn, resultOutput, rateOutput});


convertBtn.addEventListener("click", async () => {
    const amount = Number(amountInput.value);
    if(Number.isNaN(amount) || amount <= 0){
        resultOutput.textContent = "enter an amount greater than zero";
        rateOutput.textContent = "";
        return;

    }
    const from = fromCurrency.value;
    const to = toCurrency.value;


    console.log("Convert clicked:", { amount, from, to });


    const url = `https://open.er-api.com/v6/latest/${from}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log("API response:", data);

    const rate = data.rates[to];
    const convertedAmount = amount * rate;

    console.log("Conversion calculation:", { amount, from, to, rate, convertedAmount });

    resultOutput.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    rateOutput.textContent = `1 ${from} = ${rate} ${to}`;

    console.log("UI updated:", {
        result: resultOutput.textContent,
        rateText: rateOutput.textContent
    });
});







