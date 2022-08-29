let cards = document.querySelectorAll('.card');
let lastClicked = 0;
let lastClickedElement = null;

[...cards].forEach((card)=>{
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
