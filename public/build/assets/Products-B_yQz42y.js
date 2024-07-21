import{r as u,j as e,b as y,Y as k}from"./app-WTHt1LSi.js";import{M as w}from"./Modal-C0JQ37IZ.js";import{F as b,a as C,b as P}from"./index-CRY0guS2.js";import{a as t,I as x,b as f,F as S,S as v}from"./Table-D1yEHtpt.js";import{B as h,A}from"./AuthenticatedLayout-NK43SbJu.js";import{s as I}from"./index-D_D5JtQz.js";import{S as F}from"./Skeleton-NKsi4xZD.js";import"./transition-D-4lsDo_.js";import"./useForceUpdate-DnUyU4Vs.js";function L({open:o,setOpen:m,datasource:j,setDataSource:r,categories:l}){const i=u.useRef(null),p=async c=>{await y.post(route("product.add.new"),c).then(n=>{r(n.data.products),i.current.resetFields(),I.success("Producto Adiciona com sucesso")}).catch(n=>{})};return e.jsx(e.Fragment,{children:e.jsxs(w,{show:o,onClose:()=>m(!1),children:[e.jsx("p",{className:"px-8 py-4 font-bold text-lg",children:"Adicionar Novo Producto"}),e.jsxs(t,{className:"mx-8 px-lg-4 py-4",layout:"vertical",ref:i,onFinish:p,children:[e.jsx(t.Item,{label:"Nome do producto",name:"name",rules:[{required:!0,message:"Indique um nome"}],children:e.jsx(x,{allowClear:!0,placeholder:"nome do producto"})}),e.jsx(t.Item,{label:"Categoria",name:"categorie",rules:[{required:!0,message:"Indique uma categoria"}],children:e.jsx(f,{placeholder:"Categoria",children:l==null?void 0:l.map((c,n)=>e.jsx(f.Option,{value:c.id,children:c.name},n))})}),e.jsx(t.Item,{label:"Preço",name:"price",children:e.jsx(x,{allowClear:!0,placeholder:"nPreço"})}),e.jsx(t.Item,{label:"Descrição",name:"descriptions",children:e.jsx(x.TextArea,{allowClear:!0,placeholder:"Descrição"})}),e.jsx(t.Item,{children:e.jsxs("div",{className:"flex justify-between px-8 py-4",children:[e.jsx(h,{icon:e.jsx(b,{}),onClick:()=>{m(!1)},children:"Fechar"}),e.jsx(h,{icon:e.jsx(C,{}),className:"bg-green-400 text-white",onClick:()=>{i.current.submit()},children:"Salvar & Adiconar"})]})})]})]})})}function q({open:o,setOpen:m,setDataSource:j,categories:r,selectedProduct:l={}}){const i=u.useRef(null),[p,c]=u.useState(!1),n=async s=>{const d=r.find(a=>a.id===s.categorie||a.name===s.categorie);s.category=d.id,s.id=l.id,await y.post(route("product.update"),s).then(a=>{j(a.data),i.current.resetFields(),I.success("Producto Actualizado com sucesso")}).catch(a=>{})},g=s=>new Promise(d=>setTimeout(d,s));return u.useEffect(()=>{if(o===!0){c(!0);const s=r.find(d=>d.id===l.category_id);l.categorie=s.name,g(700).then(()=>{c(!1)})}},[o]),e.jsx(e.Fragment,{children:e.jsxs(w,{show:o,onClose:()=>m(!1),children:[e.jsx("p",{className:"px-8 py-4 font-bold text-lg",children:"Editar Producto"}),p?e.jsx(F,{active:!0}):e.jsxs(t,{className:"mx-8 px-lg-4 py-4",layout:"vertical",ref:i,onFinish:n,initialValues:l,children:[e.jsx(t.Item,{label:"Nome do producto",name:"name",rules:[{required:!0,message:"Indique um nome"}],children:e.jsx(x,{allowClear:!0,placeholder:"nome do producto"})}),e.jsx(t.Item,{label:"Categoria",name:"categorie",rules:[{required:!0,message:"Indique uma categoria"}],children:e.jsx(f,{placeholder:"Categoria",children:r==null?void 0:r.map((s,d)=>e.jsx(f.Option,{value:s.id,children:s.name},d))})}),e.jsx(t.Item,{label:"Preço",name:"price",children:e.jsx(x,{allowClear:!0,placeholder:"nPreço"})}),e.jsx(t.Item,{label:"Descrição",name:"descriptions",children:e.jsx(x.TextArea,{allowClear:!0,placeholder:"Descrição"})}),e.jsx(t.Item,{children:e.jsxs("div",{className:"flex justify-between px-8 py-4",children:[e.jsx(h,{icon:e.jsx(b,{}),onClick:()=>{m(!1)},children:"Fechar"}),e.jsx(h,{icon:e.jsx(C,{}),className:"bg-green-400 text-white",onClick:()=>{i.current.submit()},children:"Actualizar Info"})]})})]})]})})}function Z(o){const[m,j]=u.useState(o.products),[r,l]=u.useState(o.categories),[i,p]=u.useState(!1),[c,n]=u.useState(!1),[g,s]=u.useState(null),d=[{title:"Codigo",dataIndex:"code",key:"code",render:a=>e.jsx("a",{children:a})},{title:"Nome",dataIndex:"name",key:"name",render:a=>e.jsxs("a",{children:[" ",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"})]}),a]})},{title:"Descrição ",dataIndex:"descriptions",key:"descriptions"},{title:"Preço",dataIndex:"price",key:"price"},{title:"Data de criacao",dataIndex:"created_at",key:"created_at"},{title:"Acção",key:"action",render:(a,N)=>e.jsxs(v,{size:"middle",className:"flex gap-1",children:[e.jsx(h,{type:"primary",icon:e.jsx(P,{}),onClick:()=>{n(!0),s(N)}}),e.jsx(h,{type:"primary",className:"bg-red-400",children:"🗑️"})]})}];return e.jsxs(A,{user:o.auth.user,page:"Lista de Produtos",header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Lista de Produtos"}),children:[e.jsx(k,{title:"Lista de Produtos"}),e.jsxs("div",{className:"h-screen",children:[e.jsxs("div",{className:"mb-4 flex justify-between space-x-2",children:[e.jsx(h,{type:"primary",onClick:()=>{p(!0)},children:"Adicionar No producto"}),e.jsx(x.Search,{type:"text",placeholder:"Buscar Produto",className:"w-1/2",allowClear:!0})]}),e.jsx(S,{dataSource:m,columns:d,className:"min-w-full bg-white rounded shadow"})]}),e.jsx(L,{categories:r,open:i,datasource:m,setDataSource:j,setOpen:p}),e.jsx(q,{open:c,setOpen:n,setDataSource:j,categories:r,selectedProduct:g})]})}export{Z as default};