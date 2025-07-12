"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[196],{196:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});i(43);var a=i(464),r=i(487),o=i(421),n=i(579);const s=(0,a.Ay)(r.P.div)`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: auto;
    bottom: 2rem;
    right: 1rem;
    transform: none;
  }
`,d=(0,a.Ay)(r.P.button).withConfig({shouldForwardProp:t=>"isDark"!==t})`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${t=>t.theme.glassBg};
  backdrop-filter: ${t=>t.theme.glassBackdrop};
  border: 1px solid ${t=>t.theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: ${t=>t.theme.cardShadow};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  }
`,l=(0,a.Ay)(r.P.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`,c=()=>{const{theme:t,toggleTheme:e}=(0,o.D)(),i="dark"===t;return(0,n.jsx)(s,{initial:{opacity:0,scale:.8,x:100},animate:{opacity:1,scale:1,x:0},transition:{duration:.8,delay:1.5},children:(0,n.jsx)(d,{isDark:i,onClick:e,whileHover:{scale:1.1},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:17},children:(0,n.jsx)(l,{initial:{rotate:-180,opacity:0},animate:{rotate:0,opacity:1},transition:{duration:.3},children:i?"\u263d":"\u2600"},t)})})}}}]);
//# sourceMappingURL=196.282d3eee.chunk.js.map