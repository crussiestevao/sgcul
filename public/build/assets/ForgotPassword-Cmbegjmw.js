import{W as n,j as e,Y as d}from"./app-WTHt1LSi.js";import{G as u}from"./GuestLayout-BJWgV06F.js";import{T as c,I as x}from"./TextInput-CnZETs6I.js";import{P as p}from"./PrimaryButton-BZmiSC-G.js";function h({status:t}){const{data:a,setData:r,post:o,processing:m,errors:l}=n({email:""}),i=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:t}),e.jsxs("form",{onSubmit:i,children:[e.jsx(c,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(x,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{h as default};
