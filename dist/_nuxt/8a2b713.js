(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6],{229:function(t,e,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("700a9420",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";n.r(e);n(75);var r=n(24),o=n(36),c=n(37),l=n(16),f=n(12),d=(n(35),n(226));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),y=m=v([Object(d.Component)({name:"Footer"})],m),_=(n(232),n(49)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("div",{attrs:{id:"footer_container"}},[n("p",{attrs:{id:"copyright"}},[t._v("@2020 Taichi Uchida")])])])}],!1,null,null,null);e.default=component.exports},231:function(t,e,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("257af960",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";n(229)},233:function(t,e,n){var r=n(73)(!1);r.push([t.i,'#footer_container{position:relative;margin:30px 0}#copyright{color:#8c8c8c;text-align:center;font-family:"游ゴシック","Yu Gothic","游ゴシック体",YuGothic,sans-serif;font-style:normal;font-weight:400;font-size:min(15px,2vw)}',""]),t.exports=r},234:function(t,e,n){"use strict";n.r(e);n(75);var r=n(24),o=n(36),c=n(37),l=n(16),f=n(12),d=(n(35),n(226));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).sections=["works","about","gallery"],t}return n}(d.Vue),y=m=v([Object(d.Component)({name:"Header"})],m),_=(n(235),n(49)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"header_container"}},[n("h1",{attrs:{id:"name"}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"#000000"},attrs:{to:"/"}},[t._v("Taichi Uchida")])],1),t._v(" "),n("nav",{attrs:{id:"nav_for_sections"}},[n("ul",{attrs:{id:"header_ul"}},t._l(t.sections,(function(section){return n("li",{key:section.id},[n("router-link",{attrs:{to:"/"+section,id:section+"_nav"}},[t._v(t._s(section))])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports},235:function(t,e,n){"use strict";n(231)},236:function(t,e,n){var r=n(73)(!1);r.push([t.i,"#header{padding-top:30px;z-index:1}#header_container{margin:0 9.5vw;height:87px;display:flex;justify-content:space-between;align-items:center}#header_container #name{font-family:Kiona;font-style:normal;font-weight:400;font-size:min(30px,3vw);text-align:center;color:#000;margin:0}#header_container #nav_for_sections{position:relative;width:65%}#header_container #header_ul{height:100%;margin:0;position:relative;list-style:none;display:flex;justify-content:flex-end;padding:0}#header_container li{font-family:Kiona;font-style:normal;font-weight:400;font-size:min(15px,2vw);text-align:right;margin-left:calc(10% + 15px)}#about_nav,#gallery_nav,#works_nav{text-decoration:none;color:#000}@media screen and (max-width:800px){#header_comp{top:0;margin:0}#header_container #name{font-size:3.5vw}#header_container li{margin-left:15%;border-bottom:1px solid #fff;font-size:2vw}}",""]),t.exports=r},250:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("4d1e9168",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n(250)},282:function(t,e,n){var r=n(73)(!1);r.push([t.i,'.gallery_container .container[data-v-f12da22a]{margin:0 17.5vw}.item-wrapper[data-v-f12da22a]{padding-top:2vw}.item-wrapper .title[data-v-f12da22a]{font-family:Kiona;margin:2vw auto;font-style:normal;font-weight:400;font-size:min(30px,3vw);text-align:left;color:#000}.iframe-wrapper[data-v-f12da22a]{position:relative}.iframe-wrapper[data-v-f12da22a]:before{content:"";display:inline-block;padding-top:56.25%}.iframe-wrapper #reel[data-v-f12da22a]{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.gallery_container ul[data-v-f12da22a]{list-style:none;display:flex;justify-content:space-between;flex-flow:row wrap;margin:0;padding:0}.gallery_container .img_container[data-v-f12da22a]{width:33.3333%;height:auto}.img[data-v-f12da22a]{width:100%;height:100%}@media screen and (max-width:800px){.gallery_container .img_container[data-v-f12da22a]{width:100%}}',""]),t.exports=r},336:function(t,e,n){"use strict";n.r(e);n(75);var r=n(24),o=n(25),c=n(36),l=n(37),f=n(16),d=n(12),h=(n(35),n(50),n(28),n(44),n(51),n(129),n(226)),v=n(173),m=n(234),y=n(230);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var w=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).images=[],t}return Object(o.a)(n,[{key:"getImages",value:function(){v.photosStore.getImages().catch((function(t){console.error(t)}))}},{key:"created",value:function(){0===v.photosStore.images.length&&this.getImages(),this.images=v.photosStore.images}},{key:"mounted",value:function(){Array.from(document.getElementsByClassName("title")).forEach((function(title){var t=title.innerHTML.split("");title.innerHTML="",t.forEach((function(t,e){var n=document.createElement("span");n.innerHTML=t,n.style.color="rgba(0, 0, 0, 0.0)",title.appendChild(n),n.animate([{color:"rgba(0, 0, 0, 0.0)",backgroundColor:"rgb("+255*Math.random()+", "+255*Math.random()+", "+255*Math.random()+")"},{color:"rgba(0, 0, 0, 1.0)"}],{duration:200,delay:20*e}).onfinish=function(){n.style.color="rgba(0, 0, 0, 1.0)"}}))}))}}]),n}(h.Vue),x=j=w([Object(h.Component)({name:"Gallery",components:{Header:m.default,Footer:y.default}})],j),O=(n(281),n(49)),component=Object(O.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"gallery"}},[n("Header"),t._v(" "),n("div",{staticClass:"gallery_container"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"item-wrapper"},[n("h1",{staticClass:"title"},[t._v("Photography")]),t._v(" "),n("ul",t._l(t.images,(function(image,t){return n("span",{key:t,staticClass:"img_container"},[n("img",{staticClass:"img",attrs:{id:"img"+t,src:image,width:"1920",height:"1080"}})])})),0)])])]),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-wrapper",attrs:{id:"reel-wrapper"}},[n("h1",{staticClass:"title"},[t._v("2020 Showreel - TouchDesigner")]),t._v(" "),n("div",{staticClass:"iframe-wrapper"},[n("iframe",{attrs:{src:"https://player.vimeo.com/video/502608124",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",id:"reel"}})])])}],!1,null,"f12da22a",null);e.default=component.exports;installComponents(component,{Header:n(234).default,Footer:n(230).default})}}]);