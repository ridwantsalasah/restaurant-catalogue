if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const d=e=>s(e,r),p={module:{uri:r},exports:n,require:d};a[r]=Promise.all(i.map((e=>p[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"109.bundle.js",revision:"e1d90975d976793ccdfc67bf4efefb47"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"app~309f7e27.bundle.js",revision:"e3f14e3b636acd029b0bb094527e563b"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~7bd12dde.bundle.js",revision:"1d8fba74dbfd051235d12fab97e4b099"},{url:"app~a51fa3f5.bundle.js",revision:"3f419805d815438289c58cd9c2078712"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"3dfad83d6d27fe08937a665fcd33b2b7"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"9cd1bbb529b4cae7850d0ec2f962f0fb"},{url:"app~e4317507.bundle.js",revision:"58196bd2e4264956232877359de65fa2"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"assets/android-chrome-144x144.png",revision:"cd430f5938a63ba7a44ca9d0db69320e"},{url:"assets/android-chrome-192x192.png",revision:"976ccb9ecb81caa74d7a6d69ef4605e4"},{url:"assets/android-chrome-256x256.png",revision:"5147ef88bc26727984c9717b4eeeea77"},{url:"assets/android-chrome-36x36.png",revision:"e8c9b5bb5e4840bb396eac1c3154201c"},{url:"assets/android-chrome-384x384.png",revision:"b8e8a69a600986ca150c39297b2472af"},{url:"assets/android-chrome-48x48.png",revision:"9aa006913c86cc9a17caedc925597b65"},{url:"assets/android-chrome-512x512.png",revision:"e83fabc9ea3a936778dd07784f974da7"},{url:"assets/android-chrome-72x72.png",revision:"32b0d06d0b6aaa53bd11dfc7e39e91aa"},{url:"assets/android-chrome-96x96.png",revision:"5d430d9f5d45df7bce94bc8b10c06f48"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"faa0035b23f92e33035d4d85c3c6682e"},{url:"assets/apple-touch-icon-114x114.png",revision:"7bd53d763964147850497242134a20b9"},{url:"assets/apple-touch-icon-120x120.png",revision:"f4c9144ab7ab27ad0860efb74c08b16e"},{url:"assets/apple-touch-icon-144x144.png",revision:"cd430f5938a63ba7a44ca9d0db69320e"},{url:"assets/apple-touch-icon-152x152.png",revision:"08ebd5ca852238b9f68dd6fed200c07f"},{url:"assets/apple-touch-icon-167x167.png",revision:"f6f986d4fe0302294ff2a8415e517769"},{url:"assets/apple-touch-icon-180x180.png",revision:"aff3460c7d0dfa09a7a8118a344e931d"},{url:"assets/apple-touch-icon-57x57.png",revision:"1d9a49d1121d5afa8150ddbbb4b93039"},{url:"assets/apple-touch-icon-60x60.png",revision:"6aed883752289b12a82df7fac2a23363"},{url:"assets/apple-touch-icon-72x72.png",revision:"32b0d06d0b6aaa53bd11dfc7e39e91aa"},{url:"assets/apple-touch-icon-76x76.png",revision:"75cf083b01cd5f6666e032aeac8dbe20"},{url:"assets/apple-touch-icon-precomposed.png",revision:"aff3460c7d0dfa09a7a8118a344e931d"},{url:"assets/apple-touch-icon.png",revision:"aff3460c7d0dfa09a7a8118a344e931d"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"3d04f2a665d7c9a8071e3c9416fe8f99"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"fc47663bcda3e35ff56f56e676266bda"},{url:"assets/apple-touch-startup-image-1170x2532.png",revision:"6fb94bfc682cdd9526028ed06f2f4ac0"},{url:"assets/apple-touch-startup-image-1179x2556.png",revision:"373c84a90efe3ff300cbf80c3435266e"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"218f5cd92d54ea6a062bd36b6aa111f8"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"2d16287c473c023d2a0fa1332b68052d"},{url:"assets/apple-touch-startup-image-1284x2778.png",revision:"173d1223d9a6b81b051c179df022239f"},{url:"assets/apple-touch-startup-image-1290x2796.png",revision:"8738911b80e9d7f68fc9ab6b03125117"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"570afe778f379ab85ff69eb4413116ef"},{url:"assets/apple-touch-startup-image-1488x2266.png",revision:"dae83386abcf3ceae605c3aab47c7d24"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"56530b567048699b7292d4bc7df86c69"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"93ba3f3a3ded3e7b0b6b7db39ae54ff8"},{url:"assets/apple-touch-startup-image-1640x2160.png",revision:"6cb39f129a0599592d1ae2f21915eb72"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"b2e854299721825d46a729282a91d566"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"8833c95b123acffb84f3e8e1b5887533"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"653b57226cdb892e6fb502d835aa0c65"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"8e21ccd55181ec0949e1401e446895be"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"4ee9cd80ad2d9685097549d27b0324db"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"49d78c502ef93824a609cac61a043d20"},{url:"assets/apple-touch-startup-image-2160x1640.png",revision:"73ac453664f0c5b10d03eaa7dfb93a96"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"1ad84991f5bb2e7ba075d40a2339b018"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"b46e22efe429a989d945c77be6999e82"},{url:"assets/apple-touch-startup-image-2266x1488.png",revision:"91df979ad701203dd44db2c73822dfcd"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"6b53c0e3bac25c11e9e52008ba376018"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"2d0240484b56e817933dadcaeb2b9261"},{url:"assets/apple-touch-startup-image-2532x1170.png",revision:"787e83647eec43d0e2b37b6ca7601f81"},{url:"assets/apple-touch-startup-image-2556x1179.png",revision:"84732d6e1e1a20bb7c6f1788c1da793e"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"ea86e7c8892fe09111ff996ba8194067"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"fda51cdd6153fbd81acba6c1199a5194"},{url:"assets/apple-touch-startup-image-2778x1284.png",revision:"52e10ef21f7550562e66e1dac9979c68"},{url:"assets/apple-touch-startup-image-2796x1290.png",revision:"ec5ae59f3b4d95826338a7fa4c388f11"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"54f57548c8b77732e99571fd932e3b78"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"b57df8786b129bce770cc4ee41c0120f"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"3faf9adbbd87841f5474c3efe21f127a"},{url:"assets/browserconfig.xml",revision:"b2c5abf2b91648116fdf6e412f6d2677"},{url:"assets/favicon-16x16.png",revision:"79b0bcdbf7a8c87168e0597f233d0abb"},{url:"assets/favicon-32x32.png",revision:"8e832fe637e170adac7aa2279059a844"},{url:"assets/favicon-48x48.png",revision:"9aa006913c86cc9a17caedc925597b65"},{url:"assets/favicon.ico",revision:"de93602a6eb29c2fb6c20b9ac3bb4abe"},{url:"assets/manifest.webmanifest",revision:"2ac03f0c0ebee5ec7313a1cba3bc269d"},{url:"assets/mstile-144x144.png",revision:"cd430f5938a63ba7a44ca9d0db69320e"},{url:"assets/mstile-150x150.png",revision:"6ca9fda39355c1f835e60e883075dc84"},{url:"assets/mstile-310x150.png",revision:"edc68402ca72336fd7705e829878a4d0"},{url:"assets/mstile-310x310.png",revision:"cf60d44d7bdbe6bf39a85f85aa55c94d"},{url:"assets/mstile-70x70.png",revision:"1ea9d035aeadce64e9c5a5bec9bba3ff"},{url:"assets/yandex-browser-50x50.png",revision:"a78c3619f81abd4ade319b318ae007a5"},{url:"assets/yandex-browser-manifest.json",revision:"1fa786b96e710d40404b454e3f54141c"},{url:"e74c89b0bb54b1b33668.jpg",revision:null},{url:"index.html",revision:"5515c94a4cf552998370fe2e8dab346a"},{url:"public/app.webmanifest",revision:"4eaa7abf3274c99d0029c92e9f6c148d"},{url:"public/favicon-32x32.png",revision:"8a2c942ca131814e557099ecb9b59ca2"},{url:"public/icons/icon-128x128.png",revision:"a766895e5eb7d8381897b20c598f847b"},{url:"public/icons/icon-144x144.png",revision:"825d9db76bdadbf66d7c339b98e5f9a3"},{url:"public/icons/icon-152x152.png",revision:"74bf9ed8739f65cc7cbd112bdf48cd4b"},{url:"public/icons/icon-192x192.png",revision:"7071eacb703f7f60ec9c8de6e858d889"},{url:"public/icons/icon-384x384.png",revision:"13331e05f72680931daad7332ff8defd"},{url:"public/icons/icon-512x512.png",revision:"abfafedee25ccabf0d03d344d6ecaf14"},{url:"public/icons/icon-72x72.png",revision:"6bab9806114e36cbadf98b6d902c12e3"},{url:"public/icons/icon-96x96.png",revision:"82ceec3601e756f7a04ec28a1b3d61fa"},{url:"public/images/placeholder.png",revision:"e8c46b161a53ef908382717c097ce37b"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")||e.href.startsWith("https://restaurant-api.dicoding.dev/images/small/")||e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"therestaurantdb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map