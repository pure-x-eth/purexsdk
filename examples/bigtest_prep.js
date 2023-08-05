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


    
    console.log('== 1. post base assets proposal ==')
    try {
      let resp = await PureXSDK.listBaseAssetsProposal([{
            "symbol": "ETH",
            "longName": "Ethereum",
            "precision": 8,
            "blockchains": [{
                "name": "Ethereum",
                "asset_addr": "0x0000000000000000000000000000000000000000"
            }]
            },
            {
            "symbol": "BTC",
            "longName": "Bitcoin",
            "precision": 8,
            "blockchains": [{
                "name": "Bitcoin",
                "asset_addr": "0x0"
            }]
            },
            {
            "symbol": "USDT",
            "longName": "USDT",
            "precision": 8,
            "blockchains": [{
                "name": "Ethereum",
                "asset_addr": "0xb999ac82d2dfa2a0d4640b8a24aa437ed6066598"
            }]
      }]);


      console.log(resp);
   

      } catch(e){
        
        console.log('listBaseAssetsProposal -  error:');
        console.log(e);
      }
      
      console.log('== 2. get base assets proposal ==')
     
      try {
       
        resp = await PureXSDK.getBaseAssetsProposal();
        console.log(JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getBaseAssetsProposal - error');
        console.log(e);
      }
      hash = resp.baseAssets.hash;
      console.log('== 3.vote for base assets proposal ==')

      try {
        
        resp = await PureXSDK.voteForBaseAssetsProposal(hash, true);

        HTTP_PORT = 3012;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForBaseAssetsProposal(hash, true);
        console.log(resp);


        HTTP_PORT = 3013;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForBaseAssetsProposal(hash, true);
        console.log(resp);

        HTTP_PORT = 3014;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForBaseAssetsProposal(hash, true);
        console.log(resp);
        
        HTTP_PORT = 3015;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForBaseAssetsProposal(hash, true);
        console.log(resp);

        HTTP_PORT = 3016;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForBaseAssetsProposal(hash, true);
        console.log(resp);

      } catch(e){
        
        console.log('voteForBaseAssetsProposal - error');
        console.log(e);
      }
      HTTP_PORT = 3011; //initial
      PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
      console.log('== 4. get base assets proposal again - should be empty as it is already  approved ==')

      try {
       
        resp = await PureXSDK.getBaseAssetsProposal();
        console.log(JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getBaseAssetsProposal - error');
        console.log(e);
      }

      console.log('== 5. post pairs proposal ==')
      try {
        let resp = await PureXSDK.listPairsProposal([{          
              "baseAsset": "ETH",     
              "quoteAsset": "BTC",
              "orderTypes":
              [
                  "LIMIT",
                  "MARKET",
                  "STOP-LIMIT",
                  "STOP-MARKET"
              ],
              "mode": "SPOT",
              "maxMargin": "2" 
          },
          {          
              "baseAsset": "ETH",     
              "quoteAsset": "USDT",
              "orderTypes":
              [
                  "LIMIT",
                  "MARKET",
                  "STOP-LIMIT",
                  "STOP-MARKET"
              ],
              "mode": "SPOT",
              "maxMargin": "2" 
          },
          {          
              "baseAsset": "BTC",     
              "quoteAsset": "USDT",
              "orderTypes":
              [
                  "LIMIT",
                  "MARKET",
                  "STOP-LIMIT",
                  "STOP-MARKET"
              ],
              "mode": "SPOT",
              "maxMargin": "2"  
          }]);


        console.log(resp);
     

        } catch(e){
          
          console.log('listPairsProposal -  error:');
          console.log(e);
        }
  
      console.log('== 6. get pairs proposal ==')
      
      try {
       
        resp = await PureXSDK.getPairsProposal();
        console.log(JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getPairsProposal - error');
        console.log(e);
      }
      hash = resp.pairs.hash;
      console.log('== 7.vote for pairs proposal ==')

      try {
        
        resp = await PureXSDK.voteForPairsProposal(hash, true);

        HTTP_PORT = 3012;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForPairsProposal(hash, true);
        console.log(resp);


        HTTP_PORT = 3013;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForPairsProposal(hash, true);
        console.log(resp);

        HTTP_PORT = 3014;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForPairsProposal(hash, true);
        console.log(resp);
        
        HTTP_PORT = 3015;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForPairsProposal(hash, true);
        console.log(resp);

        HTTP_PORT = 3016;
        PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
        resp = await PureXSDK.voteForPairsProposal(hash, true);
        console.log(resp);

      } catch(e){
        
        console.log('getBaseAssetsProposal - error');
        console.log(e);
      }
      HTTP_PORT = 3011; //initial
      PureXSDK.init(`http://127.0.0.1:${HTTP_PORT}`, ACC_KEY);
      console.log('== 8. get pairs proposal again - should be empty as it is already  approved ==')

      try {
       
        resp = await PureXSDK.getPairsProposal();
        console.log(JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getPairsProposal - error');
        console.log(e);
      }

      console.log('== 8. get active base assets & pairs ==')

      try {
       
        resp = await PureXSDK.getBaseAssets();
        console.log('base assets:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getBaseAssets - error');
        console.log(e);
      }

      try {
       
        resp = await PureXSDK.getPairs();
        console.log('pairs:',JSON.stringify(resp,null,4));
      } catch(e){
        
        console.log('getPairs - error');
        console.log(e);
      }

    


}