"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[196],{196:(e,i,t)=>{t.r(i),t.d(i,{default:()=>c});t(43);var a=t(464),r=t(487),o=t(421),s=t(579);const n=(0,a.Ay)(r.P.div)`
  position: fixed;
  top: 50%;
  right: 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 2rem;
    right: 1rem;
  }
`,d=(0,a.Ay)(r.P.button).withConfig({shouldForwardProp:e=>"isDark"!==e})`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${e=>e.theme.glassBg};
  backdrop-filter: ${e=>e.theme.glassBackdrop};
  border: 1px solid ${e=>e.theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${e=>e.theme.cardShadow};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  }
`,l=(0,a.Ay)(r.P.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,c=()=>{const{theme:e,toggleTheme:i}=(0,o.D)(),t="dark"===e;return(0,s.jsx)(n,{initial:{opacity:0,scale:.8,x:100},animate:{opacity:1,scale:1,x:0},transition:{duration:.8,delay:1.5},children:(0,s.jsx)(d,{isDark:t,onClick:i,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:17},children:(0,s.jsx)(l,{initial:{rotate:-180,opacity:0},animate:{rotate:0,opacity:1},transition:{duration:.3},children:t?"\u263d":"\u2600"},e)})})}}}]);
//# sourceMappingURL=196.f5fa4a74.chunk.js.map