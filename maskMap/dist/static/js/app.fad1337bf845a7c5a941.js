webpackJsonp([1],{"5VxZ":function(t,e){},"9yeF":function(t,e){},BvLc:function(t,e){},H29T:function(t,e){t.exports=L},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lRwf"),r=n.n(a),o={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("div",[t._v("口罩地圖")]),t._v(" "),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal",justify:"space-between"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/"}},[t._v("最新消息")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:"/hello"}},[t._v("hello")])],1),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[t._v("我的工作台")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],2)],1)],1)},staticRenderFns:[]},i={name:"App",components:{navbar:n("VU/8")(o,s,!1,null,null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",{staticClass:"display-full"},[e("el-header",{staticClass:"header"},[e("navbar")],1),this._v(" "),e("transition",{attrs:{name:"bounce"}},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(i,l,!1,function(t){n("fSXS")},null,null).exports,u=n("pRNm"),d=n.n(u),f=n("Xxa5"),p=n.n(f),h=n("exGp"),A=n.n(h),g={data:function(){return{countysList:["臺北市","新北市","桃園市","臺中市","高雄市","臺南市","基隆市","新竹市","新竹縣","苗栗縣","彰化縣","雲林縣","嘉義市","嘉義縣","屏東縣","宜蘭縣","花蓮縣","臺東縣","南投縣","澎湖縣","金門縣","連江縣"],county:"",townsList:[],town:""}},computed:{maskInfoArray:function(){return this.$store.state.maskInfoArray},filterMarksCounty:function(){return this.$store.state.filterMarksCounty}},methods:{getCounty:function(){var t=this;return A()(p.a.mark(function e(){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.town="",n=[],t.maskInfoArray.forEach(function(e){e.properties.county==t.county&&n.push(e)}),t.$store.dispatch("filterMarksCounty",n),t.townsList=[],n.forEach(function(e){-1===t.townsList.indexOf(e.properties.town)&&t.townsList.push(e.properties.town)});case 6:case"end":return e.stop()}},e,t)}))()},getTown:function(){var t=this,e=[];this.filterMarksCounty.forEach(function(n){n.properties.town==t.town&&e.push(n)}),console.log(e),this.$store.dispatch("filterMarksTown",e)},findMe:function(){this.$store.dispatch("findMe",!0),window.maskMap.findMe()}},mounted:function(){}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card"},[n("el-button",{staticClass:"margin-xs bg-main",attrs:{type:"primary",size:"medium"},on:{click:t.findMe}},[t._v("我的位置")]),t._v(" "),n("el-select",{staticClass:"el-select margin-xs",attrs:{placeholder:"請選擇 縣/市"},on:{change:t.getCounty},model:{value:t.county,callback:function(e){t.county=e},expression:"county"}},t._l(t.countysList,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})}),1),t._v(" "),t.county?n("el-select",{staticClass:"el-select margin-xs",attrs:{placeholder:"請選擇 區/鄉/鎮"},on:{change:t.getTown},model:{value:t.town,callback:function(e){t.town=e},expression:"town"}},t._l(t.townsList,function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})}),1):t._e()],1)},staticRenderFns:[]};var E=n("VU/8")(g,m,!1,function(t){n("9yeF")},"data-v-b0906e74",null).exports,I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"box-card margin-t-sm"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("h2",{staticClass:"margin-xs"},[t._v(t._s(t.detail.name))])]),t._v(" "),n("div",{staticClass:"margin-xs"},[t._v("電話: "+t._s(t.detail.phone))]),t._v(" "),n("div",{staticClass:"margin-xs"},[t._v("地址: "+t._s(t.detail.address))]),t._v(" "),n("div",{staticClass:"margin-xs"},[t._v("成人口罩: "+t._s(t.detail.mask_adult))]),t._v(" "),n("div",{staticClass:"margin-xs"},[t._v("兒童口罩: "+t._s(t.detail.mask_child))]),t._v(" "),n("div",{staticClass:"margin-xs"},[t._v(t._s(t.detail.note))])])},staticRenderFns:[]};var w=n("VU/8")({data:function(){return{msg:"Welcome to Your Vue.js  App"}},computed:{detail:function(){return this.$store.state.detail}}},I,!1,function(t){n("5VxZ")},null,null).exports,D=n("H29T"),k=n.n(D),H=(n("0J91"),{data:function(){return{mapObj:{},MarkerClusterGroup:new k.a.MarkerClusterGroup,greenIcon:{},myLocateIcon:{},find:!1}},computed:{maskInfoArray:function(){return this.$store.state.maskInfoArray},filterMarksCounty:function(){return this.$store.state.filterMarksCounty},filterMarksTown:function(){return this.$store.state.filterMarksTown}},watch:{filterMarksCounty:function(t){this.markOnMap(t)},filterMarksTown:function(t){this.markOnMap(t)}},methods:{mapInit:function(){this.mapObj=k.a.map("map").setView([22.604799,120.2976256],13),k.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.mapObj),this.greenIcon=new k.a.Icon({iconUrl:n("jfqf"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[30,33],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[45,35]}),this.findMe()},markOnMap:function(t){var e=this;this.MarkerClusterGroup.clearLayers();var n=[];t.forEach(function(t){var a=t.geometry.coordinates[1],r=t.geometry.coordinates[0],o=k.a.marker([a,r],{icon:e.greenIcon}).bindPopup("\n        <table>\n        <tbody>\n          <tr>\n            <td>名稱 : </td>\n            <td>"+t.properties.name+"</td>\n          </tr>\n          <tr>\n            <td>電話 : </td>\n            <td>"+t.properties.phone+"</td>\n          </tr>\n          <tr>\n            <td>地址 : </td>\n            <td>"+t.properties.address+"</td>\n          </tr>\n          <tr>\n            <td>成人口罩數量 : </td>\n            <td>"+t.properties.mask_adult+"</td>\n          </tr>\n          <tr>\n            <td>兒童口罩數量 : </td>\n            <td>"+t.properties.mask_child+"</td>\n          </tr>\n        </tbody>\n        </table>\n        <style>\n          tr > td:first-child{\n            text-align:right;\n            width:90px;\n          }\n          .leaflet-popup-content-wrapper, .leaflet-popup-tip {\n            background:#ff8f74;\n            color:#ffffff;\n          }\n          .leaflet-container a.leaflet-popup-close-button{\n            color:#fff;\n          }\n        </style>\n        ").on("click",function(){e.$store.dispatch("getDetail",t.properties)});n.push(o),e.MarkerClusterGroup.addLayer(o)}),!0!==this.find&&this.mapObj.setView([n[0]._latlng.lat,n[0]._latlng.lng],12),this.mapObj.addLayer(this.MarkerClusterGroup)},findMe:function(){var t=this;this.myLocateIcon=new k.a.Icon({iconUrl:n("nsAd"),shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[30,33],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[45,35]}),this.mapObj.locate({setView:!0,maxZoom:16}),this.mapObj.on("locationfound",function(e){t.find=!0,t.markOnMap(t.maskInfoArray),k.a.marker(e.latlng,{icon:t.myLocateIcon}).addTo(t.mapObj).bindPopup("現在位置"),t.find=!1}),this.mapObj.on("locationerror",function(e){t.find=!1,t.markOnMap(t.maskInfoArray),alert("定位失敗")})},getMask:function(){this.$store.dispatch("getMaskInfo")}},mounted:function(){var t=this;return A()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.maskMap=t,e.next=3,t.getMask();case 3:return e.next=5,t.mapInit();case 5:case"end":return e.stop()}},e,t)}))()}}),v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"map"}})},staticRenderFns:[]};var C=n("VU/8")(H,v,!1,function(t){n("RfX9")},null,null).exports,j=n("OMN4"),y=n.n(j),b={components:{boxCardSearch:E,boxCardDetail:w,maskMap:C},data:function(){return{detailCard:!1}},computed:{detail:function(){return this.$store.state.detail}},watch:{detail:function(){this.detailCard=!0}},methods:{},mounted:function(){}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",[e("el-aside",{staticClass:"detail-padding",attrs:{width:"300px"}},[e("boxCardSearch"),this._v(" "),this.detailCard?e("boxCardDetail"):this._e()],1),this._v(" "),e("el-container",[e("el-main",{staticClass:"map-padding"},[e("maskMap")],1)],1)],1)},staticRenderFns:[]};var M=n("VU/8")(b,x,!1,function(t){n("ezTV")},null,null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",{staticStyle:{padding:"20px"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[e("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},staticRenderFns:[]},F=n("VU/8")({data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}}},V,!1,null,null,null).exports;r.a.use(d.a);var B=new d.a({routes:[{path:"/",name:"homePage",component:M},{path:"/hello",name:"hello",component:F}]}),T=n("NYxO");r.a.use(T.a);var U=new T.a.Store({state:{maskInfoArray:[],filterMarksCounty:[],filterMarksTown:[],detail:{}},mutations:{getMaskInfo:function(t,e){t.maskInfoArray=e},filterMarksCounty:function(t,e){t.filterMarksCounty=e},filterMarksTown:function(t,e){t.filterMarksTown=e},getDetail:function(t,e){t.detail=e}},actions:{getMaskInfo:function(t){return y.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then(function(e){t.commit("getMaskInfo",e.data.features)}).catch(function(t){console.log(t)})},filterMarksCounty:function(t,e){t.commit("filterMarksCounty",e)},filterMarksTown:function(t,e){t.commit("filterMarksTown",e)},getDetail:function(t,e){t.commit("getDetail",e),console.log(e)}}});n("BvLc"),n("VRXO");r.a.config.productionTip=!1,new r.a({el:"#app",router:B,store:U,components:{App:c},template:"<App/>"})},OMN4:function(t,e){t.exports=axios},RfX9:function(t,e){},VRXO:function(t,e){},ezTV:function(t,e){},fSXS:function(t,e){},jfqf:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYZQTFRF/////wCA/1VV/0BA/zMz/0lJ4zk55jNN6zs77TdJ7jNE70BA8Dw86TdD6jVA7TdA7TU+7zpC7DlA8DZA7DlC7DhB7TdA7jdA7zhA7zc/7Tc/7jg/7zdB7ThB7ThA7jdA7zc/7zlB7zc/7jlA7jhA7zg/7zlA7TdA7jhB7zhA7Tc/7TlB7jhA7jg/7zhA7jhA7jhA7jk/7zhA7zc/7ThB7jlB7jdB7jhA7jg/7jhA7jhA7jhA7jhA7jc/7jlA7jg/7jhA7jhA7jlA7jdA7zg/7jg/7jhA7jhA7jhA7jg/7jdA7jg/7jhA7jhA7jg/7jhA7jg/7jhA7jhA7jhA7jhA7jlB7jtD7z1F70BH70JJ70RL70VM70ZM8ElP8Vdc8Vld8ltf8lxg8mBk8mJm82dq825w9G9x9HFz9HZ39Xl69YKB9oaF9oqJ946M94+N95aU+JuY+J2Z+J+b+aWh+qyn+7u0/L+3/MK6/Me//crB/c7G/dDH/tPK/trQ/93S/97U/+DV/+HWi9+UUAAAAFR0Uk5TAAIDBAUHCQoNDg8QERcYHB0fKDQ2Nzg8QEFFSU9WV1hdXmFnaG1wc3p8gYKIiYyTl5mcnZ6iprO1tre/wMHCxczO1NjZ4err7O3v8fP09fj5+/z+MxvIQwAAAnBJREFUGBmdwQk7VFEABuBvGFtkJ5LIlpCSNSVbM/bl5ssaTUVly1Ip+5x/nsfT455z7zl3znhfGGU9bO169XZy8u3rrtaHWUhSbm3vLCWzvbW5sJf73KGP8zwXdjKbp6g11ZwJC/ejNIreR0L17xjgXT2ChduYQFsYAVJeMqGXKTB7RgvPYFRLK7UwKHdoxSmHVlqEliJp0HlMr9XN3cPD3c1Vej2GRvYYVZ9/x8W1+O/PVI1lw6+FioW9uLgR31ugogU+GdOUfforFH8/UTadAa8HlK1dCI+LNcoewKuDkvk/wufPPCUd8AhFKfkhNH5QEg1BdY+S2KXQuIxRcg+qOkp+Ca1flNRB1UzXwrnQOl+gqxmqF3R9EQZf6HoBVQ9d34XBd7p6oBqka1sYbNM1CNUburaEwRZdb6DqpOubMPhGVydUTXR9FAYf6WqCqoau96dC6/Q9XTVQlVGyL7T2KSmDqoCSD2dC4+wDJQVQpTiUfBUaXylxUuAxQNlP4fOTsgF4NVC2fCw8jpcpa4DXXYeyxQOhOFikzLkLnx6q1k/EjZN1qnrgV0WPpZ2juLgSP9pZokcV/NIn6LMS29iIrdBnIh0a7bTWDp2iOVqaK4JWFy11Qa9ghlZmCmDwlFaewuTOCC2M3IFRPS3Uwyw8zISGwwhQ7DABpxiBGplAI4KF+hioL4QE8scZYDwfCVUyQCUstNGoDTZSu2nQnQor6f3U6k+HpZwhagzlwFpehD6RPCShcJQeo4VISuk0FdOlSFKFQ4lTgaRVz/HGXDVu4ZHD/5xHuJWKKV6bqsAtlYzwykgJbi3/ydDQk3wE+Qe8yj6NIv6VcwAAAABJRU5ErkJggg=="},lRwf:function(t,e){t.exports=Vue},nsAd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABEJAAARCQHA5aIYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVlQTFRF////AP//AKr/AID/IIDfGoDmF4voFYDqFInYEoDbD4fhDoDjDYbkDYDmFYDfFIXgE4TjEoDkEYDdDYPeE4PgEoDhEYDeD4DgDoLiDoDeDoLfEoDgEYLhEIDeD4DgD4DhD4DeDoHfEYHgEYDgEYDhEYHhEIDiEIHfEIDgD4HgD4HfEYLfEYLgEILfEIHfD4HfEYLgEILhEIHfEYLgEILhEIHfEIHgD4HgD4DgEYHfEIDfD4DgD4HgEYHhEYHgEIDgEIHgEIDhEIHhEIHgEYDfEYHgEILgEIHgEILgEIHhEILgEYHhEYLhEIHfEILgEILgEIHgEIHfEIHgEIHgEIHgEIHgEIHgD4HgEYHgEIHgEIHfEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgEIHgD4HgEIHgEIHgEIHgEIHgEIHgEIHgEIHgJ1CMGAAAAHJ0Uk5TAAEDBAgKCwwNDhESExQYGRscHicpKi4yNTY3Ojs+QkRGR0lKTE1OT1JTV1haYGFnbG5xen6AgoSFiJGVlpiam56foKSpqquur7CzuLm6u73DysvMzc7P1tjZ2tvd3uHl5ujq6+zt7u/z9fb3+Pn7/P3+0O75vgAAAgNJREFUGBmlwf0/U1EAB+Dv3TWriMnSyOvGYqaQeS+FpWheRoTVkFibJt///4dU+6x77jn33nPneeAo0D2b2T4uFo+3M7PdAfiVWDmnxflKAn705SjJ9UFXxxaVtjqgJVmig1IS3owZupgx4MFco6s1E+7m6WEersboaQwuolf0dBWFsxw15OBomFqG4SBwQC0HAailqCkFtXXKvn3+Rck6lBrLtPmSfAQ0Pn1Lm3IjVEZo8yqEf4ZOKRqByjJFb1DzpELBMlT2Kfh6H/+lKdiHSpGC57Awv9OqCIVWih7DKktBK2Q9FPwIwGqOgh7IEhScQfCSggRkcYrCsHpHQRyyfoqGYJWnoB+yXoo2YBGnqBeyKG1eoOZBgaIoZKEbiooxVD38SNFNCAp52r2+hz+endImD5X3lPz8tDS3cUbJB6hMUdsUVCLUFoHSHjXtQW2Smiah1lKmlnILHKSpJQ0nDXlqyDfA0SA1DMJFhp4ycNN8Qg8nzXAVo4cYPCzS1SK8BI/o4igIT13XdHTdBQ3TdDQNHeYuHeya0BIpUakUgaYJKk1Al7FJhU0D2touKblsgw8pSlLwZZU2q/CnqUBBoQk+DVAwAN8WaLEA/4KHrDkMog6dFVZVOlGXNKvSqI+5w792TNSpvcRbpXbUbZy3xlE/I0tmDdxB+OIijDsZHYW738eUA/7Ua3mqAAAAAElFTkSuQmCC"},pRNm:function(t,e){t.exports=VueRouter}},["NHnr"]);
//# sourceMappingURL=app.fad1337bf845a7c5a941.js.map