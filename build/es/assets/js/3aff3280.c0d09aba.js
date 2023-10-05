"use strict";(self.webpackChunkkeepkey_docs=self.webpackChunkkeepkey_docs||[]).push([[884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),y=o,f=c["".concat(l,".").concat(y)]||c[y]||d[y]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={title:"Updating your KeepKey"},a=void 0,p={unversionedId:"tutorial-basics/updating-keepkey",id:"tutorial-basics/updating-keepkey",title:"Updating your KeepKey",description:"A step by step Walkthrough",source:"@site/docs/tutorial-basics/updating-keepkey.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/updating-keepkey",permalink:"/es/docs/tutorial-basics/updating-keepkey",draft:!1,editUrl:"https://github.com/BitHighlander/keepkey-docs/tree/main/docs/tutorial-basics/updating-keepkey.md",tags:[],version:"current",frontMatter:{title:"Updating your KeepKey"},sidebar:"tutorialSidebar",previous:{title:"How to Wipe",permalink:"/es/docs/tutorial-basics/how-to-wipe"},next:{title:"Tutorial - Device in depth",permalink:"/es/docs/category/tutorial---device-in-depth"}},l={},u=[],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A step by step Walkthrough"),(0,o.kt)("p",null,"To use most clients you MUST update the firmware on your device. To do this you must use an Updater App."),(0,o.kt)("p",null,"(Legacy) KeepKey Updater: an application maintained by KeepKey originally written by ShapeShift for updating KeepKeys.\n(Production) KeepKey Desktop: The replacement for KeepKey updater, written by KeepKey.\nStep one: Install KeepKey Desktop\nKeepKey\nKeepKey is the leading hardware wallet for securely storing digital assets. Our Dapp Store offers access to thousands\u2026\nkeepkey.com"),(0,o.kt)("p",null,"The site will detect the appropriate download for your OS.\nnote: (Windows users) you may need continue past unsafe download errors\nStep two: follow directions in application\nYou may keep your device unplugged until application starts"),(0,o.kt)("p",null,"Plug you divce in normally. (without holding down the button for updater mode)\nThis will allow the application to verify the firmware version you currently have on device."),(0,o.kt)("p",null,"If the application detects you will need a firmware update you will get the following screen."),(0,o.kt)("p",null,"Enter updater mode\nUnplug your KeepKey\nhold down button\nwhile continuing to hold down the button plug the keepkey back in"),(0,o.kt)("p",null,"Update your Bootloader\nThe application will detect your bootloader version and always update this first if needed.\nPress the update button\nApprove Verify Backup prompt on device"),(0,o.kt)("p",null,"NOTE: Updating Firmware Does NOT wipe your device under normal circumstances!"),(0,o.kt)("p",null,"force unplugging, or powering down your computer during an update may cause the device to fault.\nIf your device is new and out of box you will still get this message. There are no private keys being managed by your device yet and you may ignore this message\nDue to the possibility of a malfunction and in general, it best practice to verify to location and existence of your paper seed backup.\nPress and hold the button to continue updating your device"),(0,o.kt)("p",null,"Update your devices firmware\nNext you will update your devices firmware."),(0,o.kt)("p",null,"Note: that the device will still be in updater mode. You will not need to plug it in again"),(0,o.kt)("p",null,"Press Update\nAfter your device has updated your application will exit and restart:"),(0,o.kt)("p",null,"Now you have completed your firmware updates and you can use your device on supported web and native applications."),(0,o.kt)("p",null,"Still unable to continue?"),(0,o.kt)("p",null,"troubleshooting guide: ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/p/4599f1aaee0"},"https://medium.com/p/4599f1aaee0")))}c.isMDXComponent=!0}}]);