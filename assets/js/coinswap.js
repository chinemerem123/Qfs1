let tokenImg=document.getElementById("token-img");
// let crypto = document.getElementById("token-swap").selectedIndex;
// let token = document.getElementsByTagName("option")[crypto].value;


document.getElementsByTagName('select')[0].onchange = function() {
    var index = this.selectedIndex;
    var token = this.children[index].value;

    if(token=="usdt"){
        tokenImg.src="https://assets.coingecko.com/coins/images/325/large/Tether.png?166814866";
    }else if(token=="bitcoin"){
        tokenImg.src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579";
    }else if(token=="ethereum"){
        tokenImg.src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880";
    }else if(token=="solana"){
        tokenImg.src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422";
    }else if(token=="tron"){
        tokenImg.src="https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066";
    }else if(token=="bnb"){
        tokenImg.src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850";
    }else if(token=="litecoin"){
        tokenImg.src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580";
    }else if(token=="matic"){
        tokenImg.src="https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912";
    }else if(token=="bnb"){
        tokenImg.src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850";
    }
    
  }


    
// let bitcoin =;
// let ethereum=";
// let stellar="https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157";
// let xrp="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731";
// let usdt="";
// let tron="";
// let bnb="";
// let cardano="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860";
// let dogecoin="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256";
// let litecoin="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580";
// let shiba="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446";
// let matic="";
// let Fantom="https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png?1669652346";
// let solana="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422";
// let usd="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389";
// let polkadot="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644";
// let bitcoinCash="https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492";
// let avalanche="https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574";
// let badgeDai="https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png?1687143508";
// let uni="https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1687143398";
// let cosmosHub="https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960";
// let chainlink="https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700";
// let filecoin="https://assets.coingecko.com/coins/images/12817/large/filecoin.png?1602753933";
// let aptos="https://assets.coingecko.com/coins/images/26455/large/aptos_round.png?1666839629";
// let altrum="https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg?1680097630";
// let aave="https://assets.coingecko.com/coins/images/12645/large/AAVE.png?1601374110";
// let gala="https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png?1600233435";
// let uusd="https://assets.coingecko.com/coins/images/25380/large/UUSD.jpg?1651823371";
// let tezos="https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png?1547034862";
// let sui="https://assets.coingecko.com/coins/images/26375/large/sui_asset.jpeg?1683114182";
