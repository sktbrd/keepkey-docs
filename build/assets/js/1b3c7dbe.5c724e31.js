"use strict";(self.webpackChunkkeepkey_docs=self.webpackChunkkeepkey_docs||[]).push([[919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,p={unversionedId:"tutorial-extras/REST-api",id:"tutorial-extras/REST-api",title:"REST-api",description:"TL;DR KeepKey SDK",source:"@site/docs/tutorial-extras/REST-api.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/REST-api",permalink:"/docs/tutorial-extras/REST-api",draft:!1,editUrl:"https://github.com/BitHighlander/keepkey-docs/tree/main/docs/tutorial-extras/REST-api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial - KeepKey SDK intergration",permalink:"/docs/category/tutorial---keepkey-sdk-intergration"},next:{title:"Creating a Cryptocurrency DASH Application with KeepKey",permalink:"/docs/tutorial-extras/build-a-dapp"}},l={},s=[{value:"TL;DR: Build on KeepKey today with our new SDK: KeepKey SDK",id:"tldr-build-on-keepkey-today-with-our-new-sdk-keepkey-sdk",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tldr-build-on-keepkey-today-with-our-new-sdk-keepkey-sdk"},"TL;DR: Build on KeepKey today with our new SDK: ",(0,a.kt)("a",{parentName:"h2",href:"https://www.npmjs.com/package/@keepkey/keepkey-sdk"},"KeepKey SDK")),(0,a.kt)("p",null,"Fixing the largest point of friction in the KeepKey Ecosystem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Terms:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebUSB: The web protocol for communication between your host machine and KeepKey device."),(0,a.kt)("li",{parentName:"ul"},"HID: The native USB protocol for communication between your host machine and KeepKey device."),(0,a.kt)("li",{parentName:"ul"},"Browser: A web browser like Chrome or Brave."),(0,a.kt)("li",{parentName:"ul"},"Electron: A native application framework that runs outside of a web browser on your host machine.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TL;DR"),": Now we can do this!"),(0,a.kt)("p",null,"Here are some simple things you could never do with a KeepKey until now."),(0,a.kt)("p",null,"In the screenshot, I have open:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Firefox paired with a KeepKey on app.shapeshift.com."),(0,a.kt)("li",{parentName:"ul"},"A Chrome tab paired with the same KeepKey."),(0,a.kt)("li",{parentName:"ul"},"KeepKey Desktop's built-in browser with ShapeShift open.")),(0,a.kt)("p",null,"All three applications are connected simultaneously, functional, and can be interacted with seamlessly."),(0,a.kt)("p",null,"Why was something so simple not possible before?"),(0,a.kt)("p",null,"WebUSB vs. REST:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KeepKey primarily used the WebUSB interface before our acquisition, which limited applications and integration partners."),(0,a.kt)("li",{parentName:"ul"},"WebUSB's claimInterface limitation allowed only one application to access the device at a time.")),(0,a.kt)("p",null,"Friction and pain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This limitation has caused frustration for KeepKey users for years."),(0,a.kt)("li",{parentName:"ul"},"The first application that claims a device locks onto it, preventing new applications from connecting."),(0,a.kt)("li",{parentName:"ul"},"Firefox and Safari users have been unable to use their KeepKey because those browsers do not support WebUSB.")),(0,a.kt)("p",null,"The Solution: The New KeepKey Desktop"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KeepKey Desktop is now the primary interface for building on KeepKey."),(0,a.kt)("li",{parentName:"ul"},"It provides native HID USB drivers for firmware updating, manages advanced features like PIN management in BIP39 mnemonics, and most importantly, provides the new KeepKey REST interface hosted on the user's localhost.")),(0,a.kt)("p",null,"Introducing the KeepKey REST interface."),(0,a.kt)("p",null,"(You can view this developer documentation on ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:1645/docs"},"http://localhost:1645/docs")," or by going to settings/Open API developer documentation)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KeepKey-SDK"),": The new developer KIT"),(0,a.kt)("p",null,"All applications wishing to integrate KeepKey now have a new developer toolkit."),(0,a.kt)("p",null,"KeepKey-SDK:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This npm package provides full access to the KeepKey's REST API and provides TypeScript typing for coding assistance.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Case study: Integrating this REST interface into shapeshift.com")),(0,a.kt)("p",null,"At the core of app.shapeshift.com is its HDwallet package."),(0,a.kt)("p",null,"You can view a live preview of this feature coded here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://web-theta-one.vercel.app"},"ShapeShift DAO")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/shapeshift/web/pull/3678"},"GitHub Pull Request")),(0,a.kt)("p",null,"And that's it! This new KeepKey REST API is a building block for future amazing applications to integrate and allow their users to leverage self-custody."),(0,a.kt)("p",null,"Interested in building multi-chain dapps for KeepKey?"),(0,a.kt)("p",null,"Check out this tutorial."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*agzHRHDpv01lOKAIBHq6jQ.png",alt:"ShapeShift Image"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*uY-c3vQBlC-xgXe7YR6dNQ.png",alt:"Swagger Image"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*qYdT-Fpq36o17BMsYCFeQg.png",alt:"USB Claim Error"}),"\n","![3-way Apps]","(",(0,a.kt)("a",{parentName:"p",href:"https://miro.medium"},"https://miro.medium")))}c.isMDXComponent=!0}}]);