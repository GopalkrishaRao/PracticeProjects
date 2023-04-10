var cards = document.querySelectorAll('.card');


[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

const nameInput = document.getElementById('card-name');
const addressInput = document.getElementById('address');
const cardName = document.querySelector('.health-card_name');
const cardAllergies = document.querySelector('.health-card_address');

nameInput.addEventListener('input', (event) => {
  cardName.textContent = event.target.value.toUpperCase();
});

nameInput.addEventListener('click', () => {
    document.querySelector('.card').classList.remove('is-flipped');
});

addressInput.addEventListener('input', (event) => {
  cardAllergies.textContent = event.target.value;
});

addressInput.addEventListener('click',
() => { 
document.querySelector('.card').classList.add('is-flipped');
})