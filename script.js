const btn = document.querySelector(".push");
const card = document.querySelector(".card");

let cardCountTxt = document.querySelector(".cardCount")
let cardCount = 0;

btn.addEventListener("click",() =>{

if(cardCount<10){
    cardCount ++;

cardCountTxt.innerHTML = cardCount;

card.style.backgroundColor ="red";


CloneCard();
}
else{

    alert("No More Playable Cards");
}

})


function CloneCard(){
    let clone = card.cloneNode(true);
    clone.classList.add("cardClone");
    clone.style.backgroundColor="green";
    
    
    card.after(clone);

}


