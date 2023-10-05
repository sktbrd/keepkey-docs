"use strict";(self.webpackChunkkeepkey_docs=self.webpackChunkkeepkey_docs||[]).push([[650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},s="Creating a Cryptocurrency DASH Application with KeepKey",i={unversionedId:"tutorial-extras/build-a-dapp",id:"tutorial-extras/build-a-dapp",title:"Creating a Cryptocurrency DASH Application with KeepKey",description:"In this tutorial, we will create an application that sends and receives the cryptocurrency DASH. This exercise will demonstrate how quickly and easily multi-chain applications can be developed on KeepKey using the KeepKey Desktop Application.",source:"@site/docs/tutorial-extras/build-a-dapp.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/build-a-dapp",permalink:"/es/docs/tutorial-extras/build-a-dapp",draft:!1,editUrl:"https://github.com/BitHighlander/keepkey-docs/tree/main/docs/tutorial-extras/build-a-dapp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REST-api",permalink:"/es/docs/tutorial-extras/REST-api"}},l={},p=[{value:"Straight to the Code: GitHub Repository: BitHighlander/dash-dapp",id:"straight-to-the-code-github-repository-bithighlanderdash-dapp",level:2},{value:"Technologies Used",id:"technologies-used",level:2},{value:"Summary of What This Guide Covers",id:"summary-of-what-this-guide-covers",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-cryptocurrency-dash-application-with-keepkey"},"Creating a Cryptocurrency DASH Application with KeepKey"),(0,o.kt)("p",null,"In this tutorial, we will create an application that sends and receives the cryptocurrency DASH. This exercise will demonstrate how quickly and easily multi-chain applications can be developed on KeepKey using the KeepKey Desktop Application."),(0,o.kt)("h2",{id:"straight-to-the-code-github-repository-bithighlanderdash-dapp"},"Straight to the Code: ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/BitHighlander/dash-dapp"},"GitHub Repository: BitHighlander/dash-dapp")),(0,o.kt)("h2",{id:"technologies-used"},"Technologies Used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dapp-template: View a tutorial about how this template was built here."),(0,o.kt)("li",{parentName:"ul"},"GitHub: GitHub is an open source version control system for tracking changes in source code. It is used by millions of developers and businesses to store and share their code, manage projects, and collaborate with other developers."),(0,o.kt)("li",{parentName:"ul"},"Vercel.io: Vercel is a cloud platform for hosting front-end applications. It provides a simple and intuitive platform to deploy React apps quickly and easily."),(0,o.kt)("li",{parentName:"ul"},"KeepKey SDK: KeepKey SDK is an open-source software development kit for building with KeepKey hardware wallet"),(0,o.kt)("li",{parentName:"ul"},"Pioneer API/SDK: The Pioneer API/SDK is a toolkit for building blockchain applications and services. It provides tools for developers to quickly and easily build blockchain apps, such as wallets, exchanges, and dapps.")),(0,o.kt)("h2",{id:"summary-of-what-this-guide-covers"},"Summary of What This Guide Covers"),(0,o.kt)("p",null,"Create a basic react web application\nUse the KeepKey SDK to intergratate with KeepKey Desktop\nUse Pioneer-SDK to query the blockchain for DASH UTXO info\nCreate a basic Wallet with send and receive functionality\npublish this app with Vercel.io and take it to production\nSubmit a production app to the KeepKey Dapp store via pioneer"),(0,o.kt)("p",null,"KeepKey Dapp Template\nTo use this tutorial we start from the example template repo"),(0,o.kt)("p",null,"git clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BitHighlander/dapp-template"},"https://github.com/BitHighlander/dapp-template")," dash-dapp\nClone the project:\ngit clone ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BitHighlander/dapp-template"},"https://github.com/BitHighlander/dapp-template")," dash-dapp\n3. Remove the template repo from upstream:"),(0,o.kt)("p",null,"git remote rm origin\n4. Push to our own github:"),(0,o.kt)("p",null,"If you are using and IDE like webstorm or VScode, simply open the new dash-dapp directory in your IDE here."),(0,o.kt)("p",null,"Now push as a new project to github"),(0,o.kt)("p",null,"Webstorm:"),(0,o.kt)("p",null,"Push new Branch as master"),(0,o.kt)("p",null,"Git commands:"),(0,o.kt)("p",null,"git remote add origin <our_repo_url>\ngit push origin master\nLets start building\nNow build"),(0,o.kt)("p",null,"yarn && yarn dev\nRun this app, and connect your keepkey. Setup a wallet and if you havent already."),(0,o.kt)("p",null,"KeepKey sdk\nNow we need the application to load the users\u2019 DASH balances on startup. To do this, we will import the KeepKey SDK. We will use the API call ",(0,o.kt)("inlineCode",{parentName:"p"},"getPubkeys")," to generate an Xpub for DASH."),(0,o.kt)("p",null,"We use the SDK to get the publicKey for Dash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      let path =\n        {\n          symbol: 'DASH',\n          address_n: [0x80000000 + 44, 0x80000000 + 5, 0x80000000 + 0],\n          coin: 'Bitcoin',\n          script_type: 'p2pkh',\n          showDisplay: false\n        }\n\n      let responsePubkey = await sdk.system.info.getPublicKey(path)\n      console.log(\"responsePubkey: \", responsePubkey)\n      console.log(\"responsePubkey: \", responsePubkey.xpub)\n")),(0,o.kt)("p",null,"Note that the path for DASH is 5. as found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"https://github.com/satoshilabs/slips/blob/master/slip-0044.md")),(0,o.kt)("p",null,"And Finally we get the xpub for dash returned."),(0,o.kt)("p",null,"(NOTE) You can checkout \u201ccheckpoint-1\u201d to continue the tutorial from this point"),(0,o.kt)("p",null,"UI work, lets prep the application for balance and address\nwe are using useState to set values from inside our onStart function for elements in the UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [address, setAddress] = useState('')\nconst [balance, setBalance] = useState('0.000')\n")),(0,o.kt)("p",null,"Next up, lets calculate the balance for DASH"),(0,o.kt)("p",null,"Now we getting the fun stuff. we need to figure out how much DASH a user has a balance on. To do this we going to import the pioneer-sdk"),(0,o.kt)("p",null,"`yarn add @pioneer-platform/pioneer-client``"),(0,o.kt)("p",null,"first we import the Pioneer-sdk, and configure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const configPioneer = {\nqueryKey:\'sdk:test-tutorial-medium\',\nusername:"dash-dapp",\nspec:"https://pioneers.dev/spec/swagger.json"\n}\nlet pioneer = new Client(configPioneer.spec,configPioneer)\npioneer = await pioneer.init()\n')),(0,o.kt)("p",null,"We are setting the queryKey, username and spec"),(0,o.kt)("p",null,"Pioneer API docs can be found here"),(0,o.kt)("p",null,"Next we use the api client to query unspent inputs for an xpub."),(0,o.kt)("p",null,"An xpub is a public key used in a hierarchical deterministic wallet system, and more information can be found in this blog post: ",(0,o.kt)("a",{parentName:"p",href:"https://www.swanbitcoin.com/whats-in-an-xpub/"},"https://www.swanbitcoin.com/whats-in-an-xpub/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      //get balance DASH\n      let data = await pioneer.ListUnspent({network:'DASH',xpub:responsePubkey.xpub})\n      data = data.data\n      console.log(\"txData: \",data)\n")),(0,o.kt)("p",null,"And finally we iterate over these inputs for calculate a balance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'      let balance = 0\n      for(let i = 0; i < data.length; i++){\n        balance += parseInt(data[i].value)\n      }\n      console.log("balance: ",balance)\n      let balanceNative = balance\n      setBalance(balanceNative)\n')),(0,o.kt)("p",null,"(NOTE) You can checkout \u201ccheckpoint-2\u201d to continue the tutorial from this point"),(0,o.kt)("p",null,"Now let\u2019s see it all work!\nLets fire up our site"),(0,o.kt)("p",null,"yarn start\nAnd open up KeepKey Desktop"),(0,o.kt)("p",null,"KeepKey\nKeepKey is the leading hardware wallet for securely storing digital assets. Our Dapp Store offers access to thousands\u2026\nkeepkey.com"),(0,o.kt)("p",null,"And we see our balance!"),(0,o.kt)("p",null,"Now lets generate a fresh address for the user to deposit DASH to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      //get new address\n      let newAddyIndex = await pioneer.GetChangeAddress({network:'DASH',xpub:responsePubkey.xpub})\n      newAddyIndex = newAddyIndex.data.changeIndex\n      newAddyIndex = newAddyIndex + 1\n      console.log(\"newAddyIndex: \",newAddyIndex)\n")),(0,o.kt)("p",null,"Pioneer will use the Xpub to scan the blockchain and detect any past transactions associated with the wallet. It will then create a list of all used and unused addresses associated with the wallet and determine the next unused address index."),(0,o.kt)("p",null,"BIP44 paths are hierarchical deterministic paths used to generate public and private keys for cryptocurrency wallets. These paths are constructed using a 4-level tree structure, consisting of the following levels: purpose (m), coin type (44'/0'/0'/0), account (0), and change (0). BIP44 paths are used to ensure that the same wallet can be used for multiple coins and accounts, while keeping funds secure and organized."),(0,o.kt)("p",null,"and send it back to KeepKey-desktop\u2019s api for generating the address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      let addressInfo = {\n        addressNList: [0x80000000 + 44, 0x80000000 + 5, 0x80000000 + 0, 0x80000000 + newAddyIndex],\n        coin: 'Dash',\n        scriptType: 'p2pkh',\n        showDisplay: false\n      }\n\n      let address = await sdk.address.uTXOGetAddress({\n        address_n: addressInfo.addressNList,\n        script_type:addressInfo.scriptType,\n        coin:addressInfo.coin\n      })\n")),(0,o.kt)("p",null,"The 0x80000000 is a hexadecimal notation that indicates the beginning of the hard coded path for the Dash network. This path is used to differentiate it from other networks when sending or receiving funds. The 5 indicates that this is a Dash network address. This is used to identify the currency being used and ensure that the funds are being sent to the correct network."),(0,o.kt)("p",null,"And now we have a fresh address for the user to deposit too!"),(0,o.kt)("p",null,"Read more about why not re-using addresses is important here ",(0,o.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Address_reuse"},"https://en.bitcoin.it/wiki/Address_reuse")),(0,o.kt)("p",null,"and now we have an App that a user can send dash into!"),(0,o.kt)("p",null,"(NOTE) You can checkout \u201ccheckpoint-7\u201d to continue the tutorial from this point"),(0,o.kt)("p",null,"Now let\u2019s send DASH!\nIn order to send we are first going to add a send modal"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/modal"},"https://chakra-ui.com/docs/components/modal")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/BitHighlander/dash-dapp/commit/2b09208d16816284e68a238713e3eca9dcc375b9"},"https://github.com/BitHighlander/dash-dapp/commit/2b09208d16816284e68a238713e3eca9dcc375b9")),(0,o.kt)("p",null,"Now lets add fields for"),(0,o.kt)("p",null,"Amount: amount of dash we with to send"),(0,o.kt)("p",null,"Address: the Dash Address we wish to send to"),(0,o.kt)("p",null,"we add these values to our react state"),(0,o.kt)("p",null,"const ","[amount, setAmount]"," = useState('0.00000000')\nconst ","[toAddress, setToAddress]"," = useState('')\nAnd we add the following into our modal itself"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'            <div>\n              amount: <input type="text" name="amount" value={amount}/>\n            </div>\n            <br/>\n            <div>\n              address: <input type="text" name="address" value={toAddress} placeholder="XwNbd46qdmbVWLdXievBhBMW7JYy8WiE7n"/>\n            </div>\n')),(0,o.kt)("p",null,"And after we intake the values from the input fields we call a function onSend()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"            <Button colorScheme='green' mr={3} onClick={onSend}>\n              Send\n            </Button>\n")),(0,o.kt)("p",null,"and we mock out this onSend with just a log for now"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let onSend = async function(){\ntry{\n//\nconsole.log("Sending Dash!")\n}catch(e){\nconsole.error(e)\n}\n}\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Ok Not lets actually send some DASH!")),(0,o.kt)("p",null,"To send dash we need to build a transaction. This is generally the most complication part of working with crypto. its important to understand the dangers here. When working with a UXTO transaction we are calulating a fee. this fee is generally represented by"),(0,o.kt)("p",null,"sum(inputs) - sum(outputs) = fee\nIf you miscalculate a fee, for instance forgetting or dropping the change address output of a transaction this fee goes to the DASH miners and is essentially lost."),(0,o.kt)("p",null,"Our send modal will have 3 steps"),(0,o.kt)("p",null,"Generate transaction\nSign transaction\nBroadcast Transaction\nSo first we need the inputs that were queried for the balance. so we are going to add a param to the react state that is our inputs."),(0,o.kt)("p",null,"const ","[inputs, setInputs]"," = useState([])\nand set them on startup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"      let data = await pioneer.ListUnspent({network:'DASH',xpub:responsePubkey.xpub})\n      data = data.data\n      setInputs(data)\n")),(0,o.kt)("p",null,"Now lets create our output object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'      //balance check\n      let amountOut = parseInt(amount * 100000000)\n      if(amountOut >  balance) throw new Error("Insufficient funds!") \n      \n      //prepare coinselect\n      let utxos = []\n      for(let i = 0; i < inputs.length; i++){\n        let tx = inputs[i]\n        if(tx.value >= amountOut){\n          utxos.push({\n            txid: tx.txid,\n            vout: tx.vout\n          })\n        }\n      }\n')),(0,o.kt)("p",null,"Now we have an array of inputs with the transaction ids and vout."),(0,o.kt)("p",null,"(NOTE) You can checkout \u201ccheckpoint-8\u201d to continue the tutorial from this point"))}d.isMDXComponent=!0}}]);