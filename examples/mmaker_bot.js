const PureXSDK = require('purexsdk');
const BigNumber = require('bignumber.js');


const HTTP_PORT = process.env.HTTP_PORT || 3000;
const ACC_KEY = process.env.ACC_KEY || 'acckey123456';

if (!HTTP_PORT  || !ACC_KEY){
  console.log('you should set HTTP_PORT &  ACC_KEY at command line');
  process.exit(0);
}


const axios = require('axios');
const COEFF_UP = new BigNumber('1.005');
const COEFF_DOWN = new BigNumber('0.995'); 


PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

marketMakerCycle();


setInterval( marketMakerCycle, 60000);


async function marketMakerCycle(){
  try {
    const response = await axios.post('https://api-pub.bitfinex.com/v2/calc/trade/avg?symbol=tBTCUSD&amount=1.0');
    let basePrice  = new BigNumber(response.data[0]);
    
    let buyPrice = basePrice.multipliedBy(COEFF_DOWN);
    let sellPrice = basePrice.multipliedBy(COEFF_UP);
    console.log((new Date()).toTimeString().slice(0,8), response.data[0], buyPrice.toFixed(2), sellPrice.toFixed(2));

    //first try to cancel orders

    try {
      let resp = await PureXSDK.cancelOrders(["mmb1","mms1"]);
      console.log(resp.data);
      console.log(resp);

    } catch(e){
      
      console.log('cancelOrder- CATCH');
      console.log(e.error);
    }
    
   // await sleep(10000);

    try {
     
      resp = await PureXSDK.postOrders([{
            "id": "mmb1",  
            "pair": "BTCUSDT",
            "price": buyPrice.toFixed(2),
            "stop_price": "0.0",
            "qty": "10",
            "timeInForce": "GTC", 
            "type": "LIMIT",
            "side": "BUY"
          },
          {
            "id": "mms1",  
            "pair": "BTCUSDT",
            "price": sellPrice.toFixed(2),
            "stop_price": "0.0",
            "qty": "10",
            "timeInForce": "GTC", 
            "type": "LIMIT",
            "side": "SELL"
          }]);
      console.log(resp.data);
    } catch(e){
      
      console.log('postOrders - CATCH');
      console.log(e.error);
    }


  } catch (error) {
    console.log('bitfinex err, ignore')
  }
}