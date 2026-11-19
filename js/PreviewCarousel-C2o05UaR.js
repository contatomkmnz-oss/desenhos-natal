import{j as e}from"./index-Ko8OfhHe.js";const o=Array.from({length:6},(t,s)=>`/previews/cores/${String(s+1).padStart(2,"0")}.webp`),c=Array.from({length:50},(t,s)=>`/previews/${String(s+1).padStart(2,"0")}.webp`),l=[...Array.from({length:50},(t,s)=>o[s%6]),...Array.from({length:50},(t,s)=>o[s%6])],r=[...c,...c],p=()=>e.jsxs("section",{id:"preview-carousel",className:"py-20 overflow-hidden w-full bg-black",children:[e.jsxs("div",{className:"w-full mx-auto",children:[e.jsx("h2",{className:"text-2xl md:text-4xl font-bold mb-12 text-center text-white px-6",children:"Alguns desenhos que você vai encontrar:"}),e.jsxs("div",{className:"max-w-5xl mx-auto px-4",children:[e.jsx("div",{className:"relative w-full flex overflow-hidden group mb-8",children:e.jsx("div",{className:"flex animate-marquee-fast whitespace-nowrap",children:l.map((t,s)=>e.jsx("div",{className:"flex-shrink-0 w-[110px] mx-2",children:e.jsx("div",{className:"relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl",children:e.jsx("img",{src:t,alt:`Desenho colorido ${s+1}`,className:"w-full h-full object-contain bg-white",referrerPolicy:"no-referrer",loading:"lazy",decoding:"async"})})},s))})}),e.jsx("div",{className:"relative w-full flex overflow-hidden group",children:e.jsx("div",{className:"flex animate-marquee-slow whitespace-nowrap",children:r.map((t,s)=>e.jsx("div",{className:"flex-shrink-0 w-[110px] mx-2",children:e.jsx("div",{className:"relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl",children:e.jsx("img",{src:t,alt:`Desenho para colorir ${s+1}`,className:"w-full h-full object-contain bg-white",referrerPolicy:"no-referrer",loading:"lazy",decoding:"async"})})},s))})})]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-fast {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
        .animate-marquee-slow {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
      `}})]});export{p as default};
