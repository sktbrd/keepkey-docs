## The Desktop Application - User Guide ##

KeepKey has developed it's own software application and no longer uses Chrome Browser Plugins, or needs Shapeshift.com to operate.
Remember, you can download the Desktop Application here: https://keepkey.com/get-started

Let’s take  a moment to breakdown the compenets and what we are looking at with the new Desktop Application.

![1  Anatomy of the Desktop App](https://github.com/BitHighlander/keepkey-docs/assets/47842709/db4370bd-0d4d-4044-bb15-412eae49667d)


**1. Wallet Connect (Top Right Corner)**

<img src="https://github.com/BitHighlander/keepkey-docs/assets/47842709/dad2a0b8-17cd-4540-9920-94d5acbf5227" width="300">


**WalletConnect** is a technology that helps you securely link a decentralized application (dApp) with your KeepKey wallet. It makes it easier and safer for you to use dApps with your crypto assets.
Here's how it works:

**1.	dApp Interaction:** When you use a DApp on your computer, you often need to talk to your KeepKey to do things like signing transactions or accessing your crypto money.

**2.	QR Code or Deep Link:** WalletConnect usually creates a QR code or a special link that you can scan or click on within the DApp.

**3.	Connect KeepKey:** By scanning the QR code or clicking the link, you create a secure link between your DApp and your KeepKey. This connection allows the DApp to ask your KeepKey to do certain things, like signing a transaction.

**4.	Authorization:** You often have to say "yes" or "no" within your KeepKey to allow these actions. Your KeepKey shows you what it's being asked to do so you can make sure it's okay.

**5.	Transaction Signing:** If you say "yes," your KeepKey will put a digital signature on the transaction with your secret key. This makes sure it's real and safe.

**6.	Getting It Done:** The signed transaction goes back to the DApp, which can then send it out to the crypto network. This finishes the job you asked for.

WalletConnect is important because it makes sure your private keys stay safe inside your KeepKey while you use different DApps. It also makes using DApps easier because it helps you connect them to your crypto assets without any trouble



**Let’s use an example of connecting to Uniswap, a popular dApp**


First we will navigate to the site: https://app.uniswap.org/swap

Next we will select what chain we want to be on, in this example we can see we are on Ethereum, and click “Connect”

![2 Uniswap Interface 1](https://github.com/BitHighlander/keepkey-docs/assets/47842709/e2931b64-4d59-4138-ba00-b8977207aff4)

Next we will see a list of options for how to connect to Uniswap. We are using WalletConnect so we will select this option.

![3 Uniswap Interface 2](https://github.com/BitHighlander/keepkey-docs/assets/47842709/fcfbf952-c62f-432d-8e4f-f148b6a9d7b0)

We will see a popup on page that displays a QR code and options for which wallet we are using. 
I’ve recently connected my KeepKey to Uniswap so that shows up first, but if this is your first time you may need to click “View All” and find KeepKey and click on it. 

![4 Wallet Connect Modal](https://github.com/BitHighlander/keepkey-docs/assets/47842709/91b98777-5c19-4590-bc24-1fa4557403e5)

After selecting KeepKey we will see an additional pop-up that is asking if we want to open the KeepKey Desktop. 
Select this option and wait a moment while your KeepKey Desktop loads the request.

![5 Uniswap Interface 3](https://github.com/BitHighlander/keepkey-docs/assets/47842709/984fde08-acc6-4883-a3d4-0406ba1bb736)

After we have been redirected to the Desktop Application, we may need to first enter our pin. 
Refer to previous guides for instructions on how to do that if we haven’t quite memorized that process yet. 

So now we have entered our pin and we are met with what is called a “WalletConnect Session Proposal.” 
Take some time to read what you are seeing - for example we can see that the proposal is between the KeepKey and the Uniswap Interface, we are connecting to the Ethereum network, and we can see our available Ethereum wallets on the KeepKey that we can choose between to make the connect with Uniswap with. 

![6 Session Proposal](https://github.com/BitHighlander/keepkey-docs/assets/47842709/f02cad05-f426-492a-a5c9-794f0a289a47)

There’s a lot of terminology and different tech in this page that we will become more familiar with overtime, 
but because we initiated the connection with Uniswap, lets go ahead and click “Approve” for this connection.
Once we have connected, you will notice that the WalletConnect icon on the KeepKey Desktop will display that it is now connected to the Uniswap Interface.

![7 Connected](https://github.com/BitHighlander/keepkey-docs/assets/47842709/47b476c0-cc10-435b-afca-f63b79d2f028)

When we return to our browser displaying https://app.uniswap.org/swap we will see that in the upper right hand corner where it used to say connect, now has our wallet’s public hexadecimal code displayed. This means that our KeepKey wallet is now connected to Uniswap and that we can use it to perform any actions on the in the Uniswap Interface.

![8 Uniswap Interface 4](https://github.com/BitHighlander/keepkey-docs/assets/47842709/afe95a1f-9271-4d10-9bc9-06c316e5f43f)

This has been an example of how to use WalletConnect to connect our KeepKey wallet to a popular dApp using our web browser.







