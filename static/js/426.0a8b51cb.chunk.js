"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[426],{426:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});i(43);var n=i(464),r=i(487),o=i(843),a=i(579);const s=n.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${e=>e.theme.background};
`,d=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,l=(0,n.Ay)(r.P.h2)`
  font-size: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  background: ${e=>e.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,c=n.Ay.div`
  position: relative;
`,m=(0,n.Ay)(r.P.div)`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${e=>e.theme.primary};
  transform: translateX(-50%);
  transform-origin: top;
  
  @media (max-width: 768px) {
    left: 2rem;
  }
`,p=(0,n.Ay)(r.P.div).withConfig({shouldForwardProp:e=>"isLeft"!==e})`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  
  ${e=>e.isLeft?"\n    flex-direction: row;\n    text-align: left;\n  ":"\n    flex-direction: row-reverse;\n    text-align: left;\n  "}
  
  @media (max-width: 768px) {
    margin-left: 4rem;
  }
`,h=(0,n.Ay)(r.P.div)`
  flex: 1;
  background: ${e=>e.theme.glassBg};
  backdrop-filter: ${e=>e.theme.glassBackdrop};
  border: 1px solid ${e=>e.theme.border};
  border-radius: 15px;
  padding: 2rem;
  margin: 0 2rem;
  box-shadow: ${e=>e.theme.cardShadow};
  
  @media (max-width: 768px) {
    margin: 0;
  }
`,u=n.Ay.h3`
  font-size: 1.5rem;
  color: ${e=>e.theme.primary};
  margin-bottom: 0.5rem;
`,g=n.Ay.h4`
  font-size: 1.2rem;
  color: ${e=>e.theme.text};
  margin-bottom: 0.5rem;
`,f=n.Ay.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: 1rem;
  font-weight: 500;
`,y=n.Ay.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.5rem;
    color: ${e=>e.theme.textSecondary};
    position: relative;
    padding-left: 1rem;
    
    &::before {
      content: '•';
      color: ${e=>e.theme.primary};
      position: absolute;
      left: 0;
    }
  }
`,x=n.Ay.div`
  width: 20px;
  height: 20px;
  background: ${e=>e.theme.primary};
  border-radius: 50%;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 1.5rem;
  }
`,b=()=>{const{ref:e,inView:t}=(0,o.Wx)({threshold:.1,triggerOnce:!0});return(0,a.jsx)(s,{id:"experience",ref:e,children:(0,a.jsxs)(d,{children:[(0,a.jsx)(l,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:"Experience Timeline"}),(0,a.jsxs)(c,{children:[(0,a.jsx)(m,{initial:{scaleY:0},animate:t?{scaleY:1}:{},transition:{duration:1.2,delay:.5}}),[{company:"Amdocs",title:"Scrum Master & Software Engineer",period:"July 2023 - Present",description:["Led end-to-end delivery of complex custom telecom CRM project over 18 months, serving 2+ million customers","Managed cross-functional development team of 6 engineers while driving frontend architecture decisions using React & TypeScript","Bridged technical and business requirements by training customer teams on frontend interfaces and system functionality","Delivered mission-critical frontend features under tight deadlines while maintaining high code quality and system reliability"]},{company:"Amdocs",title:"Frontend Developer",period:"Dec 2021 - July 2023 | Aug 2019 - March 2021",description:["Developed scalable frontend solutions using React, Redux, and TypeScript for custom and core CRM platforms","Led end-to-end feature development from requirements analysis through deployment and customer training","Architected complex integrations between frontend components and backend services, handling high-volume data processing","Specialized in CRM client-side infrastructure development with focus on performance and user experience"]}].map((e,i)=>(0,a.jsxs)(p,{isLeft:i%2===0,initial:{opacity:0,x:i%2===0?-50:50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.3*i},children:[(0,a.jsxs)(h,{whileHover:{y:-5,rotateY:i%2===0?5:-5,scale:1.02},transition:{type:"spring",stiffness:300},children:[(0,a.jsx)(u,{children:e.company}),(0,a.jsx)(g,{children:e.title}),(0,a.jsx)(f,{children:e.period}),(0,a.jsx)(y,{children:e.description.map((e,n)=>(0,a.jsx)(r.P.li,{initial:{opacity:0,x:-20},animate:t?{opacity:1,x:0}:{},transition:{duration:.5,delay:.3*i+.1*n},children:e},n))})]}),(0,a.jsx)(x,{})]},i))]})]})})}},843:(e,t,i)=>{i.d(t,{Wx:()=>p});var n=i(43),r=Object.defineProperty,o=(e,t,i)=>((e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,s=new WeakMap,d=0,l=void 0;function c(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(d+=1,s.set(i,d.toString())),s.get(i)):"0"):e[t]}`;var i}).toString()}function m(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const r=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:o,elements:s}=function(e){const t=c(e);let i=a.get(t);if(!i){const n=new Map;let r;const o=new IntersectionObserver(t=>{t.forEach(t=>{var i;const o=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(i=n.get(t.target))||i.forEach(e=>{e(o,t)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:n},a.set(t,i)}return i}(i),d=s.get(e)||[];return s.has(e)||s.set(e,d),d.push(t),o.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(r))}}n.Component;function p(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:r,root:o,triggerOnce:a,skip:s,initialInView:d,fallbackInView:l,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var p;const[h,u]=n.useState(null),g=n.useRef(c),[f,y]=n.useState({inView:!!d,entry:void 0});g.current=c,n.useEffect(()=>{if(s||!h)return;let n;return n=m(h,(e,t)=>{y({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&a&&n&&(n(),n=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:i,delay:t},l),()=>{n&&n()}},[Array.isArray(e)?e.toString():e,h,o,r,a,s,i,l,t]);const x=null==(p=f.entry)?void 0:p.target,b=n.useRef(void 0);h||!x||a||s||b.current===x||(b.current=x,y({inView:!!d,entry:void 0}));const v=[u,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}}}]);
//# sourceMappingURL=426.0a8b51cb.chunk.js.map