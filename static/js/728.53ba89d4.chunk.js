"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[728],{728:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var r=i(43),a=i(464),n=i(487),o=i(948),s=i(421),c=i(579);const l=a.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${t=>t.theme.background};
  position: relative;
  overflow: hidden;
`,d=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`,h=(0,a.Ay)(n.P.h2)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: ${t=>t.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,u=(0,a.Ay)(n.P.p)`
  font-size: 1.2rem;
  color: ${t=>t.theme.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,m=(0,a.Ay)(n.P.div)`
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
`,y=a.Ay.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,p=()=>{const t=(0,r.useRef)(null),e=(0,o.c)(),i=(0,r.useRef)(null),a=(0,r.useRef)([]),{theme:n}=(0,s.D)(),p=(t,e)=>({x:t,y:e,vx:4*(Math.random()-.5),vy:4*(Math.random()-.5),radius:3*Math.random()+1,color:`hsl(${360*Math.random()}, 70%, ${"light"===n?"50%":"60%"})`});return(0,r.useEffect)(()=>{const r=t.current;if(!r)return;const n=r.getContext("2d",{alpha:!1});if(!n)return;const o=()=>{r.width=window.innerWidth,r.height=window.innerHeight};o(),window.addEventListener("resize",o);for(let t=0;t<5;t++)a.current.push(p(Math.random()*r.width,Math.random()*r.height));const s=()=>{n.clearRect(0,0,r.width,r.height);const t=a.current.map(t=>{t.vx+=.2*(Math.random()-.5),t.vy+=.2*(Math.random()-.5);const i=e.x-t.x,a=e.y-t.y,o=Math.sqrt(i*i+a*a);if(o<150&&o>0){const e=(150-o)/150;t.vx+=i/o*e*.4,t.vy+=a/o*e*.4}return t.x+=t.vx,t.y+=t.vy,t.vx*=.99,t.vy*=.99,(t.x<0||t.x>r.width)&&(t.vx*=-.8,t.x=Math.max(0,Math.min(r.width,t.x))),(t.y<0||t.y>r.height)&&(t.vy*=-.8,t.y=Math.max(0,Math.min(r.height,t.y))),n.save(),n.globalAlpha=.8,n.beginPath(),n.arc(t.x,t.y,t.radius,0,2*Math.PI),n.fillStyle=t.color,n.fill(),n.globalAlpha=.3,n.beginPath(),n.arc(t.x,t.y,2*t.radius,0,2*Math.PI),n.fill(),n.restore(),t});a.current=t,i.current=requestAnimationFrame(s)};return s(),()=>{window.removeEventListener("resize",o),null!==i.current&&cancelAnimationFrame(i.current)}},[e,n]),(0,c.jsxs)(l,{id:"particle-playground",children:[(0,c.jsx)(y,{ref:t}),(0,c.jsxs)(d,{children:[(0,c.jsx)(h,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:"Interactive Particle System"}),(0,c.jsx)(u,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:"Move your mouse around to interact with the particles. Watch as they respond to your cursor with realistic physics, attraction forces, and beautiful trails."})]}),(0,c.jsx)(m,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:1,delay:2},children:"\ud83c\udfae Move your mouse to interact with particles"})]})}},948:(t,e,i)=>{i.d(e,{c:()=>a});var r=i(43);const a=()=>{const[t,e]=(0,r.useState)({x:0,y:0}),i=(0,r.useCallback)(t=>{e({x:t.clientX,y:t.clientY})},[]);return(0,r.useEffect)(()=>{let t;const e=e=>{t&&clearTimeout(t),t=setTimeout(()=>i(e),16)};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e),t&&clearTimeout(t)}},[i]),t}}}]);
//# sourceMappingURL=728.53ba89d4.chunk.js.map