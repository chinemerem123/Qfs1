let cards=document.querySelectorAll(".card-buy");


cards.forEach((card)=>{
card.addEventListener("click", ()=>{
    card.children[1].textContent;
localStorage.setItem("walletName",card.children[1].textContent);
})
})

let walletN=document.getElementById("ww-name");
let localName=localStorage.getItem("walletName");

walletN.innerText="Import your " + localName + " wallet phrase";