"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[728],{728:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var r=i(43),n=i(464),a=i(487),o=i(948),s=i(421),c=i(579);const l=n.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${t=>t.theme.background};
  position: relative;
  overflow: hidden;
`,d=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`,h=(0,n.Ay)(a.P.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: ${t=>t.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,u=(0,n.Ay)(a.P.p)`
  font-size: 1.2rem;
  color: ${t=>t.theme.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,m=(0,n.Ay)(a.P.div)`
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
`,y=n.Ay.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,p=()=>{const t=(0,r.useRef)(null),e=(0,o.c)(),i=(0,r.useRef)(null),n=(0,r.useRef)([]),{theme:a}=(0,s.D)(),p=(t,e)=>({x:t,y:e,vx:4*(Math.random()-.5),vy:4*(Math.random()-.5),radius:3*Math.random()+1,color:`hsl(${360*Math.random()}, 70%, ${"light"===a?"50%":"60%"})`});return(0,r.useEffect)(()=>{const r=t.current;if(!r)return;const a=r.getContext("2d",{alpha:!1});if(!a)return;const o=()=>{r.width=window.innerWidth,r.height=window.innerHeight};o(),window.addEventListener("resize",o);for(let t=0;t<5;t++)n.current.push(p(Math.random()*r.width,Math.random()*r.height));const s=()=>{a.clearRect(0,0,r.width,r.height);const t=n.current.map(t=>{t.vx+=.2*(Math.random()-.5),t.vy+=.2*(Math.random()-.5);const i=e.x-t.x,n=e.y-t.y,o=Math.sqrt(i*i+n*n);if(o<150&&o>0){const e=(150-o)/150;t.vx+=i/o*e*.4,t.vy+=n/o*e*.4}return t.x+=t.vx,t.y+=t.vy,t.vx*=.99,t.vy*=.99,(t.x<0||t.x>r.width)&&(t.vx*=-.8,t.x=Math.max(0,Math.min(r.width,t.x))),(t.y<0||t.y>r.height)&&(t.vy*=-.8,t.y=Math.max(0,Math.min(r.height,t.y))),a.save(),a.globalAlpha=.8,a.beginPath(),a.arc(t.x,t.y,t.radius,0,2*Math.PI),a.fillStyle=t.color,a.fill(),a.globalAlpha=.3,a.beginPath(),a.arc(t.x,t.y,2*t.radius,0,2*Math.PI),a.fill(),a.restore(),t});n.current=t,i.current=requestAnimationFrame(s)};return s(),()=>{window.removeEventListener("resize",o),null!==i.current&&cancelAnimationFrame(i.current)}},[e,a]),(0,c.jsxs)(l,{id:"particle-playground",children:[(0,c.jsx)(y,{ref:t}),(0,c.jsxs)(d,{children:[(0,c.jsx)(h,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:"Interactive Particle System"}),(0,c.jsx)(u,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:"Move your mouse around to interact with the particles. Watch as they respond to your cursor with realistic physics, attraction forces, and beautiful trails."})]}),(0,c.jsx)(m,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:2},children:"\ud83c\udfae Move your mouse to interact with particles"})]})}},948:(t,e,i)=>{i.d(e,{c:()=>n});var r=i(43);const n=()=>{const[t,e]=(0,r.useState)({x:0,y:0}),i=(0,r.useCallback)((t,i)=>{e({x:t,y:i})},[]),n=(0,r.useCallback)(t=>{i(t.clientX,t.clientY)},[i]),a=(0,r.useCallback)(t=>{if(t.touches.length>0){const e=t.touches[0];i(e.clientX,e.clientY)}},[i]);return(0,r.useEffect)(()=>{let t;const e=e=>{t&&clearTimeout(t),t=setTimeout(()=>n(e),16)},i=e=>{t&&clearTimeout(t),t=setTimeout(()=>a(e),16)};return window.addEventListener("mousemove",e),window.addEventListener("touchmove",i),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",i),t&&clearTimeout(t)}},[n,a]),t}}}]);
//# sourceMappingURL=728.a55fd518.chunk.js.map