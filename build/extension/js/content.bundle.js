!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(6)},,,,,,function(e,t,n){"use strict";var o=n(7),r=void 0,i=document.createElement("script");i.src=chrome.extension.getURL("js/page.bundle.js"),i.onload=function(){this.parentNode.removeChild(this)},(document.head||document.documentElement).appendChild(i),window.addEventListener("message",function(e){e&&e.source===window&&"object"==typeof e.data&&"redux-page"===e.data.source&&(r=e.data.payload,chrome.runtime.sendMessage(e.data))}),window.dispatch=function(e){window.postMessage({type:o.ACTION,payload:e,source:"redux-cs"},"*")},window.update=function(){window.postMessage({type:o.UPDATE,source:"redux-cs"},"*")},chrome.runtime.onMessage.addListener(function(e){e.action&&window.dispatch(e.action)}),window.addEventListener("beforeunload",function(){chrome.runtime.sendMessage({type:"PAGE_UNLOADED"})}),document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&r&&chrome.runtime.sendMessage({payload:r,source:"redux-page",init:!0})})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="ACTION";t.ACTION=n;var o="UPDATE";t.UPDATE=o}]);