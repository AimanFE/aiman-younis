"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[728],{728:(t,e,i)=>{i.r(e),i.d(e,{default:()=>x});var a=i(43),n=i(464),o=i(487),r=i(948),s=i(421),l=i(579);const c=n.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${t=>t.theme.background};
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,d=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`,h=(0,n.Ay)(o.P.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  background: ${t=>t.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`,m=(0,n.Ay)(o.P.p)`
  font-size: 1.2rem;
  color: ${t=>t.theme.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  .desktop-text {
    display: block;
  }
  
  .mobile-text {
    display: none;
  }
  
  @media (max-width: 768px) {
    .desktop-text {
      display: none;
    }
    
    .mobile-text {
      display: block;
    }
  }
`,u=(0,n.Ay)(o.P.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${t=>t.theme.glassBg};
  backdrop-filter: ${t=>t.theme.glassBackdrop};
  border: 1px solid ${t=>t.theme.border};
  border-radius: 15px;
  padding: 2rem;
  color: ${t=>t.theme.text};
  font-size: 1.1rem;
  pointer-events: none;
  z-index: 5;
  
  .desktop-text {
    display: block;
  }
  
  .mobile-text {
    display: none;
  }
  
  @media (max-width: 768px) {
    .desktop-text {
      display: none;
    }
    
    .mobile-text {
      display: block;
    }
  }
`,p=n.Ay.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,x=()=>{const t=(0,a.useRef)(null),e=(0,r.c)(),i=(0,a.useRef)(null),n=(0,a.useRef)([]),{theme:o}=(0,s.D)(),x=(t,e)=>({x:t,y:e,vx:4*(Math.random()-.5),vy:4*(Math.random()-.5),radius:3*Math.random()+1,color:`hsl(${360*Math.random()}, 70%, ${"light"===o?"50%":"60%"})`});return(0,a.useEffect)(()=>{const a=t.current;if(!a)return;const o=a.getContext("2d",{alpha:!1});if(!o)return;const r=()=>{a.width=window.innerWidth,a.height=window.innerHeight};r(),window.addEventListener("resize",r);for(let t=0;t<5;t++)n.current.push(x(Math.random()*a.width,Math.random()*a.height));const s=()=>{o.clearRect(0,0,a.width,a.height);const t=n.current.map(t=>{t.vx+=.2*(Math.random()-.5),t.vy+=.2*(Math.random()-.5);const i=e.x-t.x,n=e.y-t.y,r=Math.sqrt(i*i+n*n);if(r<150&&r>0){const e=(150-r)/150;t.vx+=i/r*e*.4,t.vy+=n/r*e*.4}return t.x+=t.vx,t.y+=t.vy,t.vx*=.99,t.vy*=.99,(t.x<0||t.x>a.width)&&(t.vx*=-.8,t.x=Math.max(0,Math.min(a.width,t.x))),(t.y<0||t.y>a.height)&&(t.vy*=-.8,t.y=Math.max(0,Math.min(a.height,t.y))),o.save(),o.globalAlpha=.8,o.beginPath(),o.arc(t.x,t.y,t.radius,0,2*Math.PI),o.fillStyle=t.color,o.fill(),o.globalAlpha=.3,o.beginPath(),o.arc(t.x,t.y,2*t.radius,0,2*Math.PI),o.fill(),o.restore(),t});n.current=t,i.current=requestAnimationFrame(s)};return s(),()=>{window.removeEventListener("resize",r),null!==i.current&&cancelAnimationFrame(i.current)}},[e,o]),(0,l.jsxs)(c,{id:"particle-playground",children:[(0,l.jsx)(p,{ref:t}),(0,l.jsxs)(d,{children:[(0,l.jsx)(h,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:"Interactive Particle System"}),(0,l.jsxs)(m,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:[(0,l.jsx)("span",{className:"desktop-text",children:"Move your mouse around to interact with the particles. Watch as they respond to your cursor with realistic physics, attraction forces, and beautiful trails."}),(0,l.jsx)("span",{className:"mobile-text",children:"Touch and drag to interact with the particles. Watch as they respond to your touch with realistic physics, attraction forces, and beautiful trails."})]})]}),(0,l.jsxs)(u,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:2},children:[(0,l.jsx)("span",{className:"desktop-text",children:"\ud83c\udfae Move your mouse to interact with particles"}),(0,l.jsx)("span",{className:"mobile-text",children:"\ud83d\udc46 Touch and drag to interact with particles"})]})]})}},948:(t,e,i)=>{i.d(e,{c:()=>n});var a=i(43);const n=()=>{const[t,e]=(0,a.useState)({x:0,y:0}),i=(0,a.useCallback)((t,i)=>{e({x:t,y:i})},[]),n=(0,a.useCallback)(t=>{i(t.clientX,t.clientY)},[i]),o=(0,a.useCallback)(t=>{if(t.touches.length>0){const e=t.touches[0];i(e.clientX,e.clientY)}},[i]);return(0,a.useEffect)(()=>{let t;const e=e=>{t&&clearTimeout(t),t=setTimeout(()=>n(e),16)},i=e=>{t&&clearTimeout(t),t=setTimeout(()=>o(e),16)};return window.addEventListener("mousemove",e),window.addEventListener("touchmove",i),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",i),t&&clearTimeout(t)}},[n,o]),t}}}]);
//# sourceMappingURL=728.ba191837.chunk.js.map