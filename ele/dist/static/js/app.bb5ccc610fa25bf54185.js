webpackJsonp([1],[,,,,,,function(t,s,e){function i(t){e(157)}var a=e(2)(e(140),e(174),i,"data-v-b082a5c8",null);t.exports=a.exports},function(t,s,e){function i(t){e(158)}var a=e(2)(e(148),e(175),i,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){function i(t){e(156)}var a=e(2)(e(144),e(173),i,"data-v-714428e8",null);t.exports=a.exports},,,,,,function(t,s,e){function i(t){e(154)}var a=e(2)(e(138),e(171),i,null,null);t.exports=a.exports},function(t,s,e){function i(t){e(159)}var a=e(2)(e(142),e(176),i,"data-v-ea11b0e4",null);t.exports=a.exports},function(t,s,e){function i(t){e(149)}var a=e(2)(e(145),e(166),i,"data-v-0817038e",null);t.exports=a.exports},function(t,s,e){function i(t){e(152)}var a=e(2)(e(146),e(169),i,"data-v-3a718500",null);t.exports=a.exports},,,function(t,s,e){"use strict";var i=e(4),a=e(0),n=e.n(a);i.a.filter("time",function(t,s){return s=s||"YYYY-MM-DD HH:mm",n()(t).format(s)})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(4),a=e(135),n=e(130),r=e.n(n),o=e(134),c=e(131),l=e.n(c),v=e(132),d=e.n(v),u=e(133),f=e.n(u);i.a.use(a.a),i.a.use(o.a),i.a.config.productionTip=!1;var p=new a.a.Store({state:{count:0},addCartEl:{},mutations:{increment:function(t){t.count++}}}),h=[{path:"/",redirect:"/goods"},{path:"/goods",component:l.a},{path:"/ratings",component:d.a},{path:"/seller",component:f.a}],_=new o.a({linkActiveClass:"active",routes:h});new i.a({router:_,store:p,template:"<App/>",components:{App:r.a},data:{eventHub:new i.a}}).$mount("#app"),_.push("/goods")},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(164),a=e.n(i),n=e(5),r=e.n(n);s.default={data:function(){return{seller:{}}},created:function(){var t=this;r.a.get("static/data.json").then(function(s){t.seller=s.data.seller})},components:{"v-header":a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{isShow:Boolean}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(4);s.default={props:{food:Object},methods:{addCart:function(t){console.log(t.target),t._constructed&&(this.food.count||i.a.set(this.food,"count",0),this.food.count++,this.$root.eventHub.$emit("cart.add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=(e(136),e(3)),a=e.n(i),n=e(6),r=e.n(n);s.default={components:{cartcontrol:r.a},props:{food:Object},data:function(){return{showDetail:!1,evelflag:!0,classifyArr:[{name:"全部",count:this.food.ratings.length,active:!0},{name:"推荐",count:this.food.ratings.filter(function(t){return 0===t.rateType}).length,active:!1},{name:"吐槽",count:this.food.ratings.filter(function(t){return t.rateType}).length,active:!1}]}},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.detailWrapper&&this.$nextTick(function(){t.detailWrapper.refresh()}),s?this.food.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.food.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{showToggle:function(){var t=this;this.showDetail=!this.showDetail,this.showDetail&&this.$nextTick(function(){t._initScroll()})},_initScroll:function(){this.detailWrapper?this.detailWrapper.refresh():this.detailWrapper=new a.a(this.$refs.detailWrapper,{click:!0})},addCart:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$root.eventHub.$emit("cart.add",t.target))},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(124),a=e.n(i),n=e(3),r=e.n(n),o=e(165),c=e.n(o),l=e(6),v=e.n(l),d=e(163),u=e.n(d),f=e(5),p=e.n(f),h=e(4);new h.a;s.default={props:{seller:Object},created:function(){var t=this;p.a.get("static/data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},data:function(){return{goods:[],listHeight:[],foodsScrollY:0,selectedFood:""}},computed:{menuCurrentIndex:function(){for(var t=0,s=this.listHeight.length;t<s;t++){var e=this.listHeight[t],i=this.listHeight[t+1];if(!i||this.foodsScrollY>=e&&this.foodsScrollY<i)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuWrapper=new r.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new r.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.foodsScrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0,i=t.length;e<i;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},menuClick:function(t,s){s._constructed&&this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},goDetail:function(t){var s=this;this.selectedFood=t,this.$nextTick(function(){s.$refs.myFood.showToggle()})}},components:{iconMap:a.a,shopCart:c.a,cartcontrol:v.a,foodDetail:u.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(7),a=e.n(i);s.default={props:{seller:{type:Object}},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},components:{star:a.a},data:function(){return{detailShow:!1}},methods:{showDetails:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{iconType:Number},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(7),r=e.n(n),o=e(3),c=e.n(o);s.default={components:{star:r.a},data:function(){return{ratings:[],seller:{},classifyArr:[{name:"全部",count:0,active:!0},{name:"推荐",count:0,active:!1},{name:"吐槽",count:0,active:!1}],evelflag:!0}},created:function(){this._init()},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.scroll&&this.$nextTick(function(){t.scroll.refresh()}),s?this.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{_init:function(){var t=this;a.a.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.seller=s.data.seller,t._initClassifyArr(),t.$nextTick(function(){t.scroll=new c.a(t.$refs.ratingsWrapper,{click:!0})})})},_initClassifyArr:function(){var t=this;this.classifyArr.forEach(function(s,e){s.count=e?t.ratings.filter(function(t){return t.rateType===e-1}).length:t.ratings.length})},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(5),a=e.n(i),n=e(3),r=e.n(n),o=e(7),c=e.n(o),l=e(124),v=e.n(l);s.default={components:{star:c.a,iconMap:v.a},data:function(){return{seller:{},collectflag:!1}},created:function(){this._init()},methods:{_init:function(){var t=this;a.a.get("static/data.json").then(function(s){t.seller=s.data.seller,t.$nextTick(function(){t.sellerScroll=new r.a(t.$refs.sellerWrapper,{click:!0}),t._initPicScroll()})})},_initPicScroll:function(){if(!this.picsScroll){var t=this.seller.pics.length;this.$refs.picList.style.width=120*t+6*(t-1)+"px",this.picsScroll=new r.a(this.$refs.picsWrapper,{scrollX:!0})}}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(6),a=e.n(i),n=e(162),r=e.n(n),o=e(3),c=e.n(o);s.default={props:{selectFoods:{type:Array,default:[]},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},created:function(){this.$root.eventHub.$on("cart.add",this.drop)},computed:{showBackdrop:function(){return!(!this.listShow||!this.totalPrice)||(this.listShow=!1,!1)},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},leftAmount:function(){return!!(this.minPrice-this.totalPrice>0&&totalPrice)},payDesc:function(){var t=this.minPrice-this.totalPrice;return this.totalPrice?t>0?"还差￥"+t+"元":"去结算":"￥"+this.totalPrice+"起送"}},methods:{drop:function(t){for(var s=0,e=this.balls.length;s<e;s++){var i=this.balls[s];if(!i.show)return i.show=!0,i.el=t,void this.dropBalls.push(i)}},setEmpty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideBackdrop:function(){this.listShow=!1},_initScroll:function(){this.foodlistScroll=new c.a(this.$refs.foodlist,{click:!0})},listToggle:function(){var t=this;this.selectFoods.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.querySelector(".inner-hook");r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight,this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.querySelector(".inner-hook");s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},components:{cartcontrol:a.a,backdrop:r.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){function i(t){return e(a(t))}function a(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var n={"./af":9,"./af.js":9,"./ar":16,"./ar-dz":10,"./ar-dz.js":10,"./ar-kw":11,"./ar-kw.js":11,"./ar-ly":12,"./ar-ly.js":12,"./ar-ma":13,"./ar-ma.js":13,"./ar-sa":14,"./ar-sa.js":14,"./ar-tn":15,"./ar-tn.js":15,"./ar.js":16,"./az":17,"./az.js":17,"./be":18,"./be.js":18,"./bg":19,"./bg.js":19,"./bn":20,"./bn.js":20,"./bo":21,"./bo.js":21,"./br":22,"./br.js":22,"./bs":23,"./bs.js":23,"./ca":24,"./ca.js":24,"./cs":25,"./cs.js":25,"./cv":26,"./cv.js":26,"./cy":27,"./cy.js":27,"./da":28,"./da.js":28,"./de":31,"./de-at":29,"./de-at.js":29,"./de-ch":30,"./de-ch.js":30,"./de.js":31,"./dv":32,"./dv.js":32,"./el":33,"./el.js":33,"./en-au":34,"./en-au.js":34,"./en-ca":35,"./en-ca.js":35,"./en-gb":36,"./en-gb.js":36,"./en-ie":37,"./en-ie.js":37,"./en-nz":38,"./en-nz.js":38,"./eo":39,"./eo.js":39,"./es":41,"./es-do":40,"./es-do.js":40,"./es.js":41,"./et":42,"./et.js":42,"./eu":43,"./eu.js":43,"./fa":44,"./fa.js":44,"./fi":45,"./fi.js":45,"./fo":46,"./fo.js":46,"./fr":49,"./fr-ca":47,"./fr-ca.js":47,"./fr-ch":48,"./fr-ch.js":48,"./fr.js":49,"./fy":50,"./fy.js":50,"./gd":51,"./gd.js":51,"./gl":52,"./gl.js":52,"./gom-latn":53,"./gom-latn.js":53,"./he":54,"./he.js":54,"./hi":55,"./hi.js":55,"./hr":56,"./hr.js":56,"./hu":57,"./hu.js":57,"./hy-am":58,"./hy-am.js":58,"./id":59,"./id.js":59,"./is":60,"./is.js":60,"./it":61,"./it.js":61,"./ja":62,"./ja.js":62,"./jv":63,"./jv.js":63,"./ka":64,"./ka.js":64,"./kk":65,"./kk.js":65,"./km":66,"./km.js":66,"./kn":67,"./kn.js":67,"./ko":68,"./ko.js":68,"./ky":69,"./ky.js":69,"./lb":70,"./lb.js":70,"./lo":71,"./lo.js":71,"./lt":72,"./lt.js":72,"./lv":73,"./lv.js":73,"./me":74,"./me.js":74,"./mi":75,"./mi.js":75,"./mk":76,"./mk.js":76,"./ml":77,"./ml.js":77,"./mr":78,"./mr.js":78,"./ms":80,"./ms-my":79,"./ms-my.js":79,"./ms.js":80,"./my":81,"./my.js":81,"./nb":82,"./nb.js":82,"./ne":83,"./ne.js":83,"./nl":85,"./nl-be":84,"./nl-be.js":84,"./nl.js":85,"./nn":86,"./nn.js":86,"./pa-in":87,"./pa-in.js":87,"./pl":88,"./pl.js":88,"./pt":90,"./pt-br":89,"./pt-br.js":89,"./pt.js":90,"./ro":91,"./ro.js":91,"./ru":92,"./ru.js":92,"./sd":93,"./sd.js":93,"./se":94,"./se.js":94,"./si":95,"./si.js":95,"./sk":96,"./sk.js":96,"./sl":97,"./sl.js":97,"./sq":98,"./sq.js":98,"./sr":100,"./sr-cyrl":99,"./sr-cyrl.js":99,"./sr.js":100,"./ss":101,"./ss.js":101,"./sv":102,"./sv.js":102,"./sw":103,"./sw.js":103,"./ta":104,"./ta.js":104,"./te":105,"./te.js":105,"./tet":106,"./tet.js":106,"./th":107,"./th.js":107,"./tl-ph":108,"./tl-ph.js":108,"./tlh":109,"./tlh.js":109,"./tr":110,"./tr.js":110,"./tzl":111,"./tzl.js":111,"./tzm":113,"./tzm-latn":112,"./tzm-latn.js":112,"./tzm.js":113,"./uk":114,"./uk.js":114,"./ur":115,"./ur.js":115,"./uz":117,"./uz-latn":116,"./uz-latn.js":116,"./uz.js":117,"./vi":118,"./vi.js":118,"./x-pseudo":119,"./x-pseudo.js":119,"./yo":120,"./yo.js":120,"./zh-cn":121,"./zh-cn.js":121,"./zh-hk":122,"./zh-hk.js":122,"./zh-tw":123,"./zh-tw.js":123};i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id=160},,function(t,s,e){function i(t){e(150)}var a=e(2)(e(139),e(167),i,"data-v-0c011e60",null);t.exports=a.exports},function(t,s,e){function i(t){e(155)}var a=e(2)(e(141),e(172),i,"data-v-4cfff200",null);t.exports=a.exports},function(t,s,e){function i(t){e(153)}var a=e(2)(e(143),e(170),i,"data-v-3ac27940",null);t.exports=a.exports},function(t,s,e){function i(t){e(151)}var a=e(2)(e(147),e(168),i,"data-v-1a8a4b40",null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),e("star",{attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n          "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("span",{staticClass:"rateTime"},[t._v(t._s(t._f("time")(s.rateTime)))])]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),e("span",{staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"evel.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}))])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backdrop"})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.listToggle}},[e("div",{staticClass:"logo-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"badge"},[t._v(t._s(t.totalCount))]),t._v(" "),e("div",{staticClass:"logo",class:{active:t.totalPrice}},[e("i",{staticClass:"icon-shopping_cart"})])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需要配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice}},[t._v(t._s(t.payDesc))])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){t.setEmpty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop",on:{click:t.hideBackdrop}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){t.collectflag=!t.collectflag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectflag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("iconMap",{attrs:{iconType:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}))]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-imgs"},[e("h1",[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[e("div",{ref:"picList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("商家信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description+" / "+t.seller.deliveryTime+"分钟送达"))]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("span",{staticClass:"icon",class:t.iconClassMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:function(s){t.showDetails()}}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.showDetails()}}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.detailShow?e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.iconClassMap[s.type]}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:function(s){t.hideDetail()}}})])]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[e("div",{staticClass:"foodDetail"},[e("div",{staticClass:"back",on:{click:function(s){t.showToggle()}}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"text",on:{click:function(s){t.addCart(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n            "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"userInfo"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("time")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}))])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("span",{staticClass:"iconMap",class:t.iconClassMap[t.iconType]})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart()}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{class:i==t.menuCurrentIndex?"menu-item-selected":"menu-item",on:{click:function(s){t.menuClick(i,s)}}},[e("span",{staticClass:"text"},[e("iconMap",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],attrs:{iconType:s.type}}),t._v(t._s(s.name))],1)])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper",attrs:{id:"wrapper"}},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.goDetail(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopCart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),t.selectedFood?e("foodDetail",{ref:"myFood",attrs:{food:t.selectedFood}}):t._e()],1)},staticRenderFns:[]}}],[137]);
//# sourceMappingURL=app.bb5ccc610fa25bf54185.js.map