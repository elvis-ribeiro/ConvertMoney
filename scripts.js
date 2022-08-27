const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.06
const euro = 5.9
const bitcon = 102253.8

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('real-value-text')
  const dolarValueText = document.getElementById('dolar-value-text')

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputReais)

  if (select.value === 'US$ Dolar americano') {
    dolarValueText.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputReais / dolar)
  }

  if (select.value === '€ Euro') {
    dolarValueText.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(inputReais / euro)
  }

  if (select.value === 'Bitcon') {
    dolarValueText.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'BTC',
      maximumFractionDigits: 8
    }).format(inputReais / bitcon)
  }
}

changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro'
    currencyImg.src = './assets/CoinsEuro.png'
  }

  if (select.value === 'US$ Dolar americano') {
    currencyName.innerHTML = 'Dolar americano'
    currencyImg.src = './assets/UnityState.png'
  }

  if (select.value === 'Bitcon') {
    currencyName.innerHTML = 'Bitcon'
    currencyImg.src = './assets/BitCoin.png'
  }

  convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
