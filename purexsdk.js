const axios = require('axios');


class PureXSDK{
  static url;
  static access_key;
  
  static init(url, access_key){
    if (!url || !access_key){
      console.log('url & access_key required at PureXSDK constructor')
      process.exit(0);
    }
    PureXSDK.url = url;
    PureXSDK.access_key = access_key;
  }


  // proposed_assets_arr example:
  //  [
  //     {
  //       'symbol': 'ETH',
  //       'longName': 'Ethereum',
  //       'precision': 8,
  //       'blockchains': [
  //         {
  //           'name': 'Ethereum',
  //           'asset_addr': '0x0000000000000000000000000000000000000000'
  //         }
  //       ]
  //     },
  //     {
  //       'symbol': 'BTC',
  //       'longName': 'Bitcoin',
  //       'precision': 8,
  //       'blockchains': [
  //         {
  //           'name': 'Bitcoin',
  //           'asset_addr': '0x0'
  //         }
  //       ]
  //     },
  //     {
  //       'symbol': 'USDT',
  //       'longName': 'USDT',
  //       'precision': 8,
  //       'blockchains': [
  //         {
  //           'name': 'Ethereum',
  //           'asset_addr': '0xb999ac82d2dfa2a0d4640b8a24aa437ed6066598'
  //         }
  //       ]
  //     }
  //   ]

  static async listBaseAssetsProposal(proposed_assets_arr){
    try {
      let data = {
               action_type: "LIST_BASE_ASSETS_PROPOSAL",
                 action_data : proposed_assets_arr
              };
     
     // return {data:data};

      const response = await axios.post(PureXSDK.url+'/validator_action',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async getBaseAssetsProposal(){
    try {
      

      const response = await axios.get(PureXSDK.url+'/base-assets-proposal',
              {}, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async getBaseAssets(){
    try {
      

      const response = await axios.get(PureXSDK.url+'/base-assets',
              {}, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async getPairs(){
    try {
      

      const response = await axios.get(PureXSDK.url+'/pairs',
              {}, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async listPairsProposal(proposed_pairs_arr){
    try {
      let data = {
               action_type: "LIST_PAIRS_PROPOSAL",
                 action_data : proposed_pairs_arr
              };
     
     // return {data:data};

      const response = await axios.post(PureXSDK.url+'/validator_action',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async getPairsProposal(){
    try {
      

      const response = await axios.get(PureXSDK.url+'/pairs-proposal',
              {}, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async voteForBaseAssetsProposal(hash, vote){ //hash -string, vote -true/false
    try {
      let data = {
               action_type: "VOTE_FOR_LIST_BASE_ASSETS_PROPOSAL",
               action_data : { vote: vote, hash: `${hash}` }
              };
     
     // return {data:data};

      const response = await axios.post(PureXSDK.url+'/validator_action',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async voteForPairsProposal(hash, vote){ //hash -string, vote -true/false
    try {
      let data = {
               action_type: "VOTE_FOR_LIST_PAIRS_PROPOSAL",
               action_data : { vote: vote, hash: `${hash}` }
              };
     
     // return {data:data};

      const response = await axios.post(PureXSDK.url+'/validator_action',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

//   curl --location 'http://127.0.0.1:'"$1"'/deposit2bridge' \
// --header "access-key: $ACC_KEY" \
// --header 'Content-Type: application/json' \
// --data '{
//             "asset": "'"$2"'",
//             "amount": "'"$3"'",
//             "network": "'"$4"'"
// }' 


  static async deposit2bridge(asset, amount, network){
    try {
      let data = {
              asset: `${asset}`,  
              amount: `${amount}`,
              network: `${network}`,
          };
     
    
      const response = await axios.post(PureXSDK.url+'/deposit2bridge',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }  
  }


// curl --location 'http://127.0.0.1:'"$1"'/bridge2wdr' \
// --header "access-key: $ACC_KEY" \
// --header 'Content-Type: application/json' \
// --data '{
//   "asset": "'"$2"'",
//   "amount": "'"$3"'",
//   "network": "'"$4"'"
// }' 

  static async bridge2wdr(asset, amount, network){
    try {
      let data = {
              asset: `${asset}`,  
              amount: `${amount}`,
              network: `${network}`,
          };
     
    
      const response = await axios.post(PureXSDK.url+'/bridge2wdr',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }  
  }



  // curl --location -s 'http://127.0.0.1:'"$1"'/users' \
  // --header 'Content-Type: application/json' \
  // --data '{
  //  "from":"0",
  //  "to" : "15"
  // }' | json_pp

  static async getUserData(from = "0",to ="1"){
    try {
      let data = {
              from: `${from}`,  
              to: `${to}`,
          };
     
    
      const response = await axios.post(PureXSDK.url+'/users',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }   
  }


  static async getOwnUserData(){
    try {
      let data = {};
     
    
      const response = await axios.post(PureXSDK.url+'/ownuserdata',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }   
  }

  static async getUserEthereumWalletBalance(asset){
    try {
      let data = {
          asset : asset
      };
     
    
      const response = await axios.post(PureXSDK.url+'/own-balance-eth',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }   
  }



  static async deposit2bridge(asset, amount, network){
    try {
      let data = {
          asset : asset,
          amount: amount,
          network: network
      };
     
    
      const response = await axios.post(PureXSDK.url+'/deposit2bridge',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }   
  }


  static async bridge2wdr(asset, amount, network){
    try {
      let data = {
          asset : asset,
          amount: amount,
          network: network
      };
     
    
      const response = await axios.post(PureXSDK.url+'/bridge2wdr',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }   
  }


  static async postOrder(id,pair,price,stop_price,qty,timeInForce,type,side) {
    try {
      let data = {
               action_type: "PLACE_ORDER",
                 action_data : {
                  id: `${id}`,  
                  pair: `${pair}`,
                  price: `${price}`,
                  stop_price: `${stop_price}`,
                  qty: `${qty}`,
                  timeInForce:`${timeInForce}`,
                  type:`${type}`,
                  side: `${side}`,
                }
              };
     
     // return {data:data};

      const response = await axios.post(PureXSDK.url+'/user_action',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async postOrders(ordersArr) {
    try {
      let data = {
               action_type: "PLACE_ORDER",
                 action_data : ordersArr
              };
     
     // return {data:data};

      const response = await axios.post(PureXSDK.url+'/user_action',
              data, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  

  static async cancelOrder(id) { //id could aray of ids..
    try {
      const response = await axios.post(PureXSDK.url+'/user_action',
              {
               action_type: "CANCEL_ORDER",
                 action_data : {
                  id: `${id}`
                }
              }, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }

  static async cancelOrders(idArr) { //id could aray of ids..
    try {
      const response = await axios.post(PureXSDK.url+'/user_action',
              {
               action_type: "CANCEL_ORDER",
                 action_data : {
                  id: idArr
                }
              }, 
              {
                headers: {
                  'access-key': PureXSDK.access_key,
                  'content-type': 'application/json'
                }
              }

      );
      return response.data;
    } catch (e) {
      return {error: e};
    }
  }



}

module.exports = PureXSDK;