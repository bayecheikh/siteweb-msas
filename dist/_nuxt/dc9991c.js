(window.webpackJsonp=window.webpackJsonp||[]).push([[17,1,10,12,13,14,15],{280:function(e,t,n){},281:function(e,t,n){"use strict";n(280)},282:function(e,t,n){"use strict";n.r(t);n(14),n(32);var l={data:function(){return{menus:[{url:"/",title:"Accueil"},{url:"/",title:"Indicateurs"},{url:"/",title:"Financement"},{url:"/",title:"Dimensions de la santé"}]}},mounted:function(){document.querySelectorAll(".submenu-toggle").forEach((function(e){e.addEventListener("click",(function(){this.classList.contains("active")?(this.closest("li").classList.remove("active"),this.closest("li").querySelectorAll("li, .submenu-toggle, .submenu").forEach((function(e){e.classList.remove("active")}))):(this.classList.add("active"),this.nextElementSibling.classList.add("active"),this.closest("li").classList.add("active"),function(e){var t=[];if(!e.parentNode)return t;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t}(this.closest("li")).forEach((function(e){e.classList.remove("active"),e.querySelectorAll("li, .submenu-toggle, .submenu").forEach((function(e){e.classList.remove("active")}))})))}))}))}},o=(n(281),n(31)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mobile-menu"},e._l(e.menus,(function(link,i){return n("li",{key:i},[n("n-link",{attrs:{to:link.url}},[e._v("\n            "+e._s(link.title)+"\n        ")]),e._v(" "),link.submenu?n("span",{staticClass:"submenu-toggle"},[n("i",{staticClass:"pe-7s-angle-down"})]):e._e(),e._v(" "),link.submenu?n("ul",{staticClass:"submenu"},e._l(link.submenu,(function(link,i){return n("li",{key:i,staticClass:"title"},[n("n-link",{attrs:{to:link.url}},[e._v(" "+e._s(link.title)+" ")]),e._v(" "),link.submenu?n("span",{staticClass:"submenu-toggle"},[n("i",{staticClass:"pe-7s-angle-down"})]):e._e(),e._v(" "),link.submenu?n("ul",{staticClass:"submenu"},e._l(link.submenu,(function(link,i){return n("li",{key:i},[n("n-link",{attrs:{to:link.url}},[e._v(" "+e._s(link.title)+" ")])],1)})),0):e._e()],1)})),0):e._e()],1)})),0)}),[],!1,null,"a1cd98ac",null);t.default=component.exports},283:function(e,t,n){"use strict";n.r(t);n(14),n(33),n(34);var l={components:{ResponsiveMobileMenu:function(){return Promise.resolve().then(n.bind(null,282))}}},o=n(31),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"offcanvas-mobile-menu-wrapper"},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(t){return e.$emit("toggleAsideMenu")}}}),e._v(" "),n("div",{staticClass:"mobile-menu-inner"},[n("button",{staticClass:"close-btn",on:{click:function(t){return e.$emit("toggleAsideMenu")}}},[n("i",{staticClass:"pe-7s-close"})]),e._v(" "),n("div",{staticClass:"mobile-menu-inner-wrapper"},[e._m(0),e._v(" "),n("div",{staticClass:"offcanvas-body-inner"},[n("div",{staticClass:"menu-navigation"},[n("ResponsiveMobileMenu")],1),e._v(" "),e._m(1)])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"offcanvas-mobile-search"},[n("form",{staticClass:"mobile-search-inner"},[n("input",{attrs:{type:"text",placeholder:"Search here"}}),e._v(" "),n("button",{attrs:{type:"submit"}},[n("i",{staticClass:"pe-7s-search"})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"offcanvas-widget-area"},[n("ul",[n("li",[n("i",{staticClass:"fa fa-phone"}),e._v(" "),n("a",{attrs:{href:"callto:+221770000000"}},[e._v("+221770000000")])]),e._v(" "),n("li",[n("i",{staticClass:"fa fa-envelope"}),e._v(" "),n("a",{attrs:{href:"mailto:info@agencecadredevie.com"}},[e._v("info@msas.com")])])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ResponsiveMobileMenu:n(282).default})},419:function(e,t,n){"use strict";n.r(t);n(14),n(32);var l={data:function(){return{menus:[{url:"/",title:"Accueil",idSection:"accueil"},{url:"/",title:"Financement",idSection:"financements"},{url:"/",title:"Dimensions de la santé",idSection:"dimensionsdelasante"},{url:"/",title:"Indicateurs",idSection:"indicateurs"}]}},mounted:function(){document.querySelectorAll(".submenu-toggle").forEach((function(e){e.addEventListener("click",(function(){this.classList.contains("active")?(this.closest("li").classList.remove("active"),this.closest("li").querySelectorAll("li, .submenu-toggle, .submenu").forEach((function(e){e.classList.remove("active")}))):(this.classList.add("active"),this.nextElementSibling.classList.add("active"),this.closest("li").classList.add("active"),function(e){var t=[];if(!e.parentNode)return t;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t}(this.closest("li")).forEach((function(e){e.classList.remove("active"),e.querySelectorAll("li, .submenu-toggle, .submenu").forEach((function(e){e.classList.remove("active")}))})))}))}))},methods:{goToSection:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",top:8})}}},o=n(31),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.menus,(function(link,i){return n("li",{key:i},[n("a",{attrs:{href:link.url},on:{click:function(t){return t.preventDefault(),e.goToSection(link.idSection)}}},[e._v(e._s(link.title)),n("i",{class:link.submenu&&"fa fa-angle-down"})]),e._v(" "),link.submenu?n("ul",{staticClass:"mega-menu mega-menu-padding row"},e._l(link.submenu,(function(link,i){return n("li",{key:i},[link.submenu?e._e():n("a",{attrs:{href:link.url}},[e._v(e._s(link.title)),n("i",{class:link.submenu&&"fa fa-angle-down"})]),e._v(" "),link.submenu?n("ul",[n("li",{staticClass:"mega-menu-title"},[n("a",{attrs:{href:link.url}},[e._v(e._s(link.title))])]),e._v(" "),e._l(link.submenu,(function(link,i){return n("li",{key:i},[n("a",{attrs:{href:link.url}},[e._v(e._s(link.title))])])}))],2):e._e()])})),0):e._e()])})),0)}),[],!1,null,"2152a542",null);t.default=component.exports},420:function(e,t,n){},422:function(e,t,n){"use strict";n.r(t);n(43),n(35),n(42),n(14),n(60),n(32),n(61);var l=n(26);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var r={data:function(){return{isPageLoad:!1,load:!1,model:{firstname:"",lastname:"",email:"",telephone:"",subject:"",message:""},modelPreRempli:{firstname:"Cheikh",lastname:"Gueye",email:"bayecheikh@gmail.com",telephone:"778688784",subject:"Demande d'infos",message:"Je veux des infos"}}},methods:{onClickDemande:function(){this.isPageLoad=!0,this.$modal.show("demande")},submitDemande:function(){this.load=!0,console.log("Données demande formulaire ++++++: ",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.model))}}},c=r,m=n(31),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-outline-primary custom-btn-outline-primary mr-2",attrs:{type:"button"},on:{click:e.onClickDemande}},[e._v("\r\n        DEMANDE D'INFORMATION")]),e._v(" "),n("modal",{attrs:{name:"demande",width:"50%",scrollable:!0,height:"auto"}},[e.isPageLoad?n("div",{staticClass:"container pt-15 pb-15"},[n("div",{staticClass:"custom-row-2"},[n("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[n("div",{staticClass:"contact-form"},[n("div",{staticClass:"contact-title mb-30"},[n("h2",[e._v("Ecrivez-nous")])]),e._v(" "),n("form",{staticClass:"contact-form-style",attrs:{method:"post"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.firstname,expression:"model.firstname"}],attrs:{name:"firstname",placeholder:"Prénom*",type:"text",required:""},domProps:{value:e.model.firstname},on:{input:function(t){t.target.composing||e.$set(e.model,"firstname",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col-lg-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.lastname,expression:"model.lastname"}],attrs:{name:"lastname",placeholder:"Nom*",type:"text",required:""},domProps:{value:e.model.lastname},on:{input:function(t){t.target.composing||e.$set(e.model,"lastname",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col-lg-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.email,expression:"model.email"}],attrs:{name:"email",placeholder:"Email*",type:"email"},domProps:{value:e.model.email},on:{input:function(t){t.target.composing||e.$set(e.model,"email",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col-lg-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.telephone,expression:"model.telephone"}],attrs:{name:"telephone",placeholder:"Téléphone*",type:"number",required:""},domProps:{value:e.model.telephone},on:{input:function(t){t.target.composing||e.$set(e.model,"telephone",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col-lg-12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.model.subject,expression:"model.subject"}],attrs:{name:"subject",placeholder:"Objet*",type:"text",required:""},domProps:{value:e.model.subject},on:{input:function(t){t.target.composing||e.$set(e.model,"subject",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"col-lg-12"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.model.message,expression:"model.message"}],attrs:{name:"message",placeholder:"Votre Message*",required:""},domProps:{value:e.model.message},on:{input:function(t){t.target.composing||e.$set(e.model,"message",t.target.value)}}}),e._v(" "),n("button",{staticClass:"submit",attrs:{type:"submit"},on:{click:e.submitDemande}},[e._v("ENVOYEZ")])])])])])])])]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},423:function(e,t,n){"use strict";n(420)},430:function(e,t,n){"use strict";n.r(t);n(14),n(33),n(34);var l={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,419))},Demande:function(){return Promise.resolve().then(n.bind(null,422))}},props:["containerClass"],computed:{},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=window.scrollY;e.isSticky=t>=200}))}},o=(n(423),n(31)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-white"},[n("header",{staticClass:"header-area"},[e._m(0),e._v(" "),n("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":e.isSticky}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex justify-content-between"},[n("div",{staticClass:"col-lg-2 col-md-2 col-sm-12"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),e._v(" "),n("div",{staticClass:"col-lg-6 col-md-6 col-sm-12 d-none d-lg-block"},[n("div",{staticClass:"main-menu"},[n("nav",[n("Navigation")],1)])]),e._v(" "),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 d-flex justify-content-between align-items-center"},[n("Demande"),e._v(" "),n("a",{staticClass:"btn btn-primary custom-btn-primary",attrs:{target:"_blank",href:"https://admin-msas.vercel.app"}},[e._v("SE CONNECTER")])],1),e._v(" "),n("div",{staticClass:"col-lg-1 col-md-1 col-sm-12"},[n("div",{staticClass:"header-right-wrap"},[n("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[n("button",{staticClass:"mobile-aside-button",on:{click:function(t){e.navOpen=!e.navOpen}}},[n("i",{staticClass:"pe-7s-menu"})])])])])])])])]),e._v(" "),e.navOpen?n("OffCanvasMobileMenu",{class:{"show-mobile-menu":e.navOpen},on:{toggleAsideMenu:function(t){e.navOpen=!e.navOpen}}}):e._e()],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block custom-bg"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header-top-inner row"},[n("div",{staticClass:"col-10"},[n("p",{staticClass:"text-white"},[e._v("PLATEFORME NUMERIQUE DE SUIVI DU FINANCEMENT DE LA SANTE AU SENEGAL")])]),e._v(" "),n("div",{staticClass:"col-2 d-flex justify-content-between"},[n("span",{staticClass:"text-white"},[e._v("Nous suivre sur : ")]),e._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook text-white"})]),e._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter text-white"})]),e._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-linkedin text-white"})])])])])])}],!1,null,"357ce391",null);t.default=component.exports;installComponents(component,{Navigation:n(419).default,Demande:n(422).default,OffCanvasMobileMenu:n(283).default})},431:function(e,t,n){"use strict";n.r(t);var l={},o=n(31),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer-area bg-blue-dark pt-20 pb-20"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-10"},[n("p",{staticClass:"text-white"},[e._v("DIRECTION DE LA PLANIFICATION DE LA RECHERCHE ET DES STATISTIQUES")])]),e._v(" "),n("div",{staticClass:"col-2 d-flex justify-content-between"},[n("span",{staticClass:"text-white"},[e._v("Nous suivre sur : ")]),e._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook text-white"})]),e._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter text-white"})]),e._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-linkedin text-white"})])])])])])}],!1,null,null,null);t.default=component.exports},438:function(e,t,n){"use strict";n.r(t);n(14),n(33),n(34);var l={components:{HeaderWithTopbar:function(){return Promise.resolve().then(n.bind(null,430))},HeroSlider:function(){return n.e(5).then(n.bind(null,445))},FinancementParRegion:function(){return n.e(3).then(n.bind(null,443))},IndicateurFinancement:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,444))},FinancementGlobal:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,442))},TheFooter:function(){return Promise.resolve().then(n.bind(null,431))}},head:function(){return{title:"Ministère de la santé et de l'action sociale"}}},o=n(31),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-page-wrapper bg-grey"},[n("HeaderWithTopbar"),e._v(" "),n("HeroSlider"),e._v(" "),n("FinancementParRegion"),e._v(" "),n("IndicateurFinancement"),e._v(" "),n("FinancementGlobal"),e._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderWithTopbar:n(430).default,TheFooter:n(431).default})}}]);