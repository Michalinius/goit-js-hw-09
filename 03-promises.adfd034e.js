function e(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}const o=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]');document.querySelector(".form").addEventListener("submit",(l=>{l.preventDefault();for(let l=1;l<=n.value;l++)e(l,+o.value+ +t.value*(l-1)).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.adfd034e.js.map