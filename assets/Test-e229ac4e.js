import{d as o,f as p,j as u,l as d,g as r,u as f,F as i,e as m,q as _,v,r as c}from"./index-9edb04f9.js";import{F as x}from"./Input-c2370a03.js";const g=o({__name:"TestInput",props:{a:{}},emits:["upadate:a"],setup(s,{emit:n}){const t=s;return(a,e)=>(m(),p(i,null,[u("div",null,d(t.a),1),r(f(x),{onUpdateValue:e[0]||(e[0]=l=>a.$emit("upadate:a",l.toString()))})],64))}}),T=o({__name:"Test",props:{a:{}},emits:["upadate:a"],setup(s,{emit:n}){const t=s;return(a,e)=>(m(),p(i,null,[u("div",null,d(t.a),1),_(u("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.a=l),type:"text"},null,512),[[v,t.a]]),r(g,{a:t.a},null,8,["a"])],64))}}),U=o({__name:"Test",setup(s){const n=c("");return(t,a)=>(m(),p(i,null,[r(T,{a:n.value,"onUpdate:a":a[0]||(a[0]=e=>n.value=e)},null,8,["a"]),_(u("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e)},null,512),[[v,n.value]])],64))}});export{U as default};
//# sourceMappingURL=Test-e229ac4e.js.map