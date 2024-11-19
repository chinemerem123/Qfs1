let walletAddress="0x247ABa40d166BA0C90E988d1158Bbb70B172ee6C";
let tokenName="USDT (TRX)";
let amount=document.getElementById("wallet-amt");
let amt=amount.value;
let qrcode=document.getElementById("qrImg");

qrcode.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+tokenName+":"+walletAddress+"?amount="+amt;