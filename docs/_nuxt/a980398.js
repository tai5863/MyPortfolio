(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{243:function(e,t,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(71).default)("54a42340",content,!0,{sourceMap:!1})},285:function(e,t,n){"use strict";n(243)},286:function(e,t,n){var o=n(70)(!1);o.push([e.i,'#home_header{position:absolute;width:100vw;top:50%;left:0;transform:translateY(-50%);z-index:1000}#home_header_container #header_ul{position:relative;margin:0 20%;list-style:none;display:flex;justify-content:space-between;padding:0}#home_header_container li{font-family:"Kiona";font-style:normal;font-weight:400;font-size:min(30px,7vw);line-height:63px;text-align:center;margin:0 auto}#home_about_nav,#home_gallery_nav,#home_works_nav{text-decoration:none;color:#000}@media screen and (max-width:900px){#home_header_comp{top:45%;left:0;transform:translateY(-50%)}#home_header_container #header_ul{display:block}#home_header_container li{line-height:90px}}',""]),e.exports=o},290:function(e,t,n){"use strict";n.r(t);n(127);var o=n(44),r=n(73),c=n(72),l=n(45),f=n(15),d=(n(43),n(230));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(r.a)(n,e);var t=h(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).sections=["works","about","gallery"],e}return n}(d.Vue),v=m=_([Object(d.Component)({name:"HomeHeader"})],m),y=(n(285),n(42)),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home_header"}},[n("div",{attrs:{id:"home_header_container"}},[n("nav",{attrs:{id:"nav_for_sections"}},[n("ul",{attrs:{id:"header_ul"}},e._l(e.sections,(function(section){return n("li",{key:section.id},[n("nuxt-link",{attrs:{id:"home_"+section+"_nav",to:"/"+section}},[e._v(e._s(section))])],1)})),0)])])])}),[],!1,null,null,null);t.default=component.exports}}]);