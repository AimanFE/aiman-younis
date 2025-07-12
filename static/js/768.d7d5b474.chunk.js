"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[768],{948:(e,t,i)=>{i.d(t,{c:()=>r});var a=i(43);const r=()=>{const[e,t]=(0,a.useState)({x:0,y:0}),i=(0,a.useCallback)((e,i)=>{t({x:e,y:i})},[]),r=(0,a.useCallback)(e=>{i(e.clientX,e.clientY)},[i]),o=(0,a.useCallback)(e=>{if(e.touches.length>0){const t=e.touches[0];i(t.clientX,t.clientY)}},[i]);return(0,a.useEffect)(()=>{let e;const t=t=>{e&&clearTimeout(e),e=setTimeout(()=>r(t),16)},i=t=>{e&&clearTimeout(e),e=setTimeout(()=>o(t),16)};return window.addEventListener("mousemove",t),window.addEventListener("touchmove",i),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",i),e&&clearTimeout(e)}},[r,o]),e}},986:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var a=i(43),r=i(464),o=i(487),n=i(579);const s=r.Ay.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`,l=()=>{const e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{const t=e.current;if(!t)return;const i=t.getContext("2d");if(!i)return;t.width=window.innerWidth,t.height=window.innerHeight;const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(""),r=t.width/10,o=[];for(let e=0;e<r;e++)o[e]=1;let n,s=0;const l=1e3/30,d=e=>{if(e-s>=l){i.fillStyle="rgba(10, 14, 39, 0.04)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#667eea",i.font="10px monospace";for(let e=0;e<o.length;e++){const r=a[Math.floor(Math.random()*a.length)];i.fillText(r,10*e,10*o[e]),10*o[e]>t.height&&Math.random()>.975&&(o[e]=0),o[e]++}s=e}n=requestAnimationFrame(d)};n=requestAnimationFrame(d);const p=()=>{t.width=window.innerWidth,t.height=window.innerHeight};return window.addEventListener("resize",p),()=>{n&&cancelAnimationFrame(n),window.removeEventListener("resize",p)}},[]),(0,n.jsx)(s,{ref:e})},d=r.i7`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(90deg); }
  50% { transform: translate(-5px, -25px) rotate(180deg); }
  75% { transform: translate(-15px, -10px) rotate(270deg); }
`,p=r.i7`
  0%, 100% { transform: translate(0, 0) rotate(360deg); }
  25% { transform: translate(-12px, 20px) rotate(270deg); }
  50% { transform: translate(8px, 15px) rotate(180deg); }
  75% { transform: translate(18px, -8px) rotate(90deg); }
`,m=r.i7`
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(15px, -20px) rotate(120deg) scale(1.1); }
  66% { transform: translate(-10px, 10px) rotate(240deg) scale(0.9); }
`,c=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,h=(0,r.Ay)(o.P.div)`
  position: absolute;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  background: ${e=>e.$color};
  border-radius: ${e=>.2*e.$size}px;
  left: ${e=>e.$left};
  top: ${e=>e.$top};
  opacity: 0.1;
  animation: ${e=>{switch(e.$animation){case"float1":default:return d;case"float2":return p;case"float3":return m}}} ${e=>e.$duration} ease-in-out infinite;
  box-shadow: 0 0 20px ${e=>e.$color}40;
  will-change: transform;
  
  @media (max-width: 768px) {
    opacity: 0.15;
    box-shadow: 0 0 25px ${e=>e.$color}60;
  }
`,x=[{size:60,color:"#667eea",left:"10%",top:"20%",animation:"float1",duration:"8s"},{size:80,color:"#764ba2",left:"85%",top:"15%",animation:"float2",duration:"10s"},{size:45,color:"#f6ad55",left:"15%",top:"70%",animation:"float3",duration:"12s"},{size:70,color:"#4299e1",left:"80%",top:"75%",animation:"float1",duration:"9s"},{size:35,color:"#667eea",left:"50%",top:"10%",animation:"float2",duration:"11s"},{size:55,color:"#764ba2",left:"25%",top:"45%",animation:"float3",duration:"7s"}],g=()=>(0,n.jsx)(c,{children:x.map((e,t)=>(0,n.jsx)(h,{$size:e.size,$color:e.color,$left:e.left,$top:e.top,$animation:e.animation,$duration:e.duration,initial:{opacity:0,scale:0},animate:{opacity:.1,scale:1},transition:{duration:1.5,delay:.2*t,ease:"easeOut"}},t))}),f=(0,r.Ay)(o.P.h2)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }
  
  span {
    position: relative;
    display: inline-block;
    color: ${e=>e.theme.text};
    text-shadow: 
      0 0 10px ${e=>e.theme.primary},
      0 0 20px ${e=>e.theme.primary},
      0 0 30px ${e=>e.theme.primary};
    animation: glow 3s ease-in-out infinite alternate;
    will-change: text-shadow;
    
    @keyframes glow {
      from {
        text-shadow: 
          0 0 8px ${e=>e.theme.primary},
          0 0 16px ${e=>e.theme.primary},
          0 0 24px ${e=>e.theme.primary};
      }
      to {
        text-shadow: 
          0 0 12px ${e=>e.theme.primary},
          0 0 24px ${e=>e.theme.primary},
          0 0 36px ${e=>e.theme.primary};
      }
    }
  }
`,u=e=>{let{text:t}=e;const i=t.split(" "),a={visible:{opacity:1,y:0,transition:{type:"spring",damping:20,stiffness:120,duration:.4}},hidden:{opacity:0,y:15,transition:{type:"spring",damping:20,stiffness:120,duration:.4}}};return(0,n.jsx)(f,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.4,duration:.6}}},initial:"hidden",animate:"visible",children:i.map((e,t)=>(0,n.jsx)(o.P.span,{variants:a,style:{marginRight:"0.5rem"},children:e},t))})};var y=i(948);const w=i.p+"static/media/profile.ce11a2bfacc1dc2648fd.jpg",b=(0,r.Ay)(o.P.div)`
  position: absolute;
  top: 20%;
  right: 10%;
  z-index: 5;
  
  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
  }
`,v=(0,r.Ay)(o.P.div)`
  position: relative;
  width: 200px;
  height: 200px;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,$=(0,r.Ay)(o.P.div)`
  position: absolute;
  inset: -10px;
  background: ${e=>e.theme.glassBg};
  backdrop-filter: ${e=>e.theme.glassBackdrop};
  border: 2px solid ${e=>e.theme.border};
  border-radius: 50%;
  box-shadow: 
    ${e=>e.theme.cardShadow},
    inset 0 0 20px rgba(102, 126, 234, 0.1);
`,k=(0,r.Ay)(o.P.div)`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${e=>e.theme.primary},
    ${e=>e.theme.secondary},
    ${e=>e.theme.accent},
    ${e=>e.theme.primary}
  );
  opacity: 0.3;
  animation: rotate 8s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,j=r.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  background: ${e=>e.theme.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${e=>e.theme.primary};
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.4);
`,z=r.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.3s ease;
`,A=r.Ay.div`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`,C=e=>{let{src:t=w,alt:i="Aiman Younis - Full Stack Developer"}=e;const a=(0,y.c)(),r=20*(a.x/window.innerWidth-.5),o=20*(a.y/window.innerHeight-.5);return(0,n.jsx)(b,{initial:{opacity:0,scale:.5,rotateY:-90},animate:{opacity:1,scale:1,rotateY:0,x:r,y:o},transition:{duration:1.2,delay:1.5,x:{type:"spring",stiffness:100,damping:10},y:{type:"spring",stiffness:100,damping:10}},children:(0,n.jsxs)(v,{whileHover:{scale:1.1,rotateY:15,z:50},transition:{type:"spring",stiffness:300,damping:20},children:[(0,n.jsx)(k,{}),(0,n.jsx)($,{initial:{rotate:0},animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),(0,n.jsx)(j,{children:t?(0,n.jsx)(z,{src:t,alt:i}):(0,n.jsx)(A,{children:"Add your profile image to src/assets/profile.jpg"})})]})})},P=r.Ay.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${e=>e.theme.background};
`,S=r.Ay.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 2rem;
  }
`,T=(0,r.Ay)(o.P.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  background: ${e=>e.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1.1;
`,Y=(0,r.Ay)(o.P.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    line-height: 1.6;
    margin-bottom: 2.5rem;
    padding: 0 0.5rem;
  }
`,E=(0,r.Ay)(o.P.a)`
  display: inline-block;
  padding: 1rem 3rem;
  background: ${e=>e.theme.primaryGradient};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`,W=(0,r.Ay)(o.P.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
    transform: translateX(-50%) scale(0.9);
  }
  
  @media (max-width: 480px) {
    bottom: 1rem;
    transform: translateX(-50%) scale(0.8);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 40px;
    margin-left: -12px;
    border: 2px solid ${e=>e.theme.primary};
    border-radius: 12px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 4px;
    height: 8px;
    margin-left: -2px;
    background: ${e=>e.theme.primary};
    border-radius: 2px;
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(20px);
      opacity: 0;
    }
  }
`,H=()=>(0,n.jsxs)(P,{id:"hero",children:[(0,n.jsx)(l,{}),(0,n.jsx)(g,{}),(0,n.jsx)(C,{}),(0,n.jsxs)(S,{children:[(0,n.jsx)(T,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Aiman Younis"}),(0,n.jsx)(u,{text:"Frontend Developer"}),(0,n.jsxs)(Y,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:["Crafting Beautiful Interactive Websites Where AI-Powered Innovation Creates Digital"," ",(0,n.jsx)(o.P.a,{href:"#particle-playground",style:{color:"inherit",textDecoration:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",cursor:"pointer",fontWeight:"bold",borderBottom:"2px solid transparent",borderImage:"linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1",borderImageSlice:1},whileHover:{scale:1.05,textShadow:"0 0 8px rgba(102, 126, 234, 0.5)"},whileTap:{scale:.95},onClick:e=>{var t;e.preventDefault(),null===(t=document.querySelector("#particle-playground"))||void 0===t||t.scrollIntoView({behavior:"smooth"})},children:"Magic"})]}),(0,n.jsx)(E,{href:"#contact",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Let's Connect"})]}),(0,n.jsx)(W,{onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:1.2}})]})}}]);
//# sourceMappingURL=768.d7d5b474.chunk.js.map