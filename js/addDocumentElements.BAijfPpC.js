import{an as i,ao as p}from"./siteModulesConstants.rBDSo9Nk.js";var m=(t=>(t.PHYSICAL="physical",t.DIGITAL="digital",t.DONATION="donation",t.BOOKING="booking",t.SERVICE="service",t.GIFT_CARD="gift_card",t.PRINT_ON_DEMAND="print_on_demand",t))(m||{});const A={DPD:"dpd",OMNIVA:"omniva",LP_EXPRESS:"lp-express",MANUAL:"manual"},N={SUBSCRIBE:"subscribe",BEGIN_CHECKOUT:"begin_checkout",PURCHASE:"purchase",SIGN_UP:"sign_up",CONTACT:"contact",ADD_TO_CART:"add_to_cart",VIEW_ITEM:"view_item",SELECT_ITEM:"select_item",VIEW_CART:"view_cart",REMOVE_FROM_CART:"remove_from_cart"},v=t=>{const e=`${t}=`,s=decodeURIComponent(document.cookie).split(";");for(let o=0;o<s.length;o+=1){let a=s[o];for(;a.charAt(0)===" ";)a=a.substring(1);if(a.indexOf(e)===0)return a.substring(e.length,a.length)}return""},S=(t,e,n,{cdomain:s=null}={})=>{const o=new Date;o.setTime(o.getTime()+n*24*60*60*1e3);const a=n?`expires=${o.toUTCString()};`:"",r=s?`domain=${s};`:"";document.cookie=`${t}=${e};${a}path=/;${r}`},x=t=>{document.cookie=`${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`},h=t=>t.startsWith("www."),$=t=>h(t)?t.substring(4):t,D=()=>window.self!==window.top,c=({type:t,tagName:e,properties:n={},children:s=[]})=>{if(t!=="element")return console.error("Failed to injected HTML element - missing node type");const o=document.createElement(e);if(Object.entries(n).forEach(([a,r])=>{o.setAttribute(a,r)}),s.length){const a=s.find(r=>r.type==="text").value;a&&(o.innerHTML=a)}return o},g=t=>{const e=`[${i}="${t}"]`;return document.querySelector(e)},u=t=>{const e=c(t),n=g(e.getAttribute(i));return e.outerHTML===n?.outerHTML?n:(n?.remove(),document.head.append(e),e)},f=t=>{const e=c(t),n=g(e.getAttribute(i));return e.outerHTML===n?.outerHTML?n:(n?.remove(),document.body.append(e),e)},E=t=>`!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '${t}');
	fbq('track', 'PageView');`,T=t=>`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${t}&ev=PageView&noscript=1"/>`,_=({containerId:t,gtmQuery:e=""}={})=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl${e};f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','${t}');`,w=({containerId:t,gtmQuery:e=""}={})=>`<iframe src="https://www.googletagmanager.com/ns.html?id=${t}${e}"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>`,I=({containerId:t,googleAdsIds:e})=>{const n=e.length?e.map(o=>`gtag('config', '${o}');`).join(`
		`):"";return`window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		${t?`gtag('config', '${t}');`:""}
		${n}`},b=t=>`https://www.googletagmanager.com/gtag/js?id=${t}`,y=t=>`(function(h,o,t,j,a,r){
		h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
		h._hjSettings={hjid:${t},hjsv:6};
		a=o.getElementsByTagName('head')[0];
		r=o.createElement('script');r.async=1;
		r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
		a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,l=({siteMeta:t,areCookiesAllowed:e})=>{const n={};return e&&t.facebookPixel&&(n["noscript-fb-pixel"]={tagName:"noscript",children:[{type:"text",value:T(t.facebookPixel)}]}),e&&t.googleTagManager&&(n["noscript-gtm"]={tagName:"noscript",children:[{type:"text",value:w(t.googleTagManager)}]}),e&&t.facebookPixel&&(n["script-fb-pixel"]={tagName:"script",children:[{type:"text",value:E(t.facebookPixel)}]}),e&&(t.googleTagManager||t.googleAdsIds?.length)&&(n["script-gtm"]={tagName:"script",children:[{type:"text",value:_({containerId:t.googleTagManager?t.googleTagManager:t.googleAdsIds[0]})}]}),e&&(t.googleAnalytics||t.googleAdsIds?.length)&&(n["script-google-analytics"]={tagName:"script",children:[{type:"text",value:I({containerId:t.googleAnalytics,googleAdsIds:t.googleAdsIds||[]})}]},t.googleAnalytics&&(n["script-google-analytics-async"]={tagName:"script",properties:{src:b(t.googleAnalytics)}})),e&&t.hotjar&&(n["script-hotjar"]={tagName:"script",children:[{type:"text",value:y(t.hotjar)}]}),Object.entries(n).map(([s,{tagName:o,properties:a={},children:r=[]}])=>({type:"element",tagName:o,properties:{...a,[i]:s},children:r}))},d=t=>{t.forEach(e=>p.includes(e.properties[i])?f(e):u(e))},L=({siteMeta:t,areCookiesAllowed:e})=>{const n=l({siteMeta:t,areCookiesAllowed:e});d(n)},C=({siteMeta:t,areCookiesAllowed:e})=>{const n=l({siteMeta:t,areCookiesAllowed:e});d(n)};export{m as E,N as G,$ as a,L as b,D as c,A as d,C as e,x as f,v as g,u as h,S as s};
