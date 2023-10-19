import{j as e,R as c,r as a}from"./index-bb640d5c.js";import{n as d}from"./index.browser-7e542916.js";const j=[{year:"2018",description:"Вёрстка? Не, не слышал...",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"})})},{year:"2020",description:"А прикольная штука - React...",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"})})},{year:"2021",description:"Могу-у-у-у...!)",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},{year:"Настоящее время",description:"Чем дальше в лес - тем больше дров",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"})})}];function g(){const[s,r]=c.useState(0),[n,o]=c.useState(!1),[i,h]=c.useState(!1),p=()=>!n&&r(t=>t+1),x=()=>!i&&r(t=>t-1),m=()=>j.map((t,l)=>e.jsxs(a.Step,{onClick:()=>r(l),className:"cursor-pointer bg-gray-300 dark:bg-gray-700",activeClassName:"dark:bg-white dark:text-black",completedClassName:"dark:bg-white dark:text-black",children:[s>=l&&t.icon,s>=l&&e.jsxs("div",{className:"absolute top-14 text-center sm:w-32 lg:w-40",children:[e.jsx(a.Typography,{variant:"h6",className:"text-color",children:t.year}),e.jsx(a.Typography,{className:"text-color w-full px-2 font-normal",children:t.description})]})]},d()));return e.jsxs("div",{className:"container overflow-x-hidden px-6 md:px-14",children:[e.jsx(a.Typography,{variant:"h2",className:"text-color my-10",children:"Это, прям, ну совсем если коротко:"}),e.jsx(a.Stepper,{activeStep:s,isLastStep:t=>o(t),isFirstStep:t=>h(t),className:"dark:text-green-400",lineClassName:"dark:bg-gray-800",activeLineClassName:"dark:bg-white",children:m()}),e.jsxs("div",{className:"mt-52 flex justify-between sm:mt-40 lg:mt-32",children:[e.jsx(a.Button,{onClick:x,disabled:i,className:"bg-btn",children:"Назад"}),e.jsx(a.Button,{onClick:p,disabled:n,className:"bg-btn",children:"Вперёд"})]})]})}const u=[{question:"Как вы оцениваете свой уровень?",answer:"Если брать общепринятую градацию, то - Middle"},{question:"Могут ли вас мобилизовать (призвать) в ВС РФ?",answer:"Теоретически в ВС РФ могут мобилизовать всех имеющих военно-учётную специальность и подходящих по состоянию здоровья. Срочная служба мне не грозит, а моя военно-учётная специальность с очень высокой степенью вероятности не понадобится ни на СВО, ни в каких других локальных конфликтах."},{question:"На какую заработную плату вы расчитываете?",answer:"Я считаю, что мои знания и навыки позволят мне начать минимум с 90 т.р. и вы в этом убедитесь"},{question:"Готовы ли вы работать в офисе?",answer:"Если офис - в шаговой доступности, считаю более рациональным тратить время на работу, чем на дорогу и утренние сборы. Вместе с тем, я не против посещений офиса в принципе, если это действительно необходимо."},{question:"Приходилось ли вам работать в команде?",answer:"Да, я работал в нескольких командах разработчиков. Самая большая - два фронта, два бэка, дизайнер, ну и продакт-менеджер (куда уж без него))."}];function v({id:s,open:r}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`${s===r?"rotate-180":""} h-5 w-5 transition-transform`,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function y(){const[s,r]=c.useState(0),n=o=>r(s===o?0:o);return e.jsxs(e.Fragment,{children:[e.jsx(a.Typography,{variant:"h2",className:"text-color my-10",children:"Меня часто спрашивают:"}),u.map((o,i)=>e.jsxs(a.Accordion,{open:s===i+1,icon:e.jsx(v,{id:i+1,open:s}),children:[e.jsx(a.AccordionHeader,{className:`text-color hover:text-red-500 ${s===i+1&&"text-green-500"}`,onClick:()=>n(i+1),children:o.question}),e.jsx(a.AccordionBody,{className:"text-color",children:o.answer})]},d()))]})}function w(){return e.jsxs("div",{className:"my-10",children:[e.jsx(a.Typography,{variant:"paragraph",className:"text-color indent-10",children:"В 2018 году я (до этого даже не задумывался - как это?) заинтересовался механизмом создания, функционирования и поддержки сайтов. Вникнув в суть - решил обрести ещё одну профессию."}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color indent-10",children:"Понимая, что путь самоучки тернист и не всегда по прямой - решил обучаться в Skillbox (не реклама)). В данной школе успешно окончил следующие курсы:"}),e.jsxs("ul",{className:"text-color indent-10",children:[e.jsx("li",{children:"- вёрстка;"}),e.jsx("li",{children:"- продвинутая вёрстка;"}),e.jsx("li",{children:"- JavaScript;"}),e.jsx("li",{children:"- продвинутый JavaScript;"}),e.jsx("li",{children:"- React."})]}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color indent-10",children:"Начал проходить курсы по Node.js и PHP, но пока поставил на паузу, столкнувшись с громадным потоком информации. Решил углубиться во фронт, чтобы стать действительно хорошим специалистом в этой области, естественно, с дальнейшим изучением и бэка."}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color indent-10",children:'Начал брать заказы на фрилансе. Проекты, над которыми я работал, различались по стеку. Были проекты с "чистой" вёрсткой, бывали со специфической (для телевизоров), были проекты на "ванильном" JS, приходилось плотно работать с канвасом, и, конечно, (куда уж без них) были проекты с библиотеками (Ract, Next, Jest, Cypress, MUI и т.д.). Работал в командах.'}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color indent-10",children:'Что касается "soft skills" - внимательно отношусь к дедлайнам, отлично уживаюсь в коллективах, тактичен, дисциплинирован, всегда на связи. Подтверждением этому служит, в том числе, и отсутствие отрицательных отзывов на фрилансе.'})]})}function N(){return e.jsxs("div",{className:"my-10",children:[e.jsx(a.Typography,{variant:"h2",className:"text-color my-10",children:"Желательно в рабочее время по Москве:"}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color my-5 indent-10",children:"Телефон: +7-964-495-96-66"}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color my-5 indent-10",children:"Телеграмм: https://t.me/RomanN8322"}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color my-5 indent-10",children:"Почта: rommka_83@mail.ru"}),e.jsx(a.Typography,{variant:"paragraph",className:"text-color my-10 indent-10",children:"Для удобства вы можете скопировать нужный контакт, кликнув на соответствующую кнопку, после наведения курсора на крестик в правом нижнем углу."})]})}function f(){const s=[{label:"Коротко",child:e.jsx(g,{})},{label:"Подробнее",child:e.jsx(w,{})},{label:"FAQ",child:e.jsx(y,{})},{label:"Контакты",child:e.jsx(N,{})}];return e.jsxs(a.Tabs,{value:0,children:[e.jsx(a.TabsHeader,{className:"bg-gray-100",indicatorProps:{className:"bg-green-200"},children:s.map(({label:r},n)=>e.jsx(a.Tab,{value:n,children:r},n))}),e.jsx(a.TabsBody,{children:s.map(({child:r},n)=>e.jsx(a.TabPanel,{value:n,children:r},n))})]})}export{f as default};