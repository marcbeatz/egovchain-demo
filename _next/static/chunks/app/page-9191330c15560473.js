(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8683:(e,t,s)=>{Promise.resolve().then(s.bind(s,6294)),Promise.resolve().then(s.bind(s,834)),Promise.resolve().then(s.bind(s,8326)),Promise.resolve().then(s.bind(s,7392)),Promise.resolve().then(s.bind(s,8829)),Promise.resolve().then(s.bind(s,5169)),Promise.resolve().then(s.bind(s,7104)),Promise.resolve().then(s.bind(s,8742)),Promise.resolve().then(s.bind(s,2006)),Promise.resolve().then(s.bind(s,4769)),Promise.resolve().then(s.bind(s,6958)),Promise.resolve().then(s.bind(s,8961)),Promise.resolve().then(s.bind(s,5877)),Promise.resolve().then(s.bind(s,4214)),Promise.resolve().then(s.bind(s,4638)),Promise.resolve().then(s.bind(s,5256)),Promise.resolve().then(s.bind(s,18)),Promise.resolve().then(s.bind(s,3346)),Promise.resolve().then(s.bind(s,2205)),Promise.resolve().then(s.t.bind(s,7970,23)),Promise.resolve().then(s.t.bind(s,4839,23))},3346:(e,t,s)=>{"use strict";s.d(t,{default:()=>w});var r=s(5155),a=s(4085),i=s(2115),o=s(9310),l=s(1027),n=s(767),d=s(9602);let c=o.bL,u=o.l9;o.bm;let m=o.ZL,h=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.hJ,{className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...a,ref:t})});h.displayName=o.hJ.displayName;let f=(0,l.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),g=i.forwardRef((e,t)=>{let{side:s="right",className:a,children:i,...l}=e;return(0,r.jsxs)(m,{children:[(0,r.jsx)(h,{}),(0,r.jsxs)(o.UC,{ref:t,className:(0,d.cn)(f({side:s}),a),...l,children:[i,(0,r.jsxs)(o.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(n.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});g.displayName=o.UC.displayName;let b=i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.hE,{ref:t,className:(0,d.cn)("text-lg font-semibold text-foreground",s),...a})});b.displayName=o.hE.displayName,i.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.VY,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",s),...a})}).displayName=o.VY.displayName;var x=s(6710),v=s(7396);let p=e=>{let{href:t,children:s,className:a="",onClick:o}=e,[l,n]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=t.replace("#",""),s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?n(!0):n(!1)})},{threshold:.5,rootMargin:"-64px 0px 0px 0px"}),r=document.getElementById(e);return r&&s.observe(r),()=>s.disconnect()},[t]);let d="function"==typeof a?a({isActive:l}):a;return(0,r.jsx)(v.default,{href:t,className:d,onClick:o,children:s})};var j=s(5565);let N={src:"/egovchain-demo//_next/static/media/egovchain_logo.41e35104.svg",height:24,width:112,blurWidth:0,blurHeight:0},y=()=>{let[e,t]=(0,i.useState)({isScrolled:!1,scrollTop:0});return(0,i.useEffect)(()=>{let e=document.querySelector(".scrollable-container");if(!e){console.log("No scrollable container found");return}let s=()=>{let s=e.scrollTop;t({isScrolled:s>0,scrollTop:s})};return e.addEventListener("scroll",s,{passive:!0}),()=>{e.removeEventListener("scroll",s)}},[]),e},w=()=>{let[e,t]=(0,i.useState)(!1),{isScrolled:s}=y(),o=[{title:"Home",href:"#home"},{title:"About Us",href:"#about"},{title:"Benefits",href:"#benefits"},{title:"Highlights",href:"#highlights"},{title:"Contact Us",href:"#contact"},{title:"Developers",href:"/developers"}];return(0,r.jsx)("header",{className:"fixed top-0 w-full z-50 transition-all duration-300 ".concat(s?"bg-background/50 backdrop-blur-md border-b":"bg-transparent"),children:(0,r.jsx)("div",{className:"container mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(v.default,{href:"/",children:(0,r.jsx)(j.default,{src:N,alt:"eGovChain Logo",width:130,height:110})})}),(0,r.jsx)("nav",{className:"hidden md:flex items-center gap-6",children:o.map(e=>(0,r.jsx)(p,{href:e.href,className:e=>{let{isActive:t}=e;return"\n                  text-sm font-medium transition-colors hover:text-primary relative py-2\n                  ".concat(t?"text-custom-blue":"","\n                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full \n                  after:bg-custom-blue after:transition-transform after:duration-300\n                  after:scale-x-0 after:origin-left\n                  ").concat(t?"after:scale-x-100":"","\n                ")},children:e.title},e.title))}),(0,r.jsx)("div",{className:"hidden md:flex items-center",children:(0,r.jsx)(a.$,{size:"sm",className:"rounded-full bg-custom-blue hover:bg-custom-blue/80",children:"Get Started"})}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsxs)(c,{open:e,onOpenChange:t,children:[(0,r.jsx)(u,{asChild:!0,children:(0,r.jsx)(a.$,{variant:"ghost",size:"icon",children:(0,r.jsx)(x.A,{className:"h-6 w-6"})})}),(0,r.jsxs)(g,{side:"right",children:[(0,r.jsx)(b,{className:"sr-only",children:"Navigation Menu"}),(0,r.jsxs)("nav",{className:"flex flex-col gap-4 mt-6",children:[o.map(e=>(0,r.jsx)(p,{href:e.href,className:e=>{let{isActive:t}=e;return"\n                        text-sm font-medium transition-colors hover:text-custom-blue\n                        ".concat(t?"text-custom-blue underline":"","\n                      ")},onClick:()=>t(!1),children:e.title},e.title)),(0,r.jsx)(a.$,{className:"mt-2 rounded-full bg-custom-blue",children:"Get Started"})]})]})]})})]})})})}},18:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var r=s(5155),a=s(7711),i=s(2115);let o=(0,a.default)(()=>Promise.all([s.e(66),s.e(223)]).then(s.t.bind(s,6223,23)),{loadableGenerated:{webpack:()=>[6223]},ssr:!1,loading:()=>(0,r.jsx)("div",{children:"Loading..."})});function l(e){let{animationData:t,loop:s=!0,autoplay:a=!0,className:l,style:n,onClick:d}=e,[c,u]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{u(!0)},[]),c)?(0,r.jsx)(o,{animationData:t,loop:s,autoplay:a,className:l,style:n,onClick:d}):null}},2205:(e,t,s)=>{"use strict";s.d(t,{default:()=>F});var r=s(5155),a=s(2679),i=s(9606),o=s(3415),l=s(4085),n=s(2115),d=s(9602);let c=n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,d.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...a})});c.displayName="Card",n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",s),...a})}).displayName="CardHeader",n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,d.cn)("text-2xl font-semibold leading-none tracking-tight",s),...a})}).displayName="CardTitle",n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",s),...a})}).displayName="CardDescription";let u=n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,d.cn)("p-6 pt-0",s),...a})});u.displayName="CardContent",n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,d.cn)("flex items-center p-6 pt-0",s),...a})}).displayName="CardFooter";var m=s(2317),h=s(6195);let f=(0,s(1027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(h.b,{ref:t,className:(0,d.cn)(f(),s),...a})});g.displayName=h.b.displayName;let b=i.Op,x=n.createContext({}),v=e=>{let{...t}=e;return(0,r.jsx)(x.Provider,{value:{name:t.name},children:(0,r.jsx)(i.xI,{...t})})},p=()=>{let e=n.useContext(x),t=n.useContext(j),{getFieldState:s,formState:r}=(0,i.xW)(),a=s(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...a}},j=n.createContext({}),N=n.forwardRef((e,t)=>{let{className:s,...a}=e,i=n.useId();return(0,r.jsx)(j.Provider,{value:{id:i},children:(0,r.jsx)("div",{ref:t,className:(0,d.cn)("space-y-2",s),...a})})});N.displayName="FormItem";let y=n.forwardRef((e,t)=>{let{className:s,...a}=e,{error:i,formItemId:o}=p();return(0,r.jsx)(g,{ref:t,className:(0,d.cn)(i&&"text-destructive",s),htmlFor:o,...a})});y.displayName="FormLabel";let w=n.forwardRef((e,t)=>{let{...s}=e,{error:a,formItemId:i,formDescriptionId:o,formMessageId:l}=p();return(0,r.jsx)(m.DX,{ref:t,id:i,"aria-describedby":a?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!a,...s})});w.displayName="FormControl",n.forwardRef((e,t)=>{let{className:s,...a}=e,{formDescriptionId:i}=p();return(0,r.jsx)("p",{ref:t,id:i,className:(0,d.cn)("text-sm text-muted-foreground",s),...a})}).displayName="FormDescription";let _=n.forwardRef((e,t)=>{let{className:s,children:a,...i}=e,{error:o,formMessageId:l}=p(),n=o?String(null==o?void 0:o.message):a;return n?(0,r.jsx)("p",{ref:t,id:l,className:(0,d.cn)("text-sm font-medium text-destructive",s),...i,children:n}):null});_.displayName="FormMessage";let S=n.forwardRef((e,t)=>{let{className:s,type:a,...i}=e;return(0,r.jsx)("input",{type:a,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...i})});S.displayName="Input";let k=n.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...a})});k.displayName="Textarea";let P=0,C=new Map,E=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),H({type:"REMOVE_TOAST",toastId:e})},1e6);C.set(e,t)},R=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?E(s):e.toasts.forEach(e=>{E(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},T=[],I={toasts:[]};function H(e){I=R(I,e),T.forEach(e=>{e(I)})}var W=s(1726);let A=o.Ik({name:o.Yj().min(2,{message:"Name must be at least 2 characters."}),email:o.Yj().email({message:"Please enter a valid email address."}),subject:o.Yj().min(5,{message:"Subject must be at least 5 characters."}),message:o.Yj().min(10,{message:"Message must be at least 10 characters."})}),F=()=>{let e=(0,i.mN)({resolver:(0,a.u)(A),defaultValues:{name:"",email:"",subject:"",message:""}});return(0,r.jsx)(c,{className:"w-full max-w-xl md:max-w-md p-5",children:(0,r.jsx)(u,{className:"pt-5",children:(0,r.jsx)(b,{...e,children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit(function(t){console.log(t),function(e){let{...t}=e,s=(P=(P+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>H({type:"DISMISS_TOAST",toastId:s});H({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}})}({title:"Message sent successfully!",description:"We will get back to you soon."}),e.reset()}),className:"space-y-6",children:[(0,r.jsx)(v,{control:e.control,name:"name",render:e=>{let{field:t}=e;return(0,r.jsxs)(N,{children:[(0,r.jsx)(y,{children:"Name"}),(0,r.jsx)(w,{children:(0,r.jsx)(S,{className:"border border-custom-light active:border-custom-blue",placeholder:"Your name",...t})}),(0,r.jsx)(_,{})]})}}),(0,r.jsx)(v,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,r.jsxs)(N,{children:[(0,r.jsx)(y,{children:"Email Address"}),(0,r.jsx)(w,{children:(0,r.jsx)(S,{className:"border border-custom-light active:border-custom-blue",placeholder:"your.email@example.com",...t})}),(0,r.jsx)(_,{})]})}}),(0,r.jsx)(v,{control:e.control,name:"message",render:e=>{let{field:t}=e;return(0,r.jsxs)(N,{children:[(0,r.jsx)(y,{children:"Write your message"}),(0,r.jsx)(w,{children:(0,r.jsx)(k,{rows:6,placeholder:"Your message here...",className:"resize-none border-custom-light active:border-custom-blue",...t})}),(0,r.jsx)(_,{})]})}}),(0,r.jsxs)(l.$,{type:"submit",className:"bg-custom-blue text-white hover:bg-custom-blue/80 rounded-full",children:["Send Message",(0,r.jsx)(W.A,{className:"h-6 w-6"})]})]})})})})}},4085:(e,t,s)=>{"use strict";s.d(t,{$:()=>d});var r=s(5155),a=s(2115),i=s(2317),o=s(1027),l=s(9602);let n=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:s,variant:a,size:o,asChild:d=!1,...c}=e,u=d?i.DX:"button";return(0,r.jsx)(u,{className:(0,l.cn)(n({variant:a,size:o,className:s})),ref:t,...c})});d.displayName="Button"},9602:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var r=s(3463),a=s(9795);function i(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.QP)((0,r.$)(t))}},6294:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/bg_header.91caee2c.svg",height:944,width:1512,blurWidth:0,blurHeight:0}},834:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/bg_light_blue.76b2f446.svg",height:723,width:1512,blurWidth:0,blurHeight:0}},8326:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/dict_logo_light.01b0fad2.svg",height:67,width:134,blurWidth:0,blurHeight:0}},7392:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/egovchain_logo_light.c1dfe26f.svg",height:109,width:508,blurWidth:0,blurHeight:0}},8829:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/egovchain_logo_semi_light.57deda42.svg",height:33,width:149,blurWidth:0,blurHeight:0}},5169:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/icon_blockchain.6097abf8.svg",height:72,width:72,blurWidth:0,blurHeight:0}},7104:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/icon_encryption.ff060c2c.svg",height:60,width:61,blurWidth:0,blurHeight:0}},8742:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/icon_government.5763c4cb.svg",height:72,width:73,blurWidth:0,blurHeight:0}},2006:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/icon_key.1c09b0d2.svg",height:45,width:46,blurWidth:0,blurHeight:0}},4769:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/icon_security.30ddd368.svg",height:73,width:73,blurWidth:0,blurHeight:0}},6958:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/icon_stopwatch.60e99783.svg",height:72,width:72,blurWidth:0,blurHeight:0}},8961:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/laptop_egov.238ceb1b.svg",height:310,width:386,blurWidth:0,blurHeight:0}},5877:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/laptop_egovdx.8c2939fd.svg",height:310,width:386,blurWidth:0,blurHeight:0}},4214:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/laptop_national_id.f522ae57.svg",height:310,width:386,blurWidth:0,blurHeight:0}},4638:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/lines_boxes.b11a3c53.svg",height:800,width:570,blurWidth:0,blurHeight:0}},5256:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r={src:"/egovchain-demo//_next/static/media/republika_logo.dc144c3c.svg",height:175,width:160,blurWidth:0,blurHeight:0}}},e=>{var t=t=>e(e.s=t);e.O(0,[800,441,517,358],()=>t(8683)),_N_E=e.O()}]);