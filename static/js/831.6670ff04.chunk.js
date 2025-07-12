"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[831],{831:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var r=i(43),o=i(464),n=i(487),a=i(546);var l=i(579);const s=(0,o.Ay)(n.P.header).withConfig({shouldForwardProp:e=>"isScrolled"!==e})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
  backdrop-filter: ${e=>e.isScrolled?"blur(20px)":"none"};
  background: ${e=>e.isScrolled?e.theme.glassBg:"transparent"};
  border-bottom: ${e=>e.isScrolled?`1px solid ${e.theme.border}`:"none"};
`,d=o.Ay.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`,c=(0,o.Ay)(n.P.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${e=>e.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`,h=o.Ay.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,p=(0,o.Ay)(n.P.a)`
  color: ${e=>e.theme.text};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${e=>e.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`,m=(0,o.Ay)(n.P.button)`
  display: none;
  background: none;
  color: ${e=>e.theme.text};
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`,u=(0,o.Ay)(n.P.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${e=>e.theme.glassBg};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${e=>e.theme.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`,f=(0,o.Ay)(n.P.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: ${e=>e.theme.primaryGradient};
  border-radius: 0 2px 2px 0;
`,x=()=>{const[e,t]=(0,r.useState)(!1),[i,o]=(0,r.useState)(!1),n=(()=>{const[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=!1;const i=()=>{const i=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100;t(Math.min(i,100)),e=!1},r=()=>{e||(requestAnimationFrame(i),e=!0)};return window.addEventListener("scroll",r,{passive:!0}),i(),()=>{window.removeEventListener("scroll",r)}},[]),e})();(0,r.useEffect)(()=>{let e=!1;const i=()=>{t(window.scrollY>50),e=!1},r=()=>{e||(requestAnimationFrame(i),e=!0)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const x=[{href:"#hero",label:"Home"},{href:"#skills",label:"Skills"},{href:"#experience",label:"Experience"},{href:"#code-art",label:"Systems"},{href:"#contact",label:"Contact"}],b=e=>{const t=document.querySelector(e);t&&(t.scrollIntoView({behavior:"smooth"}),o(!1))};return(0,l.jsxs)(s,{isScrolled:e,initial:{y:-100},animate:{y:0},transition:{duration:.6},children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(c,{onClick:()=>b("#hero"),whileHover:{scale:1.05},children:"AY"}),(0,l.jsx)(h,{children:x.map((e,t)=>(0,l.jsx)(p,{href:e.href,onClick:t=>{t.preventDefault(),b(e.href)},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},whileHover:{y:-2},children:e.label},e.href))}),(0,l.jsx)(m,{onClick:()=>o(!i),whileTap:{scale:.95},children:"\u2630"})]}),(0,l.jsx)(a.N,{children:i&&(0,l.jsx)(u,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:x.map(e=>(0,l.jsx)(p,{href:e.href,onClick:t=>{t.preventDefault(),b(e.href)},children:e.label},e.href))})}),(0,l.jsx)(f,{style:{width:`${n}%`},initial:{width:0}})]})}}}]);
//# sourceMappingURL=831.6670ff04.chunk.js.map