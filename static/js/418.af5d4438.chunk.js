"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[418],{418:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});i(43);var r=i(464),n=i(487),o=i(843),a=i(579);const s=r.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${e=>e.theme.backgroundSecondary};
`,l=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,d=(0,r.Ay)(n.P.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 4rem;
  text-align: center;
  background: ${e=>e.theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`,c=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`,p=(0,r.Ay)(n.P.div)`
  background: ${e=>e.theme.glassBg};
  backdrop-filter: ${e=>e.theme.glassBackdrop};
  border: 1px solid ${e=>e.theme.border};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${e=>e.theme.cardShadow};
`,m=r.Ay.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${e=>e.theme.primary};
  text-align: center;
`,g=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`,h=(0,r.Ay)(n.P.span)`
  background: ${e=>e.theme.primaryGradient};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
`,u=r.Ay.div`
  text-align: center;
  margin-top: 3rem;
`,y=(0,r.Ay)(n.P.div)`
  background: ${e=>e.theme.glassBg};
  backdrop-filter: ${e=>e.theme.glassBackdrop};
  border: 1px solid ${e=>e.theme.border};
  border-radius: 20px;
  padding: 2rem;
  margin: 0 auto;
  max-width: 600px;
  box-shadow: ${e=>e.theme.cardShadow};
`,b=r.Ay.h3`
  color: ${e=>e.theme.accent};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`,x=r.Ay.p`
  color: ${e=>e.theme.textSecondary};
  line-height: 1.6;
`,f=()=>{const{ref:e,inView:t}=(0,o.Wx)({threshold:.2,triggerOnce:!0,rootMargin:"0px 0px -50px 0px"});return(0,a.jsx)(s,{id:"skills",ref:e,children:(0,a.jsxs)(l,{children:[(0,a.jsx)(d,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:"Frontend Mastery"}),(0,a.jsx)(c,{children:[{title:"Frontend Development",skills:["React","Next.js","TypeScript","JavaScript","HTML5","CSS3","Styled-components","Redux"]},{title:"Development Tools",skills:["Vite","Webpack","Git","npm/yarn","Jest","ESLint","React Testing Library"]},{title:"Backend & APIs",skills:["Node.js","Express","RESTful APIs","GraphQL","PostgreSQL","MongoDB","Couchbase"]},{title:"DevOps & Deployment",skills:["Docker","CI/CD","Jenkins","Kubernetes","Git"]}].map((e,i)=>(0,a.jsxs)(p,{initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2*i},whileHover:{y:-10,scale:1.02,rotateY:5},children:[(0,a.jsx)(m,{children:e.title}),(0,a.jsx)(g,{children:e.skills.map((e,r)=>(0,a.jsx)(h,{initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{},transition:{duration:.5,delay:.2*i+.05*r},whileHover:{scale:1.1,boxShadow:"0 6px 20px rgba(102, 126, 234, 0.4)"},children:e},e))})]},e.title))}),(0,a.jsx)(u,{children:(0,a.jsxs)(y,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8,delay:.8},whileHover:{scale:1.02,boxShadow:"0 15px 40px rgba(246, 173, 85, 0.2)"},children:[(0,a.jsx)(b,{children:"\ud83c\udfc6 Recognition & Frontend Excellence"}),(0,a.jsx)(x,{children:'Awarded Amdocs Certificate of Recognition as 1 of 70 company-wide recipients for "Learning, Owning, Sharing, and Leading" \u2022 5+ years delivering large-scale solutions serving millions of users with React & TypeScript expertise \u2022 Recognized for fastest company onboarding and outstanding technical performance \u2022 This portfolio demonstrates advanced frontend skills through real-world implementation'})]})})]})})}},843:(e,t,i)=>{i.d(t,{Wx:()=>m});var r=i(43),n=Object.defineProperty,o=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,s=new WeakMap,l=0,d=void 0;function c(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i}).toString()}function p(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(e){const t=c(e);let i=a.get(t);if(!i){const r=new Map;let n;const o=new IntersectionObserver(t=>{t.forEach(t=>{var i;const o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(i=r.get(t.target))||i.forEach(e=>{e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:r},a.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(n))}}r.Component;function m(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:n,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:d,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[g,h]=r.useState(null),u=r.useRef(c),[y,b]=r.useState({inView:!!l,entry:void 0});u.current=c,r.useEffect(()=>{if(s||!g)return;let r;return r=p(g,(e,t)=>{b({inView:e,entry:t}),u.current&&u.current(e,t),t.isIntersecting&&a&&r&&(r(),r=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:i,delay:t},d),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,g,o,n,a,s,i,d,t]);const x=null==(m=y.entry)?void 0:m.target,f=r.useRef(void 0);g||!x||a||s||f.current===x||(f.current=x,b({inView:!!l,entry:void 0}));const v=[h,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}}}]);
//# sourceMappingURL=418.af5d4438.chunk.js.map