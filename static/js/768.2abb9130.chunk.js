"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[768],{948:(t,e,i)=>{i.d(e,{c:()=>r});var a=i(43);const r=()=>{const[t,e]=(0,a.useState)({x:0,y:0}),i=(0,a.useCallback)(t=>{e({x:t.clientX,y:t.clientY})},[]);return(0,a.useEffect)(()=>{let t;const e=e=>{t&&clearTimeout(t),t=setTimeout(()=>i(e),16)};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e),t&&clearTimeout(t)}},[i]),t}},986:(t,e,i)=>{i.r(e),i.d(e,{default:()=>E});var a=i(43),r=i(464),o=i(487),n=i(579);const s=r.Ay.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`,l=()=>{const t=(0,a.useRef)(null);return(0,a.useEffect)(()=>{const e=t.current;if(!e)return;const i=e.getContext("2d");if(!i)return;e.width=window.innerWidth,e.height=window.innerHeight;const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(""),r=e.width/10,o=[];for(let t=0;t<r;t++)o[t]=1;const n=setInterval(()=>{i.fillStyle="rgba(10, 14, 39, 0.04)",i.fillRect(0,0,e.width,e.height),i.fillStyle="#667eea",i.font="10px monospace";for(let t=0;t<o.length;t++){const r=a[Math.floor(Math.random()*a.length)];i.fillText(r,10*t,10*o[t]),10*o[t]>e.height&&Math.random()>.975&&(o[t]=0),o[t]++}},35),s=()=>{e.width=window.innerWidth,e.height=window.innerHeight};return window.addEventListener("resize",s),()=>{clearInterval(n),window.removeEventListener("resize",s)}},[]),(0,n.jsx)(s,{ref:t})},d=r.i7`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -15px) rotate(90deg); }
  50% { transform: translate(-5px, -25px) rotate(180deg); }
  75% { transform: translate(-15px, -10px) rotate(270deg); }
`,p=r.i7`
  0%, 100% { transform: translate(0, 0) rotate(360deg); }
  25% { transform: translate(-12px, 20px) rotate(270deg); }
  50% { transform: translate(8px, 15px) rotate(180deg); }
  75% { transform: translate(18px, -8px) rotate(90deg); }
`,c=r.i7`
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  33% { transform: translate(15px, -20px) rotate(120deg) scale(1.1); }
  66% { transform: translate(-10px, 10px) rotate(240deg) scale(0.9); }
`,m=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,h=(0,r.Ay)(o.P.div)`
  position: absolute;
  width: ${t=>t.$size}px;
  height: ${t=>t.$size}px;
  background: ${t=>t.$color};
  border-radius: ${t=>.2*t.$size}px;
  left: ${t=>t.$left};
  top: ${t=>t.$top};
  opacity: 0.1;
  animation: ${t=>{switch(t.$animation){case"float1":default:return d;case"float2":return p;case"float3":return c}}} ${t=>t.$duration} ease-in-out infinite;
  box-shadow: 0 0 20px ${t=>t.$color}40;
  will-change: transform;
`,x=[{size:60,color:"#667eea",left:"10%",top:"20%",animation:"float1",duration:"8s"},{size:80,color:"#764ba2",left:"85%",top:"15%",animation:"float2",duration:"10s"},{size:45,color:"#f6ad55",left:"15%",top:"70%",animation:"float3",duration:"12s"},{size:70,color:"#4299e1",left:"80%",top:"75%",animation:"float1",duration:"9s"},{size:35,color:"#667eea",left:"50%",top:"10%",animation:"float2",duration:"11s"},{size:55,color:"#764ba2",left:"25%",top:"45%",animation:"float3",duration:"7s"}],f=()=>(0,n.jsx)(m,{children:x.map((t,e)=>(0,n.jsx)(h,{$size:t.size,$color:t.color,$left:t.left,$top:t.top,$animation:t.animation,$duration:t.duration,initial:{opacity:0,scale:0},animate:{opacity:.1,scale:1},transition:{duration:1.5,delay:.2*e,ease:"easeOut"}},e))}),g=(0,r.Ay)(o.P.h2)`
  font-size: clamp(1.5rem, 4vw, 3rem);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  span {
    position: relative;
    display: inline-block;
    color: ${t=>t.theme.text};
    text-shadow: 
      0 0 10px ${t=>t.theme.primary},
      0 0 20px ${t=>t.theme.primary},
      0 0 30px ${t=>t.theme.primary};
    animation: glow 3s ease-in-out infinite alternate;
    will-change: text-shadow;
    
    @keyframes glow {
      from {
        text-shadow: 
          0 0 8px ${t=>t.theme.primary},
          0 0 16px ${t=>t.theme.primary},
          0 0 24px ${t=>t.theme.primary};
      }
      to {
        text-shadow: 
          0 0 12px ${t=>t.theme.primary},
          0 0 24px ${t=>t.theme.primary},
          0 0 36px ${t=>t.theme.primary};
      }
    }
  }
`,u=t=>{let{text:e}=t;const i=e.split(" "),a={visible:{opacity:1,y:0,transition:{type:"spring",damping:20,stiffness:120,duration:.4}},hidden:{opacity:0,y:15,transition:{type:"spring",damping:20,stiffness:120,duration:.4}}};return(0,n.jsx)(g,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.4,duration:.6}}},initial:"hidden",animate:"visible",children:i.map((t,e)=>(0,n.jsx)(o.P.span,{variants:a,style:{marginRight:"0.5rem"},children:t},e))})};var y=i(948);const w=i.p+"static/media/profile.ce11a2bfacc1dc2648fd.jpg",b=(0,r.Ay)(o.P.div)`
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
  background: ${t=>t.theme.glassBg};
  backdrop-filter: ${t=>t.theme.glassBackdrop};
  border: 2px solid ${t=>t.theme.border};
  border-radius: 50%;
  box-shadow: 
    ${t=>t.theme.cardShadow},
    inset 0 0 20px rgba(102, 126, 234, 0.1);
`,k=(0,r.Ay)(o.P.div)`
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${t=>t.theme.primary},
    ${t=>t.theme.secondary},
    ${t=>t.theme.accent},
    ${t=>t.theme.primary}
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
  background: ${t=>t.theme.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid ${t=>t.theme.primary};
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.4);
`,z=r.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.3s ease;
`,A=r.Ay.div`
  color: ${t=>t.theme.textSecondary};
  font-size: 0.9rem;
  text-align: center;
  padding: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`,C=t=>{let{src:e=w,alt:i="Aiman Younis - Full Stack Developer"}=t;const a=(0,y.c)(),r=20*(a.x/window.innerWidth-.5),o=20*(a.y/window.innerHeight-.5);return(0,n.jsx)(b,{initial:{opacity:0,scale:.5,rotateY:-90},animate:{opacity:1,scale:1,rotateY:0,x:r,y:o},transition:{duration:1.2,delay:1.5,x:{type:"spring",stiffness:100,damping:10},y:{type:"spring",stiffness:100,damping:10}},children:(0,n.jsxs)(v,{whileHover:{scale:1.1,rotateY:15,z:50},transition:{type:"spring",stiffness:300,damping:20},children:[(0,n.jsx)(k,{}),(0,n.jsx)($,{initial:{rotate:0},animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),(0,n.jsx)(j,{children:e?(0,n.jsx)(z,{src:e,alt:i}):(0,n.jsx)(A,{children:"Add your profile image to src/assets/profile.jpg"})})]})})},P=r.Ay.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${t=>t.theme.background};
`,S=r.Ay.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
`,Y=(0,r.Ay)(o.P.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
  background: ${t=>t.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1.1;
`,T=(0,r.Ay)(o.P.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: ${t=>t.theme.textSecondary};
  margin-bottom: 2rem;
`,W=(0,r.Ay)(o.P.a)`
  display: inline-block;
  padding: 1rem 3rem;
  background: ${t=>t.theme.primaryGradient};
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
`,H=(0,r.Ay)(o.P.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 40px;
    margin-left: -12px;
    border: 2px solid ${t=>t.theme.primary};
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
    background: ${t=>t.theme.primary};
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
`,E=()=>(0,n.jsxs)(P,{id:"hero",children:[(0,n.jsx)(l,{}),(0,n.jsx)(f,{}),(0,n.jsx)(C,{}),(0,n.jsxs)(S,{children:[(0,n.jsx)(Y,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Aiman Younis"}),(0,n.jsx)(u,{text:"Frontend Developer"}),(0,n.jsxs)(T,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:["Crafting Beautiful Interactive Websites Where AI-Powered Innovation Creates Digital"," ",(0,n.jsx)(o.P.a,{href:"#particle-playground",style:{color:"inherit",textDecoration:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",cursor:"pointer",fontWeight:"bold"},whileHover:{scale:1.05,textShadow:"0 0 8px rgba(102, 126, 234, 0.5)"},whileTap:{scale:.95},onClick:t=>{var e;t.preventDefault(),null===(e=document.querySelector("#particle-playground"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},children:"Magic"})]}),(0,n.jsx)(W,{href:"#contact",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Let's Connect"})]}),(0,n.jsx)(H,{onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:1.2}})]})}}]);
//# sourceMappingURL=768.2abb9130.chunk.js.map