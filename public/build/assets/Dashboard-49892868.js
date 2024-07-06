import{a as o,r as i,j as e}from"./app-f8c99a67.js";import{a as n}from"./axios-21b846bc.js";import{L as h}from"./Layout-987ad2d5.js";import{$ as p}from"./module-fbd4da63.js";/* empty css            */import"./logo-1a4f8099.js";const f=({balance:s,user_currency:l})=>{const{darkMode:t}=o(),[r,d]=i.useState(null);return i.useEffect(()=>{const a=()=>{n.get(route("frontend.crypto-data")).then(x=>{d(x.data.data)})};a();const c=setInterval(a,5e3);return()=>clearInterval(c)},[]),console.log(r),e.jsx(h,{children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:`p-3 rounded-lg flex justify-between items-center ${t?"bg-gray-900 text-white":"bg-white text-black"}`,children:[e.jsxs("div",{children:[e.jsx("h2",{className:"extra_small",children:"Balance (USDT)"}),e.jsxs("p",{className:"large font-bold",children:["$ ",s," "]}),e.jsxs("p",{className:"medium font-bold text-gray-400",children:["≈ ",parseFloat(s)*l.rate_per_usdt," ",l.symbol]})]}),e.jsx("a",{href:route("frontend.deposit"),className:`medium px-4 py-1 rounded shadow focus:outline-none ${t?"bg-yellow-500 text-gray-800 hover:bg-yellow-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:"Add Funds"})]}),e.jsxs("div",{className:`p-3 rounded-lg mt-4 ${t?"bg-gray-900 text-white":"bg-white text-black"}`,children:[e.jsx("h2",{className:"extra_small",children:"Featured CryptoCurrencies"}),r?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:`min-w-full divide-y ${t?"divide-gray-700":"divide-gray-200"}`,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:`px-6 py-3 ${t?"bg-gray-800 text-gray-300":"bg-gray-50 text-gray-500"} text-left text-xs font-medium uppercase tracking-wider`,children:"Crypto"}),e.jsx("th",{className:`px-6 py-3 ${t?"bg-gray-800 text-gray-300":"bg-gray-50 text-gray-500"} text-left text-xs font-medium uppercase tracking-wider`,children:"Price"}),e.jsx("th",{className:`px-6 py-3 ${t?"bg-gray-800 text-gray-300":"bg-gray-50 text-gray-500"} text-left text-xs font-medium uppercase tracking-wider`,children:"Action"})]})}),e.jsx("tbody",{className:`${t?"bg-gray-900 text-white":"bg-white text-black"} divide-y ${t?"divide-gray-700":"divide-gray-200"}`,children:Object.keys(r).map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap extra_small",children:r[a].display}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap extra_small",children:r[a].price}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap extra_small",children:e.jsx("button",{className:"text-yellow-600 hover:text-white",children:"Trade"})})]},a))})]})}):e.jsx("div",{className:"flex justify-center py-4",children:e.jsx(p,{height:"50",width:"50",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})]})]})})};export{f as default};