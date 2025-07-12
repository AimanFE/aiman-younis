"use strict";(self.webpackChunkdigital_canvas_portfolio=self.webpackChunkdigital_canvas_portfolio||[]).push([[260],{260:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var s=a(43),n=a(464),o=a(487),i=a(843),r=a(579);const c=n.Ay.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: ${e=>e.theme.backgroundSecondary};
`,l=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,p=(0,n.Ay)(o.P.h2)`
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
`,d=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,m=(0,n.Ay)(o.P.div)`
  background: #1a1f36;
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid ${e=>e.theme.border};
  box-shadow: ${e=>e.theme.cardShadow};
  height: 500px;
  display: flex;
  flex-direction: column;
`,u=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.border};
  margin-bottom: 1rem;
`,y=n.Ay.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.color};
`,f=n.Ay.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,h=n.Ay.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>e.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`,x=n.Ay.div`
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #e2e8f0;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  position: relative;
`,g=(0,n.Ay)(o.P.div).withConfig({shouldForwardProp:e=>"delay"!==e})`
  margin-bottom: 0.4rem;
  position: relative;
  
  .keyword { color: #667eea; }
  .string { color: #f6ad55; }
  .function { color: #4299e1; }
  .comment { color: #a0aec0; font-style: italic; }
  .number { color: #f093fb; }
  .api { color: #48bb78; }
  .method { color: #ed8936; }
`,b=(0,n.Ay)(o.P.span)`
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: ${e=>e.color};
  margin-left: 2px;
  vertical-align: text-bottom;
`,w=(0,n.Ay)(o.P.div)`
  background: ${e=>e.theme.background};
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${e=>e.theme.border};
  box-shadow: ${e=>e.theme.cardShadow};
  height: 500px;
  position: relative;
  overflow: hidden;
`,v=(0,n.Ay)(o.P.div)`
  position: absolute;
  left: ${e=>e.x}%;
  top: ${e=>e.y}%;
  width: 80px;
  height: 80px;
  background: ${e=>e.color};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.7rem;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
`,$=(0,n.Ay)(o.P.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,k=(0,n.Ay)(o.P.circle)`
  fill: #667eea;
  filter: drop-shadow(0 0 8px #667eea);
`,j=(0,n.Ay)(o.P.div)`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${e=>"success"===e.status?"#48bb78":"warning"===e.status?"#ed8936":"#f56565"};
  box-shadow: 0 0 10px ${e=>"success"===e.status?"#48bb78":"warning"===e.status?"#ed8936":"#f56565"};
`,A=()=>{const{ref:e,inView:t}=(0,i.Wx)({threshold:.1,triggerOnce:!0}),[a,n]=(0,s.useState)(0),[o,A]=(0,s.useState)([]),[I,S]=(0,s.useState)(0),[P,M]=(0,s.useState)(!1),O=(0,s.useMemo)(()=>[{name:"Alex",color:"#667eea",initial:"A"},{name:"Sam",color:"#f093fb",initial:"S"},{name:"Jordan",color:"#48bb78",initial:"J"}],[]),V=(0,s.useMemo)(()=>["// Real-time collaboration system",'<span class="comment">// Alex is typing...</span>','<span class="keyword">const</span> <span class="api">websocket</span> = <span class="keyword">new</span> <span class="function">WebSocket</span>(<span class="string">"wss://api.example.com"</span>);',"",'<span class="comment">// Sam added API integration</span>','<span class="keyword">const</span> <span class="function">fetchUserData</span> = <span class="keyword">async</span> (userId) => {','  <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="method">fetch</span>(<span class="string">`/api/users/${userId}`</span>);','  <span class="keyword">return</span> <span class="keyword">await</span> response.<span class="method">json</span>();',"};","",'<span class="comment">// Jordan implementing error handling</span>','<span class="keyword">const</span> <span class="function">handleApiError</span> = (error) => {','  console.<span class="method">error</span>(<span class="string">"API Error:"</span>, error);','  <span class="comment">// Retry logic with exponential backoff</span>','  <span class="function">setTimeout</span>(() => <span class="function">retryRequest</span>(), <span class="number">1000</span>);',"};","",'<span class="comment">// System integration complete! \u2192</span>'],[]),R=(0,s.useMemo)(()=>[{name:"Frontend",x:15,y:20,color:"#667eea",status:"success"},{name:"API Gateway",x:35,y:20,color:"#f093fb",status:"success"},{name:"Backend Service",x:55,y:20,color:"#9f7aea",status:"success"},{name:"Auth Service",x:75,y:20,color:"#48bb78",status:"warning"},{name:"Database",x:75,y:65,color:"#ed8936",status:"success"},{name:"Cache",x:35,y:65,color:"#f6ad55",status:"success"}],[]);(0,s.useEffect)(()=>{if(!t)return;const e=setInterval(()=>{a<V.length&&(n(e=>e+1),S(e=>(e+1)%O.length))},1200);return()=>clearInterval(e)},[t,a,V,O.length]),(0,s.useEffect)(()=>{if(!t)return;const e=R.map((e,t)=>setTimeout(()=>{A(e=>[...e,R[t].name])},1e3*(t+1))),a=setTimeout(()=>{M(!0)},3e3);return()=>{e.forEach(clearTimeout),clearTimeout(a)}},[t,R]);const C=(0,s.useMemo)(()=>({step1:{from:R[0],to:R[1]},step2:{from:R[1],to:R[2]},step3:{from:R[2],to:R[3]},step4:{from:R[3],to:R[2]},step5:[{from:R[2],to:R[4]},{from:R[2],to:R[5]}]}),[R]);return(0,r.jsx)(c,{id:"code-art",ref:e,children:(0,r.jsxs)(l,{children:[(0,r.jsx)(p,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},children:"Systems in Harmony"}),(0,r.jsxs)(d,{children:[(0,r.jsxs)(m,{initial:{opacity:0,x:-50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.3},children:[(0,r.jsxs)(u,{children:[(0,r.jsxs)("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[(0,r.jsx)(y,{color:"#ff5f57"}),(0,r.jsx)(y,{color:"#ffbd2e"}),(0,r.jsx)(y,{color:"#28ca42"}),(0,r.jsx)("span",{style:{marginLeft:"1rem",color:"#a0aec0",fontSize:"0.9rem"},children:"real-time-collaboration.js"})]}),(0,r.jsx)(f,{children:O.map((e,t)=>(0,r.jsx)(h,{color:e.color,style:{opacity:t<=I?1:.3,transform:t===I?"scale(1.1)":"scale(1)",transition:"all 0.3s ease"},children:e.initial},e.name))})]}),(0,r.jsx)(x,{children:V.slice(0,a).map((e,t)=>{var s;return(0,r.jsxs)(g,{delay:.1*t,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.1*t},children:[(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e}}),t===a-1&&(0,r.jsx)(b,{color:(null===(s=O[I])||void 0===s?void 0:s.color)||"#667eea",animate:{opacity:[1,0]},transition:{duration:.8,repeat:1/0}})]},t)})})]}),(0,r.jsxs)(w,{initial:{opacity:0,x:50},animate:t?{opacity:1,x:0}:{},transition:{duration:.8,delay:.5},children:[R.map((e,t)=>(0,r.jsxs)(v,{x:e.x,y:e.y,color:e.color,initial:{scale:0,opacity:0},animate:o.includes(e.name)?{scale:1,opacity:1}:{},transition:{duration:.5,delay:.2*t},whileHover:{scale:1.1},children:[e.name,(0,r.jsx)(j,{status:e.status,animate:{scale:[1,1.2,1],opacity:[.8,1,.8]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})]},e.name)),P&&(0,r.jsxs)($,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1},children:[(0,r.jsx)(k,{r:"6",initial:{opacity:0},animate:{opacity:[0,1,1,0],cx:[`${C.step1.from.x}%`,`${C.step1.to.x}%`],cy:[`${C.step1.from.y}%`,`${C.step1.to.y}%`]},transition:{duration:8,repeat:1/0,times:[0,.05,.15,.2],ease:"easeInOut"}},"step1"),(0,r.jsx)(k,{r:"5",initial:{opacity:0},animate:{opacity:[0,0,1,1,0],cx:[`${C.step2.from.x}%`,`${C.step2.from.x}%`,`${C.step2.to.x}%`],cy:[`${C.step2.from.y}%`,`${C.step2.from.y}%`,`${C.step2.to.y}%`]},transition:{duration:8,repeat:1/0,times:[0,.15,.2,.35,.4],ease:"easeInOut"}},"step2"),(0,r.jsx)(k,{r:"4",initial:{opacity:0},animate:{opacity:[0,0,1,1,0],cx:[`${C.step3.from.x}%`,`${C.step3.from.x}%`,`${C.step3.to.x}%`],cy:[`${C.step3.from.y}%`,`${C.step3.from.y}%`,`${C.step3.to.y}%`]},transition:{duration:8,repeat:1/0,times:[0,.35,.4,.55,.6],ease:"easeInOut"}},"step3"),(0,r.jsx)(k,{r:"3",initial:{opacity:0},animate:{opacity:[0,0,1,1,0],cx:[`${C.step4.from.x}%`,`${C.step4.from.x}%`,`${C.step4.to.x}%`],cy:[`${C.step4.from.y}%`,`${C.step4.from.y}%`,`${C.step4.to.y}%`]},transition:{duration:8,repeat:1/0,times:[0,.55,.6,.7,.75],ease:"easeInOut"}},"step4"),C.step5.map((e,t)=>{const a=`${e.from.x}%`,s=`${e.from.y}%`,n=`${e.to.x}%`,o=`${e.to.y}%`;return(0,r.jsx)(k,{r:"4",initial:{opacity:0},animate:{opacity:[0,0,1,1,0],cx:[a,a,n],cy:[s,s,o]},transition:{duration:8,repeat:1/0,times:[0,.75,.8+.025*t,.9+.025*t,.95+.025*t],ease:"easeInOut"}},`step5-${t}`)})]})]})]})]})})}},843:(e,t,a)=>{a.d(t,{Wx:()=>m});var s=a(43),n=Object.defineProperty,o=(e,t,a)=>((e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a)(e,"symbol"!==typeof t?t+"":t,a),i=new Map,r=new WeakMap,c=0,l=void 0;function p(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(a=e.root,a?(r.has(a)||(c+=1,r.set(a,c.toString())),r.get(a)):"0"):e[t]}`;var a}).toString()}function d(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const n=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"===typeof a.threshold?a.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:r}=function(e){const t=p(e);let a=i.get(t);if(!a){const s=new Map;let n;const o=new IntersectionObserver(t=>{t.forEach(t=>{var a;const o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(a=s.get(t.target))||a.forEach(e=>{e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:o,elements:s},i.set(t,a)}return a}(a),c=r.get(e)||[];return r.has(e)||r.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(r.delete(e),o.unobserve(e)),0===r.size&&(o.disconnect(),i.delete(n))}}s.Component;function m(){let{threshold:e,delay:t,trackVisibility:a,rootMargin:n,root:o,triggerOnce:i,skip:r,initialInView:c,fallbackInView:l,onChange:p}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[u,y]=s.useState(null),f=s.useRef(p),[h,x]=s.useState({inView:!!c,entry:void 0});f.current=p,s.useEffect(()=>{if(r||!u)return;let s;return s=d(u,(e,t)=>{x({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&i&&s&&(s(),s=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:a,delay:t},l),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,u,o,n,i,r,a,l,t]);const g=null==(m=h.entry)?void 0:m.target,b=s.useRef(void 0);u||!g||i||r||b.current===g||(b.current=g,x({inView:!!c,entry:void 0}));const w=[y,h.inView,h.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}}}]);
//# sourceMappingURL=260.74fe6f00.chunk.js.map