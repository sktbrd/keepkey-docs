# Creating a Cryptocurrency DASH Application with KeepKey

In this tutorial, we will create an application that sends and receives the cryptocurrency DASH. This exercise will demonstrate how quickly and easily multi-chain applications can be developed on KeepKey using the KeepKey Desktop Application.

## Straight to the Code: [GitHub Repository: BitHighlander/dash-dapp](https://github.com/BitHighlander/dash-dapp)

## Technologies Used

- Dapp-template: View a tutorial about how this template was built here.
- GitHub: GitHub is an open source version control system for tracking changes in source code. It is used by millions of developers and businesses to store and share their code, manage projects, and collaborate with other developers.
- Vercel.io: Vercel is a cloud platform for hosting front-end applications. It provides a simple and intuitive platform to deploy React apps quickly and easily.
- KeepKey SDK: KeepKey SDK is an open-source software development kit for building with KeepKey hardware wallet
- Pioneer API/SDK: The Pioneer API/SDK is a toolkit for building blockchain applications and services. It provides tools for developers to quickly and easily build blockchain apps, such as wallets, exchanges, and dapps.

## Summary of What This Guide Covers
Create a basic react web application
Use the KeepKey SDK to intergratate with KeepKey Desktop
Use Pioneer-SDK to query the blockchain for DASH UTXO info
Create a basic Wallet with send and receive functionality
publish this app with Vercel.io and take it to production
Submit a production app to the KeepKey Dapp store via pioneer

KeepKey Dapp Template
To use this tutorial we start from the example template repo

git clone https://github.com/BitHighlander/dapp-template dash-dapp
Clone the project:
git clone https://github.com/BitHighlander/dapp-template dash-dapp
3. Remove the template repo from upstream:

git remote rm origin
4. Push to our own github:

If you are using and IDE like webstorm or VScode, simply open the new dash-dapp directory in your IDE here.

Now push as a new project to github

Webstorm:


Push new Branch as master

Git commands:

git remote add origin <our_repo_url>
git push origin master
Lets start building
Now build

yarn && yarn dev
Run this app, and connect your keepkey. Setup a wallet and if you havent already.

KeepKey sdk
Now we need the application to load the users’ DASH balances on startup. To do this, we will import the KeepKey SDK. We will use the API call `getPubkeys` to generate an Xpub for DASH.

We use the SDK to get the publicKey for Dash

      let path =
        {
          symbol: 'DASH',
          address_n: [0x80000000 + 44, 0x80000000 + 5, 0x80000000 + 0],
          coin: 'Bitcoin',
          script_type: 'p2pkh',
          showDisplay: false
        }

      let responsePubkey = await sdk.system.info.getPublicKey(path)
      console.log("responsePubkey: ", responsePubkey)
      console.log("responsePubkey: ", responsePubkey.xpub)
Note that the path for DASH is 5. as found on https://github.com/satoshilabs/slips/blob/master/slip-0044.md

And Finally we get the xpub for dash returned.

(NOTE) You can checkout “checkpoint-1” to continue the tutorial from this point

UI work, lets prep the application for balance and address
we are using useState to set values from inside our onStart function for elements in the UI.

const [address, setAddress] = useState('')
const [balance, setBalance] = useState('0.000')
Next up, lets calculate the balance for DASH
Now we getting the fun stuff. we need to figure out how much DASH a user has a balance on. To do this we going to import the pioneer-sdk

yarn add @pioneer-platform/pioneer-client
first we import the Pioneer-sdk, and configure
const configPioneer = {
queryKey:'sdk:test-tutorial-medium',
username:"dash-dapp",
spec:"https://pioneers.dev/spec/swagger.json"
}
let pioneer = new Client(configPioneer.spec,configPioneer)
pioneer = await pioneer.init()
We are setting the queryKey, username and spec

Pioneer API docs can be found here

Next we use the api client to query unspent inputs for an xpub.

An xpub is a public key used in a hierarchical deterministic wallet system, and more information can be found in this blog post: https://www.swanbitcoin.com/whats-in-an-xpub/

      //get balance DASH
      let data = await pioneer.ListUnspent({network:'DASH',xpub:responsePubkey.xpub})
      data = data.data
      console.log("txData: ",data)
And finally we iterate over these inputs for calculate a balance

      let balance = 0
      for(let i = 0; i < data.length; i++){
        balance += parseInt(data[i].value)
      }
      console.log("balance: ",balance)
      let balanceNative = balance
      setBalance(balanceNative)
(NOTE) You can checkout “checkpoint-2” to continue the tutorial from this point

Now let’s see it all work!
Lets fire up our site

yarn start
And open up KeepKey Desktop

KeepKey
KeepKey is the leading hardware wallet for securely storing digital assets. Our Dapp Store offers access to thousands…
keepkey.com


And we see our balance!

Now lets generate a fresh address for the user to deposit DASH to.

      //get new address
      let newAddyIndex = await pioneer.GetChangeAddress({network:'DASH',xpub:responsePubkey.xpub})
      newAddyIndex = newAddyIndex.data.changeIndex
      newAddyIndex = newAddyIndex + 1
      console.log("newAddyIndex: ",newAddyIndex)
Pioneer will use the Xpub to scan the blockchain and detect any past transactions associated with the wallet. It will then create a list of all used and unused addresses associated with the wallet and determine the next unused address index.

BIP44 paths are hierarchical deterministic paths used to generate public and private keys for cryptocurrency wallets. These paths are constructed using a 4-level tree structure, consisting of the following levels: purpose (m), coin type (44'/0'/0'/0), account (0), and change (0). BIP44 paths are used to ensure that the same wallet can be used for multiple coins and accounts, while keeping funds secure and organized.

and send it back to KeepKey-desktop’s api for generating the address

      let addressInfo = {
        addressNList: [0x80000000 + 44, 0x80000000 + 5, 0x80000000 + 0, 0x80000000 + newAddyIndex],
        coin: 'Dash',
        scriptType: 'p2pkh',
        showDisplay: false
      }

      let address = await sdk.address.uTXOGetAddress({
        address_n: addressInfo.addressNList,
        script_type:addressInfo.scriptType,
        coin:addressInfo.coin
      })
The 0x80000000 is a hexadecimal notation that indicates the beginning of the hard coded path for the Dash network. This path is used to differentiate it from other networks when sending or receiving funds. The 5 indicates that this is a Dash network address. This is used to identify the currency being used and ensure that the funds are being sent to the correct network.

And now we have a fresh address for the user to deposit too!

Read more about why not re-using addresses is important here https://en.bitcoin.it/wiki/Address_reuse

and now we have an App that a user can send dash into!


(NOTE) You can checkout “checkpoint-7” to continue the tutorial from this point

Now let’s send DASH!
In order to send we are first going to add a send modal

https://chakra-ui.com/docs/components/modal


https://github.com/BitHighlander/dash-dapp/commit/2b09208d16816284e68a238713e3eca9dcc375b9

Now lets add fields for

Amount: amount of dash we with to send

Address: the Dash Address we wish to send to

we add these values to our react state

const [amount, setAmount] = useState('0.00000000')
const [toAddress, setToAddress] = useState('')
And we add the following into our modal itself

            <div>
              amount: <input type="text" name="amount" value={amount}/>
            </div>
            <br/>
            <div>
              address: <input type="text" name="address" value={toAddress} placeholder="XwNbd46qdmbVWLdXievBhBMW7JYy8WiE7n"/>
            </div>
And after we intake the values from the input fields we call a function onSend()

            <Button colorScheme='green' mr={3} onClick={onSend}>
              Send
            </Button>
and we mock out this onSend with just a log for now

let onSend = async function(){
try{
//
console.log("Sending Dash!")
}catch(e){
console.error(e)
}
}

7. Ok Not lets actually send some DASH!

To send dash we need to build a transaction. This is generally the most complication part of working with crypto. its important to understand the dangers here. When working with a UXTO transaction we are calulating a fee. this fee is generally represented by

sum(inputs) - sum(outputs) = fee
If you miscalculate a fee, for instance forgetting or dropping the change address output of a transaction this fee goes to the DASH miners and is essentially lost.

Our send modal will have 3 steps

Generate transaction
Sign transaction
Broadcast Transaction
So first we need the inputs that were queried for the balance. so we are going to add a param to the react state that is our inputs.

const [inputs, setInputs] = useState([])
and set them on startup

      let data = await pioneer.ListUnspent({network:'DASH',xpub:responsePubkey.xpub})
      data = data.data
      setInputs(data)
Now lets create our output object

      //balance check
      let amountOut = parseInt(amount * 100000000)
      if(amountOut >  balance) throw new Error("Insufficient funds!") 
      
      //prepare coinselect
      let utxos = []
      for(let i = 0; i < inputs.length; i++){
        let tx = inputs[i]
        if(tx.value >= amountOut){
          utxos.push({
            txid: tx.txid,
            vout: tx.vout
          })
        }
      }
Now we have an array of inputs with the transaction ids and vout.

(NOTE) You can checkout “checkpoint-8” to continue the tutorial from this point
