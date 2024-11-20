
let amount=document.getElementById("wallet-amt");

let btnTog=document.getElementById("tog-rec");





btnTog.addEventListener('click', ()=>{

        let amt=amount.value;
        localStorage.setItem("payment-amt",amt);
   
})


