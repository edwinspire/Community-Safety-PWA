!function(s){var e={};function o(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return s[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=s,o.c=e,o.d=function(s,e,n){o.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:n})},o.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,e){if(1&e&&(s=o(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var t in s)o.d(n,t,function(e){return s[e]}.bind(null,t));return n},o.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return o.d(e,"a",e),e},o.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},o.p="",o(o.s=0)}([function(s,e,o){"use strict";o.r(e);const n=["client/f9aae8b6288979fb2031/about.0.js","client/f9aae8b6288979fb2031/home.1.js","client/f9aae8b6288979fb2031/index.2.js","client/f9aae8b6288979fb2031/main.js","client/f9aae8b6288979fb2031/register.4.js","client/f9aae8b6288979fb2031/vendors~home.5.js"].concat(["service-worker-index.html","_manifest.json","css/bulma/bulma.min.css","css/fontawesome/css/all.css","css/fontawesome/css/all.min.css","css/fontawesome/css/brands.css","css/fontawesome/css/brands.min.css","css/fontawesome/css/fontawesome.css","css/fontawesome/css/fontawesome.min.css","css/fontawesome/css/regular.css","css/fontawesome/css/regular.min.css","css/fontawesome/css/solid.css","css/fontawesome/css/solid.min.css","css/fontawesome/css/svg-with-js.css","css/fontawesome/css/svg-with-js.min.css","css/fontawesome/css/v4-shims.css","css/fontawesome/css/v4-shims.min.css","css/fontawesome/webfonts/fa-brands-400.eot","css/fontawesome/webfonts/fa-brands-400.svg","css/fontawesome/webfonts/fa-brands-400.ttf","css/fontawesome/webfonts/fa-brands-400.woff","css/fontawesome/webfonts/fa-brands-400.woff2","css/fontawesome/webfonts/fa-regular-400.eot","css/fontawesome/webfonts/fa-regular-400.svg","css/fontawesome/webfonts/fa-regular-400.ttf","css/fontawesome/webfonts/fa-regular-400.woff","css/fontawesome/webfonts/fa-regular-400.woff2","css/fontawesome/webfonts/fa-solid-900.eot","css/fontawesome/webfonts/fa-solid-900.svg","css/fontawesome/webfonts/fa-solid-900.ttf","css/fontawesome/webfonts/fa-solid-900.woff","css/fontawesome/webfonts/fa-solid-900.woff2","favicon (1).png","favicon.png","global.css","icons/icon-128x128.png","icons/icon-144x144.png","icons/icon-152x152.png","icons/icon-192x192.png","icons/icon-384x384.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","img/icon.png","logo.ico","logo.png","logo.svg","manifest.json"]),t=new Set(n);self.addEventListener("push",s=>{const e=s.data.json();console.log(e),self.registration.showNotification(e.title,{body:e.message})}),self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1607913811996").then(s=>s.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1607913811996"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const e=new URL(s.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&t.has(e.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1607913811996").then(async e=>{try{const o=await fetch(s.request);return e.put(s.request,o.clone()),o}catch(o){const n=await e.match(s.request);if(n)return n;throw o}}))))})}]);