import{j as e,r as s,a as c,R as i,L as o,O as d}from"./index-22c38e58.js";const l=(t,r)=>{navigator.clipboard.writeText(t).then(()=>{alert(r)},()=>{alert("Ошибка копирования данных")})};function h(){return e.jsx("div",{className:"fixed bottom-10 right-10 z-10 md:right-20 lg:right-28",children:e.jsxs(s.SpeedDial,{children:[e.jsx(s.SpeedDialHandler,{className:"bg-gray-800 dark:bg-gray-500",children:e.jsx(s.IconButton,{size:"lg",className:"rounded-full",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6 transition-transform group-hover:rotate-45",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})}),e.jsxs(s.SpeedDialContent,{children:[e.jsxs(s.SpeedDialAction,{className:"h-20 w-20 bg-red-300",onClick:()=>l("rommka_83@mail.ru","почта успешно скопирована в буфер"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),e.jsx(s.Typography,{color:"current",className:"text-xs font-normal",children:"Почта"})]}),e.jsxs(s.SpeedDialAction,{className:"h-20 w-20 bg-red-300",onClick:()=>l("https://t.me/RomanN8322","телеграмм успешно скопирован в буфер"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{d:"M 19.976562 3.1210938 L 19.611328 3.2695312 C 19.611328 3.2695312 6.6375504 8.5740484 2.6132812 10.267578 L 2.0019531 10.525391 L 2.0019531 12.779297 L 6.9472656 14.755859 L 8.6796875 19.996094 L 10.251953 20.005859 L 12.955078 17.720703 L 16.355469 20.996094 L 18.808594 20.996094 L 21.964844 3.875 L 19.976562 3.1210938 z M 19.646484 5.4179688 L 17.146484 18.980469 L 13.044922 15.029297 L 10.224609 17.410156 L 11 14.375 L 17.28125 8 L 17.082031 7.7988281 C 17.082031 7.7988281 10.706702 11.473998 8.0019531 13.023438 L 4.5371094 11.638672 C 9.0770415 9.7455758 18.697943 5.8058761 19.646484 5.4179688 z"})}),e.jsx(s.Typography,{color:"current",className:"text-xs font-normal",children:"Телеграмм"})]}),e.jsxs(s.SpeedDialAction,{className:"h-20 w-20 bg-red-300",onClick:()=>l("+79644959666","телефон успешно скопирован в буфер"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),e.jsx(s.Typography,{color:"current",className:"text-xs font-normal",children:"Телефон"})]})]})]})})}const m=window==null?void 0:window.matchMedia("(prefers-color-scheme: dark)").matches,x=m?"dark":"light",p=()=>{const[t,r]=c.useState(localStorage.getItem("app-theme")||x);return c.useLayoutEffect(()=>{if(t==="dark"){document.documentElement.classList.add("dark"),localStorage.setItem("app-theme",t);return}document.documentElement.classList.remove("dark"),localStorage.setItem("app-theme",t)},[t]),{theme:t,setTheme:r}};function g(){const{theme:t,setTheme:r}=p(),a=()=>{r("light")},n=()=>{r("dark")};return t==="dark"?e.jsx(s.Button,{className:"bg-transparent text-gray-500",onClick:a,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})})}):e.jsx(s.Button,{className:"bg-transparent text-gray-800",onClick:n,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})})}function u({children:t}){const[r,a]=i.useState(!1);i.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&a(!1))},[]);const n=e.jsxs("ul",{className:"mb-4 mt-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6",children:[e.jsx(s.Typography,{as:"li",variant:"small",className:"p-1 font-normal",children:e.jsx(o,{to:"/my-site/projects",className:"text-color flex items-center",onClick:()=>a(!1),children:"Проекты"})}),e.jsx(s.Typography,{as:"li",variant:"small",className:"p-1 font-normal",children:e.jsx(o,{to:"/my-site/technologies",className:"text-color flex items-center",onClick:()=>a(!1),children:"Технологии"})}),e.jsx(s.Typography,{as:"li",variant:"small",className:"p-1 font-normal",children:e.jsx(o,{to:"/my-site/about-me",className:"text-color flex items-center",onClick:()=>a(!1),children:"О себе"})})]});return e.jsxs("div",{className:"max-h-[768px] w-full overflow-scroll",children:[e.jsxs(s.Navbar,{className:"my-shadow sticky top-0 z-10 h-max max-w-full rounded-none border-transparent py-2 shadow-lg dark:bg-gray-900 lg:px-8 lg:py-4",children:[e.jsxs("div",{className:"container flex items-center justify-between",children:[e.jsx(s.Typography,{href:"#",className:"mr-4 cursor-pointer py-1.5 font-medium",children:e.jsx(o,{to:"/my-site",className:"text-color flex items-center",children:"Главная"})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"mr-4 hidden lg:block",children:n}),e.jsx(s.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-gray-800 hover:bg-transparent focus:bg-transparent active:bg-transparent dark:text-gray-500 lg:hidden",ripple:!1,onClick:()=>a(!r),children:r?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]}),e.jsx(g,{})]}),e.jsx(s.Collapse,{open:r,children:n})]}),e.jsx("div",{className:"container mx-auto py-12",children:t})]})}function j(){return e.jsx("main",{className:'bg-[url("../img/drawing.webp")] h-screen overflow-y-scroll bg-auto bg-fixed bg-right-top bg-no-repeat dark:bg-gray-900',children:e.jsx(u,{children:e.jsxs("div",{children:[e.jsx(c.Suspense,{fallback:e.jsx(s.Spinner,{color:"red",className:"fixed left-1/2 top-1/2 h-24 w-24"}),children:e.jsx(d,{})}),e.jsx(h,{})]})})})}export{j as default};
