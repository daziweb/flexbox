webpackJsonp([1],{KHlZ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("IvJb"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("C7Lr")({name:"App"},i,!1,function(e){n("Qgim")},null,null).exports,o=n("zO6J"),l=n("3cXf"),s=n.n(l),c=n("aA9S"),v=n.n(c),u={name:"flex-index",data:function(){return{containers:[],container:{display:"flex","flex-direction":null,"flex-wrap":null,"justify-content":null,"align-items":null,"align-content":null},container_item:{order:null,"flex-grow":null,"flex-shrink":null,"flex-basis":null,"align-self":null}}},methods:{add_item_fn:function(){this.containers.push(v()({},this.container_item))},romve_item_fn:function(e){this.containers.splice(e,1)},show_code_fn:function(e,t){var n=v()({},this.container),a=v()({},this.containers[e]);for(var i in n)n[i]||delete n[i];for(var r in a)a[r]||delete a[r];var o=document.createElement("div");o.style.left=t.clientX+"px",o.style.top=t.clientY+"px",o.style.position="absolute",o.style.width="30em",o.style.height="20em";var l=document.createElement("textarea"),c=s()(v()({"#container":n},{"#container_item":a}));l.value=c.replace(/\"/gim,"").replace(/\,/gim,";").replace(/^\{|\}$/gim,"").replace(/\;\#/gim,"\n#").replace(/\:\{/gim,":\n{"),l.style.width="100%",l.style.height="100%",l.style.fontSize="1.2rem",l.style.padding="1rem",document.body.appendChild(o),o.appendChild(l),l.onmouseout=function(e){o.style.display="none"}},chane_shrink_fn:function(e,t,n){t["flex-basis"]=n.target.value+"px"}},mounted:function(){this.containers.push(v()({},this.container_item),v()({},this.container_item),v()({},this.container_item))}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"flexindex_div_wrap "},[n("header",{staticClass:"indexWrap_div_toolbar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.container["flex-direction"],expression:"container['flex-direction']"}],attrs:{list:"flex-direction",name:"flex-direction",placeholder:"排列方向"},domProps:{value:e.container["flex-direction"]},on:{input:function(t){t.target.composing||e.$set(e.container,"flex-direction",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.container["flex-wrap"],expression:"container['flex-wrap']"}],attrs:{list:"flex-wrap",name:"flex-wrap",placeholder:"如何换行"},domProps:{value:e.container["flex-wrap"]},on:{input:function(t){t.target.composing||e.$set(e.container,"flex-wrap",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.container["justify-content"],expression:"container['justify-content']"}],attrs:{list:"justify-content",name:"justify-content",placeholder:"对齐方式"},domProps:{value:e.container["justify-content"]},on:{input:function(t){t.target.composing||e.$set(e.container,"justify-content",t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.container["align-items"],expression:"container['align-items']"}],attrs:{list:"align-items",name:"align-items",placeholder:"侧轴对齐"},domProps:{value:e.container["align-items"]},on:{input:function(t){t.target.composing||e.$set(e.container,"align-items",t.target.value)}}})]),e._v(" "),n("main",{staticClass:"indexWrap_div_main row"},[n("p",{staticClass:"WrapMain_div_add",on:{click:e.add_item_fn}},[e._v("添加项目")]),e._v(" "),n("div",{staticClass:"WrapMain_div_containers",style:e.container},e._l(e.containers,function(t,a){return n("div",{key:a,staticClass:"mainContainers_div_item",style:t},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"item['order']"}],attrs:{type:"number",name:"order",placeholder:"排列顺序",min:"-99",max:"99"},domProps:{value:t.order},on:{input:function(n){n.target.composing||e.$set(t,"order",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t["flex-grow"],expression:"item['flex-grow']"}],attrs:{type:"number",name:"flex_grow",placeholder:"放大比例",min:"-99",max:"99"},domProps:{value:t["flex-grow"]},on:{input:function(n){n.target.composing||e.$set(t,"flex-grow",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t["flex-shrink"],expression:"item['flex-shrink']"}],attrs:{type:"number",name:"flex_shrink",placeholder:"缩小比例",min:"-99",max:"99"},domProps:{value:t["flex-shrink"]},on:{input:function(n){n.target.composing||e.$set(t,"flex-shrink",n.target.value)}}}),e._v(" "),n("input",{attrs:{type:"number",name:"flex_basis",placeholder:"占据空间",min:"-99",max:"99"},on:{change:function(n){e.chane_shrink_fn(a,t,n)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t["align-self"],expression:"item['align-self']"}],attrs:{list:"align_self",name:"align_self",placeholder:"对齐方式"},domProps:{value:t["align-self"]},on:{input:function(n){n.target.composing||e.$set(t,"align-self",n.target.value)}}}),e._v(" "),n("div",[n("button",{attrs:{type:"button",value:""},on:{click:function(t){e.show_code_fn(a,t)}}},[e._v("布局代码")]),e._v(" "),n("button",{attrs:{type:"button",value:""},on:{click:function(t){e.romve_item_fn(a)}}},[e._v("移除项目")])])])}))]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("datalist",{attrs:{id:"align_self"}},[n("option",{attrs:{value:"auto"}},[e._v("auto")]),e._v(" "),n("option",{attrs:{value:"flex-start"}},[e._v("flex-start")]),e._v(" "),n("option",{attrs:{value:"flex-end"}},[e._v("flex-end")]),e._v(" "),n("option",{attrs:{value:"center"}},[e._v("center")]),e._v(" "),n("option",{attrs:{value:"baseline"}},[e._v("baseline")]),e._v(" "),n("option",{attrs:{value:"stretch"}},[e._v("stretch")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("datalist",{attrs:{id:"flex-direction"}},[t("option",{attrs:{value:"row"}},[this._v("row")]),this._v(" "),t("option",{attrs:{value:"row-reverse"}},[this._v("row-reverse")]),this._v(" "),t("option",{attrs:{value:"column"}},[this._v("column")]),this._v(" "),t("option",{attrs:{value:"column-reverse"}},[this._v("column-reverse")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("datalist",{attrs:{id:"flex-wrap"}},[t("option",{attrs:{value:"nowrap"}},[this._v("nowrap")]),this._v(" "),t("option",{attrs:{value:"wrap"}},[this._v("wrap")]),this._v(" "),t("option",{attrs:{value:"wrap-reverse"}},[this._v("wrap-reverse")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("datalist",{attrs:{id:"justify-content"}},[n("option",{attrs:{value:"flex-start"}},[e._v("flex-start")]),e._v(" "),n("option",{attrs:{value:"flex-end"}},[e._v("flex-end")]),e._v(" "),n("option",{attrs:{value:"center"}},[e._v("center")]),e._v(" "),n("option",{attrs:{value:"space-between"}},[e._v("space-between")]),e._v(" "),n("option",{attrs:{value:"space-around"}},[e._v("space-around")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("datalist",{attrs:{id:"align-items"}},[n("option",{attrs:{value:"flex-start"}},[e._v("flex-start")]),e._v(" "),n("option",{attrs:{value:"flex-end"}},[e._v("flex-end")]),e._v(" "),n("option",{attrs:{value:"center"}},[e._v("center")]),e._v(" "),n("option",{attrs:{value:"baseline"}},[e._v("baseline")]),e._v(" "),n("option",{attrs:{value:"stretch"}},[e._v("stretch")])])}]};var m=n("C7Lr")(u,p,!1,function(e){n("KHlZ")},"data-v-9b3764de",null).exports;a.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"FlexIndex",component:m}]});a.a.config.productionTip=!1,new a.a({el:"#main",router:d,components:{App:r},template:"<App/>"})},Qgim:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8b098f5cf3f5dd45d06c.js.map