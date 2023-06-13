function calcSum() {
    let rub = '₽';
    const price = Number(document.querySelector('.price').value);
    const payment1 = Number(document.querySelector('.payment1').value);

    const sum = price - payment1;
    document.querySelector('.result1').innerHTML = Number(sum) + ' ' + rub;
}

function calcPayment() {
    let rub = '₽';
    let rate = 6.9;
    const price = Number(document.querySelector('.price').value);
    const payment1 = Number(document.querySelector('.payment1').value);
    const sum = price - payment1;
    const period = Number(document.querySelector('.period').value)

    const i = (rate / 12) / 100;
    const k = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
    const result = sum * k;

    document.querySelector('.result2').innerHTML = Number(result).toFixed(0) + ' ' + rub;

    const resultElement = document.querySelector('.result2');
    resultElement.classList.remove('result--red');

    if (result > 50000) {
        resultElement.classList.add('result--red'); 
}
}

document.querySelector('.btn').addEventListener('click', calcSum);
document.querySelector('.btn').addEventListener('click', calcPayment);