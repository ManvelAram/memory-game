let cards = document.querySelectorAll('.card');
let random = ['img1.png', 'img2.png', 'img3.png', 'img4.png'];
random = random.concat(random).sort(() => (Math.random() > 0.5) ? 1 : -1);
console.log(random);
let lastClicked = 0;
let lastClickedElement = null;


[...cards].forEach((card, index)=>{
  card.getElementsByClassName('back-image')[0].setAttribute('src', random[index]);
  card.addEventListener( 'click', function() {
   card.classList.toggle('is-flipped'); 
   
    setTimeout(()=>{
      let cardClicked = card.getElementsByClassName('card__face--front')[0].innerHTML;
      if (!lastClicked || lastClickedElement == card) {                             
        lastClicked = card.getElementsByClassName('card__face--front')[0].innerHTML;
        lastClickedElement = card;
        return 
      }
      if (cardClicked == lastClicked) {
        card.classList.add('hidden');
        lastClickedElement.classList.add('hidden');
        if (document.querySelectorAll('.card:not(.hidden)').length==0){
          alert('You Win');
        };
      } else {
        card.classList.add('is-flipped'); 
        lastClickedElement.classList.add('is-flipped');
      }
      lastClicked = 0;
      lastClickedElement = null;
    }, 1000)
  });
});
