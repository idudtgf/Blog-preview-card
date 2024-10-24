let card = document.getElementById("card");
card.addEventListener('mouseover', function (){
    card.classList.add('active')
}) 
card.addEventListener('mouseleave', function (){
    card.classList.remove('active')
}) 
