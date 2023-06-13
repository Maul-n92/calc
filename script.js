function calcSum() {
    let rub = '₽';
    const price = Number(document.querySelector('.price').value);
    const payment_first = Number(document.querySelector('.payment_first').value);

    const sum = price - payment_first;
    document.querySelector('.calc_first').innerHTML = Number (sum) + ' ' + rub;
}

function calcPayment() {
    let rub = '₽';
    let rate = 6.9;
    const price = Number(document.querySelector('.price').value);
    const payment_first = Number(document.querySelector('.payment_first').value);
    const sum = price - payment_first;
    const period = Number(document.querySelector('.period').value)

    const i = (rate / 12) / 100;
    const k = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
    const result = sum * k;

    document.querySelector('.calc_second').innerHTML = Number(result).toFixed(0) + ' ' + rub;

    const resultElement = document.querySelector('.calc_second');
    resultElement.classList.remove('result--red');

    if (result > 50000) {
        resultElement.classList.add('result--red');
}
}

document.querySelector('.btn').addEventListener('click', calcSum);
document.querySelector('.btn').addEventListener('click', calcPayment);
