## TL;DR: Build on KeepKey today with our new SDK: [KeepKey SDK](https://www.npmjs.com/package/@keepkey/keepkey-sdk)

Fixing the largest point of friction in the KeepKey Ecosystem.

**Terms:**
- WebUSB: The web protocol for communication between your host machine and KeepKey device.
- HID: The native USB protocol for communication between your host machine and KeepKey device.
- Browser: A web browser like Chrome or Brave.
- Electron: A native application framework that runs outside of a web browser on your host machine.

**TL;DR**: Now we can do this!

Here are some simple things you could never do with a KeepKey until now.

In the screenshot, I have open:
- Firefox paired with a KeepKey on app.shapeshift.com.
- A Chrome tab paired with the same KeepKey.
- KeepKey Desktop's built-in browser with ShapeShift open.

All three applications are connected simultaneously, functional, and can be interacted with seamlessly.

Why was something so simple not possible before?

WebUSB vs. REST:
- KeepKey primarily used the WebUSB interface before our acquisition, which limited applications and integration partners.
- WebUSB's claimInterface limitation allowed only one application to access the device at a time.

Friction and pain:
- This limitation has caused frustration for KeepKey users for years.
- The first application that claims a device locks onto it, preventing new applications from connecting.
- Firefox and Safari users have been unable to use their KeepKey because those browsers do not support WebUSB.

The Solution: The New KeepKey Desktop
- KeepKey Desktop is now the primary interface for building on KeepKey.
- It provides native HID USB drivers for firmware updating, manages advanced features like PIN management in BIP39 mnemonics, and most importantly, provides the new KeepKey REST interface hosted on the user's localhost.

Introducing the KeepKey REST interface.

(You can view this developer documentation on [http://localhost:1645/docs](http://localhost:1645/docs) or by going to settings/Open API developer documentation)

**KeepKey-SDK**: The new developer KIT

All applications wishing to integrate KeepKey now have a new developer toolkit.

KeepKey-SDK:
- This npm package provides full access to the KeepKey's REST API and provides TypeScript typing for coding assistance.

**Case study: Integrating this REST interface into shapeshift.com**

At the core of app.shapeshift.com is its HDwallet package.

You can view a live preview of this feature coded here:

[ShapeShift DAO](https://web-theta-one.vercel.app)

[GitHub Pull Request](https://github.com/shapeshift/web/pull/3678)

And that's it! This new KeepKey REST API is a building block for future amazing applications to integrate and allow their users to leverage self-custody.

Interested in building multi-chain dapps for KeepKey?

Check out this tutorial.

![ShapeShift Image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*agzHRHDpv01lOKAIBHq6jQ.png)
![Swagger Image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*uY-c3vQBlC-xgXe7YR6dNQ.png)
![USB Claim Error](https://miro.medium.com/v2/resize:fit:720/format:webp/1*qYdT-Fpq36o17BMsYCFeQg.png)
![3-way Apps](https://miro.medium
