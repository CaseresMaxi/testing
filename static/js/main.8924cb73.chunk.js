(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),s=n.n(i),o=(n(10),n(11),n(12),n(0));function l(){return Object(o.jsx)("header",{className:"App-header",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"https://miel.unlam.edu.ar/vista/imagenes/logo_unlam_34.png",className:"unlam-logo",alt:"logo unlam"})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"Grupo 3"})})]})})}var r=n(3),d=n(2),u=["+","-","/","*","int","double","float",";",":","public","static","void","&&","||","<=",">=","<",">"],j={">":0,"<":0,">=":0,"<=":0,"==":0,try:0};n(14);function b(e){var t=e.code,n=e.onCodeChange;return Object(o.jsx)("div",{className:"codigo-container",children:Object(o.jsx)("textarea",{id:"code",placeholder:"codigo a evaluar",className:"codigo",value:t,onChange:n})})}n(15);function h(e){var t=e.value,n=e.name;return Object(o.jsxs)("div",{className:"result",children:[Object(o.jsx)("div",{className:"result-value-container",children:t}),Object(o.jsx)("div",{className:"result-description-container",children:n})]})}n(16);function p(e){var t=e.children;return Object(o.jsx)("div",{className:"result-title-container",children:Object(o.jsx)("p",{children:t})})}n(17);function O(e){var t=e.children,n=e.className;return Object(o.jsxs)("div",{className:"results-container ".concat(n),children:[Object(o.jsx)(p,{children:"Resultados"}),Object(o.jsx)("div",{className:"cards-container",children:t})]})}n(18);function m(e){var t=e.onClick,n=e.style,a=e.children;return Object(o.jsx)("div",{style:Object(r.a)({display:"flex",justifyContent:"center"},n),children:Object(o.jsx)("button",{onClick:t,className:"submit-button",children:a})})}n(19);var v=1,g=2,f=3;function x(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(0),s=Object(d.a)(i,2),l=s[0],x=s[1],y=Object(a.useState)(0),C=Object(d.a)(y,2),N=C[0],S=C[1],k=Object(a.useState)(0),M=Object(d.a)(k,2),F=M[0],H=M[1],L=Object(a.useState)(0),T=Object(d.a)(L,2),I=T[0],w=T[1],A=Object(a.useState)("both"),J=Object(d.a)(A,2),E=J[0],B=J[1],D=Object(a.useState)(g),P=Object(d.a)(D,2),U=P[0],_=P[1],G=[{name:"cantidad de l\xedneas",value:n,type:"both"},{name:"cantidad de l\xedneas de c\xf3digo",value:n-I,type:"both"},{name:"cantidad de l\xedneas comentadas",value:I,type:"both"},{name:"porcentaje de l\xedneas comentadas",value:I>0&&n>0?100*parseFloat(I/n).toFixed(3):0,type:"both"},{name:"complejidad ciclom\xe1tica",value:l,type:"McCabe"},{name:"longitud de Halstead",value:N,type:"Halstead"},{name:"volumen de Halstead",value:F,type:"Halstead"}],R=Object(a.useState)('public static void main(String[] args) {\n\n  Java8Function3 obj = new Java8Function3();\n\n  List<String> list = Arrays.asList("node", "c++", "java", "javascript");\n\n  // lambda\n  Map<String, Integer> map = obj.convertListToMap(list, x -> x.length());\n\n  System.out.println(map);    // {node=4, c++=3, java=4, javascript=10}\n\n  // method reference\n  Map<String, Integer> map2 = obj.convertListToMap(list, obj::getLength);\n\n  System.out.println(map2);\n}'),$=Object(d.a)(R,2),q=$[0],z=$[1],K=function(e,t,n,a){S(e<=0||t<=0?"-":parseInt(e*Math.log2(e)+t*Math.log2(t))),H(e+t<=0?"-":parseFloat((n+a)*Math.log2(e+t)).toFixed(1))},Q=function(e){x(e+1)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{children:"Herramienta de testing"}),Object(o.jsx)(b,{code:q,onCodeChange:function(e){z(e.target.value),e.target.value.length?_(g):_(v)}}),Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsx)("button",{className:"McCabe"===E?"checked-button":"unchecked-button",onClick:function(){B("McCabe")},children:"McCabe"}),Object(o.jsx)("button",{className:"Halstead"===E?"checked-button":"unchecked-button",onClick:function(){B("Halstead")},children:"Halstead"}),Object(o.jsx)("button",{className:"both"===E?"checked-button":"unchecked-button",onClick:function(){B("both")},children:"Ambos"})]}),Object(o.jsx)(O,{className:U===f?"div-show":"div-hide",children:G.map((function(e){return(E===e.type||"both"===e.type||"both"===E)&&Object(o.jsx)(h,Object(r.a)({},e),e.name)}))}),U===g&&Object(o.jsx)(m,{style:{marginTop:"20px"},onClick:function(e){e.preventDefault(),c(q.split("\n").length),w(q.split("//").length-1),function(e,t){var n=0;e.split(" ").forEach((function(e){e in j&&++j[e]})),Object.values(j).forEach((function(e){n+=e})),t(n)}(q,Q),function(e,t){for(var n=e.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm,""),a=0,c=0,i=0,s=0,o=[],l=0;l<u.length;l++)-1!==n.indexOf(u[l])&&i++,a+=e.split(u[l]).length-1;for(var r=n.split(" "),d=n.split(" ").length,j=0;j<d;j++)-1===u.indexOf(r[j])&&-1===o.indexOf(r[j])&&(o.push(r[j]),s++),-1===u.indexOf(r[j])&&c++;console.log({cantidadOperadoresUnicos:i,cantidadOperandosUnicos:s,cantidadOperadoresTotales:a,cantidadOperandosTotales:c}),t(i,s,a,c)}(q,K),_(f)},children:"Calcular"})]})}var y=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"contenedor",children:Object(o.jsx)(x,{})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),C()}],[[20,1,2]]]);
//# sourceMappingURL=main.8924cb73.chunk.js.map