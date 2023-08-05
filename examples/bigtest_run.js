//validators should run on ports 3011..3018 (8 validators)
const PureXSDK = require('purexsdk');
const BigNumber = require('bignumber.js');



const axios = require('axios');



let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

testall();

async function testall(){
 
  const ACC_KEY = process.env.ACC_KEY || 'acckey123456';
  let HTTP_PORT = 3011;
  let hash;

   PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);


 
      console.log('== 9. get node eth & usdt balance ==')

      try {
       
        resp = await PureXSDK.getUserEthereumWalletBalance('ETH');
        console.log('Ethereum balance on own Eth wallet:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getUserEthereumWalletBalance - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.getUserEthereumWalletBalance('USDT');
        console.log('USDT balance on own Eth wallet:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getUserEthereumWalletBalance - error');
        console.log(e);
      }

      console.log('== 10. deposit to bridge, Ethereum, USDT ==')

      try {
       
        resp = await PureXSDK.deposit2bridge('ETH', '2.5', 'Ethereum');
        console.log('deposit2bridge +Eth 2.5:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('deposit2bridge - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.deposit2bridge('USDT', '1000', 'Ethereum');
        console.log('deposit2bridge +USDT 1000:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('deposit2bridge - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.deposit2bridge('USDT', '10000', 'Ethereum');
        console.log('deposit2bridge +USDT 10000:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('deposit2bridge - error');
        console.log(e);
      }

      console.log('== 11. get node eth & usdt balance after deposit2bridge ==')

      try {
       
        resp = await PureXSDK.getUserEthereumWalletBalance('ETH');
        console.log('Ethereum balance on own Eth wallet:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getUserEthereumWalletBalance - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.getUserEthereumWalletBalance('USDT');
        console.log('USDT balance on own Eth wallet:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getUserEthereumWalletBalance - error');
        console.log(e);
      }

      console.log('== 12. wdr from PureDex , Ethereum, USDT ==')


      try {
       
        resp = await PureXSDK.bridge2wdr('USDT', '1000', 'Ethereum');
        console.log('bridge2wdr -USDT 1000:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('bridge2wdr - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.bridge2wdr('ETH', '0.5', 'Ethereum');
        console.log('bridge2wdr -ETH 0.5:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('bridge2wdr - error');
        console.log(e);
      }

      console.log('== 13. get node eth & usdt balance after bridge2wdr ==')

      try {
       
        resp = await PureXSDK.getUserEthereumWalletBalance('ETH');
        console.log('Ethereum balance on own Eth wallet:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getUserEthereumWalletBalance - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.getUserEthereumWalletBalance('USDT');
        console.log('USDT balance on own Eth wallet:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getUserEthereumWalletBalance - error');
        console.log(e);
      }

      console.log('== 10. deposit to bridge, Ethereum, USDT, node 2 ==')

      try {
        HTTP_PORT = 3012;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
       
        resp = await PureXSDK.deposit2bridge('ETH', '2.5', 'Ethereum');
        console.log('deposit2bridge +Eth 2.5:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('deposit2bridge - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.deposit2bridge('USDT', '1000', 'Ethereum');
        console.log('deposit2bridge +USDT 1000:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('deposit2bridge - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.deposit2bridge('USDT', '10000', 'Ethereum');
        console.log('deposit2bridge +USDT 10000:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('deposit2bridge - error');
        console.log(e);
      }

      console.log('== 14. place & cancel orders ==')

      try {
        HTTP_PORT = 3011;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);

        let resp = await PureXSDK.cancelOrders(["n1limbuy","n1stbuy"]);
        console.log(resp);
        console.log(resp);

      } catch(e){
        
        console.log('cancelOrder- CATCH');
        console.log(e.error);
      }
    
  

      try {
        
      resp = await PureXSDK.postOrders([{
            "id": "n1limbuy",  
            "pair": "ETHUSDT",
            "price": "1820.0",
            "stop_price": "0.0",
            "qty": "1",
            "timeInForce": "GTC", 
            "type": "LIMIT",
            "side": "BUY"
          },
          {
            "id": "n1stbuy",  
            "pair": "ETHUSDT",
            "price": "1875.0",
            "stop_price": "1870.0",
            "qty": "1",
            "timeInForce": "GTC", 
            "type": "LIMIT",
            "side": "BUY"
          }]);
      console.log(resp);
    } catch(e){
      
      console.log('postOrders - CATCH');
      console.log(e.error);
    }

    try {
       
        resp = await PureXSDK.getOwnUserData();
        console.log('node 2 data:',JSON.stringify(resp,null,4));
    } catch(e){
      
      console.log('getUserEthereumWalletBalance - error');
      console.log(e);
    }

     

    try {
        HTTP_PORT = 3012;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);

        let resp = await PureXSDK.cancelOrders(["n2limbuy","n2stbuy"]);
        console.log(resp);
       
       
    

      } catch(e){
        
        console.log('cancelOrder- CATCH');
        console.log(e.error);
      }
    
  

      try {

      resp = await PureXSDK.postOrders([{
            "id": "n2limbuy",  
            "pair": "ETHUSDT",
            "price": "1720.0",
            "stop_price": "0.0",
            "qty": "1",
            "timeInForce": "GTC", 
            "type": "LIMIT",
            "side": "BUY"
          },
          {
            "id": "n2stbuy",  
            "pair": "ETHUSDT",
            "price": "1830.0",
            "stop_price": "1810.0",
            "qty": "1",
            "timeInForce": "GTC", 
            "type": "LIMIT",
            "side": "BUY"
          }]);
      console.log(resp);
    } catch(e){
      
      console.log('postOrders - CATCH');
      console.log(e.error);
    }


}