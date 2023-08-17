const cardNumberElem = document.getElementById('cardNumber');
const cardNameElem = document.getElementById('cardName');
const cardExpiryElem = document.getElementById('cardExpiry');
const cardCVVElem = document.getElementById('cardCVV');

const inputCardNumber = document.getElementById('inputCardNumber');
const inputCardName = document.getElementById('inputCardName');
const inputCardExpiry = document.getElementById('inputCardExpiry');
const inputCardCVV = document.getElementById('inputCardCVV');
const updateCardBtn = document.getElementById('updateCardBtn');

const card = document.querySelector('.card');
let isCardFlipped = false;

updateCardBtn.addEventListener('click', () => {
  cardNumberElem.textContent = inputCardNumber.value || '1234';
  cardNameElem.textContent = inputCardName.value || 'John Doe';
  cardExpiryElem.textContent = inputCardExpiry.value || '12/23';
  cardCVVElem.textContent = inputCardCVV.value || '123';
});

card.addEventListener('click', () => {
  if (isCardFlipped) {
    card.style.transform = 'rotateY(0deg)';
  } else {
    card.style.transform = 'rotateY(180deg)';
  }
  isCardFlipped = !isCardFlipped;
});
