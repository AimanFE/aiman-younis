"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[260],{260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(43),i=n(464),a=n(487),o=n(843),s=n(579);const l=i.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${e=>e.theme.backgroundSecondary};
`,c=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,d=(0,i.Ay)(a.P.h2)`
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
`,p=i.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,u=(0,i.Ay)(a.P.div)`
  background: #1a1f36;
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.border};
  box-shadow: ${e=>e.theme.cardShadow};
  height: 400px;
  display: flex;
  flex-direction: column;
`,m=i.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.border};
  margin-bottom: 1rem;
`,h=i.Ay.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.color};
`,y=i.Ay.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #e2e8f0;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`,f=(0,i.Ay)(a.P.div).withConfig({shouldForwardProp:e=>"delay"!==e})`
  margin-bottom: 0.5rem;
  
  .keyword { color: #667eea; }
  .string { color: #f6ad55; }
  .function { color: #4299e1; }
  .comment { color: #a0aec0; font-style: italic; }
  .number { color: #f093fb; }
`,g=(0,i.Ay)(a.P.div)`
  background: ${e=>e.theme.background};
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${e=>e.theme.border};
  box-shadow: ${e=>e.theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  position: relative;
  overflow: hidden;
`,b=(0,i.Ay)(a.P.div).attrs(e=>({style:{width:`${e.size}px`,height:`${e.size}px`,background:e.color,left:`${e.x}%`,top:`${e.y}%`}}))`
  position: absolute;
  border-radius: 50%;
`,x=()=>{const{ref:e,inView:t}=(0,o.Wx)({threshold:.1,triggerOnce:!0}),[n,i]=(0,r.useState)(0),[a,x]=(0,r.useState)(!1),v=(0,r.useMemo)(()=>["// Creating beautiful animations with React",'const <span class="function">createParticles</span> = () => {','  <span class="keyword">const</span> particles = [];','  <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < <span class="number">50</span>; i++) {',"    particles.push({",'      x: <span class="function">Math.random</span>() * <span class="number">100</span>,','      y: <span class="function">Math.random</span>() * <span class="number">100</span>,','      color: <span class="string">`hsl($&#123;Math.random() * 360&#125;, 70%, 60%)`</span>,','      size: <span class="function">Math.random</span>() * <span class="number">20</span> + <span class="number">10</span>',"    });","  }",'  <span class="keyword">return</span> particles;',"};","",'<span class="comment">// This code generates the animation you see \u2192</span>'],[]);(0,r.useEffect)(()=>{if(!t)return;const e=setInterval(()=>{n<v.length&&i(e=>e+1)},800);return()=>clearInterval(e)},[t,n,v]),(0,r.useEffect)(()=>{if(!t)return;const e=setTimeout(()=>{x(!0)},2e3);return()=>clearTimeout(e)},[t]);const w=(0,r.useMemo)(()=>Array.from({length:8},(e,t)=>({id:t,x:80*Math.random(),y:80*Math.random(),size:20*Math.random()+10,color:`hsl(${360*Math.random()}, 70%, 60%)`})),[]);return(0,s.jsx)(l,{id:"code-art",ref:e,children:(0,s.jsxs)(c,{children:[(0,s.jsx)(d,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:"Code Meets Art"}),(0,s.jsxs)(p,{children:[(0,s.jsxs)(u,{initial:{opacity:0,x:-50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.3},children:[(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{color:"#ff5f57"}),(0,s.jsx)(h,{color:"#ffbd2e"}),(0,s.jsx)(h,{color:"#28ca42"}),(0,s.jsx)("span",{style:{marginLeft:"1rem",color:"#a0aec0",fontSize:"0.9rem"},children:"particle-animation.js"})]}),(0,s.jsx)(y,{children:v.slice(0,n).map((e,t)=>(0,s.jsx)(f,{delay:.1*t,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.1*t},dangerouslySetInnerHTML:{__html:e}},t))})]}),(0,s.jsx)(g,{initial:{opacity:0,x:50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.5},children:w.map((e,t)=>(0,s.jsx)(b,{color:e.color,size:e.size,x:e.x,y:e.y,initial:{scale:0,opacity:0},animate:a?{scale:1,opacity:1,x:[e.x,e.x+20,e.x-10,e.x],y:[e.y,e.y-15,e.y+10,e.y]}:{},transition:{duration:2,delay:.1*t,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}},e.id))})]})]})})}},843:(e,t,n)=>{n.d(t,{Wx:()=>u});var r=n(43),i=Object.defineProperty,a=(e,t,n)=>((e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),o=new Map,s=new WeakMap,l=0,c=void 0;function d(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(n=e.root,n?(s.has(n)||(l+=1,s.set(n,l.toString())),s.get(n)):"0"):e[t]}`;var n}).toString()}function p(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:s}=function(e){const t=d(e);let n=o.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver(t=>{t.forEach(t=>{var n;const a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach(e=>{e(a,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},o.set(t,n)}return n}(n),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),o.delete(i))}}r.Component;function u(){let{threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[m,h]=r.useState(null),y=r.useRef(d),[f,g]=r.useState({inView:!!l,entry:void 0});y.current=d,r.useEffect(()=>{if(s||!m)return;let r;return r=p(m,(e,t)=>{g({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&o&&r&&(r(),r=void 0)},{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},c),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,m,a,i,o,s,n,c,t]);const b=null==(u=f.entry)?void 0:u.target,x=r.useRef(void 0);m||!b||o||s||x.current===b||(x.current=b,g({inView:!!l,entry:void 0}));const v=[h,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}}}]);
//# sourceMappingURL=260.0c9dcfa6.chunk.js.map