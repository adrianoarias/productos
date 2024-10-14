(function(){"use strict";var t={7923:function(t,e,r){var a=r(5130),n=r(6768);const c={id:"app"};function s(t,e,r,a,s,o){const i=(0,n.g2)("CharacterList");return(0,n.uX)(),(0,n.CE)("div",c,[(0,n.bF)(i)])}var o=r(4232);const i={class:"skibidi-container"},u={class:"search-container"},l={key:0,class:"loading"},h={class:"character-list"},d=["src","alt"],f={class:"pagination"},p=["disabled"],v=["disabled"];function g(t,e,r,c,s,g){return(0,n.uX)(),(0,n.CE)("div",i,[e[8]||(e[8]=(0,n.Lk)("h1",{class:"title"},"Rick and Morty Characters",-1)),(0,n.Lk)("div",u,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.searchQuery=t),placeholder:"Search by name...",onInput:e[1]||(e[1]=(...t)=>g.fetchCharacters&&g.fetchCharacters(...t)),class:"search-input"},null,544),[[a.Jo,s.searchQuery]]),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>s.selectedStatus=t),onChange:e[3]||(e[3]=(...t)=>g.fetchCharacters&&g.fetchCharacters(...t)),class:"status-filter"},e[6]||(e[6]=[(0,n.Lk)("option",{value:""},"All",-1),(0,n.Lk)("option",{value:"alive"},"Alive",-1),(0,n.Lk)("option",{value:"dead"},"Dead",-1),(0,n.Lk)("option",{value:"unknown"},"Unknown",-1)]),544),[[a.u1,s.selectedStatus]])]),0===s.characters.length?((0,n.uX)(),(0,n.CE)("div",l," Loading characters... ")):(0,n.Q3)("",!0),(0,n.Lk)("div",h,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(g.filteredCharacters,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.id,class:"character-card"},[(0,n.Lk)("img",{src:t.image,alt:t.name},null,8,d),(0,n.Lk)("h3",null,(0,o.v_)(t.name),1),(0,n.Lk)("p",null,[e[7]||(e[7]=(0,n.eW)("Status: ")),(0,n.Lk)("span",{class:(0,o.C4)(t.status.toLowerCase())},(0,o.v_)(t.status),3)])])))),128))]),(0,n.Lk)("div",f,[(0,n.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>g.prevPage&&g.prevPage(...t)),disabled:!s.prevUrl,class:"pagination-button"},"Previous",8,p),(0,n.Lk)("button",{onClick:e[5]||(e[5]=(...t)=>g.nextPage&&g.nextPage(...t)),disabled:!s.nextUrl,class:"pagination-button"},"Next",8,v)])])}var y=r(4373),b={data(){return{characters:[],currentPage:1,nextUrl:null,prevUrl:null,searchQuery:"",selectedStatus:""}},mounted(){this.fetchCharacters()},computed:{filteredCharacters(){return this.characters.filter((t=>{const e=t.name.toLowerCase().includes(this.searchQuery.toLowerCase()),r=!this.selectedStatus||t.status.toLowerCase()===this.selectedStatus;return e&&r}))}},methods:{async fetchCharacters(){try{const t=await y.A.get("https://rickandmortyapi.com/api/character",{params:{page:this.currentPage,name:this.searchQuery||void 0,status:this.selectedStatus||void 0}});this.characters=t.data.results,this.nextUrl=t.data.info.next,this.prevUrl=t.data.info.prev}catch(t){console.error("Error fetching characters:",t)}},nextPage(){this.nextUrl&&(this.currentPage++,this.fetchCharacters())},prevPage(){this.prevUrl&&(this.currentPage--,this.fetchCharacters())}}},k=r(1241);const C=(0,k.A)(b,[["render",g],["__scopeId","data-v-3898589b"]]);var m=C,L={name:"App",components:{CharacterList:m}};const w=(0,k.A)(L,[["render",s]]);var x=w;(0,a.Ef)(x).mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var c=e[a]={exports:{}};return t[a].call(c.exports,c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,c){if(!a){var s=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],c=t[l][2];for(var o=!0,i=0;i<a.length;i++)(!1&c||s>=c)&&Object.keys(r.O).every((function(t){return r.O[t](a[i])}))?a.splice(i--,1):(o=!1,c<s&&(s=c));if(o){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}c=c||0;for(var l=t.length;l>0&&t[l-1][2]>c;l--)t[l]=t[l-1];t[l]=[a,n,c]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,c,s=a[0],o=a[1],i=a[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(i)var l=i(r)}for(e&&e(a);u<s.length;u++)c=s[u],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(l)},a=self["webpackChunkproyectorickymorty"]=self["webpackChunkproyectorickymorty"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(7923)}));a=r.O(a)})();
//# sourceMappingURL=app.76293d83.js.map