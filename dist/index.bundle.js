(()=>{var e={916:e=>{"use strict";e.exports=JSON.parse('{"dayArr":["","","","","2022/11/8","2022/11/7","2022/11/6","2022/11/5","2022/11/4","2022/11/3","2022/11/2","2022/11/1","2022/10/31","2022/10/30","2022/10/29","2022/10/28","2022/10/27","2022/10/26","2022/10/25","2022/10/24","2022/10/23","2022/10/22","2022/10/21","2022/10/20","2022/10/19","2022/10/18","2022/10/17","2022/10/16","2022/10/15","2022/10/14","2022/10/13","2022/10/12","2022/10/11","2022/10/10","2022/10/9","2022/10/8","2022/10/7","2022/10/6","2022/10/5","2022/10/4","2022/10/3","2022/10/2"],"totalCountArr":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"beforeDayStr1":"2022/11/8","beforeDayofweek":2}')}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{let e;new Promise((t=>{e=n(916),t("終わり")})).then((t=>{const n=document.getElementById("content");let o,l,r,a=new Date,s=(a.getMonth(),a.getDate()),g=a.getDay(),c=(a.toLocaleDateString(),a.toLocaleDateString().substring(5)),u=[["#022D10","#088D34","#3AF478","#CBFCDB"],["#8F1209","#EF1E0F","#F34A3E","#F9A49E"],["#0E0157","#1E02BC","#4727FD","#9D8CFE"],["coffee4.png","coffee3.png","coffee2.png","coffee1.png"]["skirt1.png"]],d=e.totalCountArr,m=0,i=0,y=1,b=250,k=600,p=1e3;class f{constructor(e,t,n,o){this.level1=e,this.level2=t,this.level3=n,this.level4=o}getLevel1(){return this.level1}getLevel2(){return this.level2}getLevel3(){return this.level3}getLevel4(){return this.level4}}let v,I=[new f(1,250,600,1e3),new f(250,600,1e3,2e3),new f(600,1e3,2e3,5e3),new f(1e3,2e3,5e3,1e4)];document.getElementById("levels").onchange=function(){let e=I[this.value];y=e.getLevel1(),b=e.getLevel2(),k=e.getLevel3(),p=e.getLevel4(),h(m)};for(let e=0;e<6;e++){o=document.createElement("div"),o.setAttribute("class","contentRow"),o.style.display="flex",n.appendChild(o);for(let t=0;t<7;t++)l=document.createElement("div"),l.id=10*e+t,l.setAttribute("class","contentCol"),l.style.width="100px",l.style.height="75px",l.style.marginRight="5px",l.style.marginBottom="5px",o.appendChild(l)}localStorage.getItem("beforeDay")!=c&&(localStorage.setItem("beforeDay",c),localStorage.setItem("totalCount",0));for(let e=g;e>=0;e--){v=document.getElementById(e),v.style.background="#022D10";let t=document.createElement("p");t.innerHTML=c,v.appendChild(t),contentHoverElemet=document.createElement("div"),contentHoverElemetText=document.createElement("p"),contentHoverElemetText.innerHTML=c+"<br>"+d[e]+"コード",contentHoverElemet.classList.add("hovercss"),contentHoverElemet.appendChild(contentHoverElemetText),v.appendChild(contentHoverElemet),s=a.setDate(a.getDate()-1),c=a.toLocaleDateString().substring(5)}for(let e=1;e<6;e++)for(let t=6;t>=0;t--)v=document.getElementById(10*e+t),v.innerHTML=c,v.style.backgroundColor="#dcdcdc",innner=7*(e-1)+1+-1*t+7-1+g,console.log(innner),contentHoverElemet=document.createElement("div"),contentHoverElemetText=document.createElement("p"),c=a.toLocaleDateString().substring(5),contentHoverElemetText.innerHTML=c+"<br>"+d[innner]+"コード",contentHoverElemet.classList.add("hovercss"),contentHoverElemet.appendChild(contentHoverElemetText),v.appendChild(contentHoverElemet),s=a.setDate(a.getDate()-1),c=a.toLocaleDateString().substring(5);const E=document.getElementById("touchCount");let C=0;for(let e=0;e<d.length;e++)C+=d[e];E.innerHTML=C;document.getElementById("medal").src=C>=2e4?"../images/medal_ribbon_gold_illust_528.png":C>=8e3?"../images/medal_ribbon_silver_illust_529.png":"../images/medal_ribbon_bronze_illust_530.png";for(let e=6;e>=0;e--)r=document.getElementById(e),e<=g?d[i]>=p?r.style.backgroundColor=u[m][0]:d[i]>=k?r.style.backgroundColor=u[m][1]:d[i]>=b?r.style.backgroundColor=u[m][2]:d[i]>=y?r.style.backgroundColor=u[m][3]:r.style.backgroundColor="#dcdcdc":r.style.backgroundColor="transparent",i++;for(let e=1;e<6;e++)for(let t=6;t>=0;t--)r=document.getElementById(10*e+t),d[i]>=p?r.style.backgroundColor=u[m][0]:d[i]>=k?r.style.backgroundColor=u[m][1]:d[i]>=b?r.style.backgroundColor=u[m][2]:d[i]>=y?r.style.backgroundColor=u[m][3]:r.style.backgroundColor="#dcdcdc",i++;function h(e){i=0;for(let t=6;t>=0;t--)r=document.getElementById(t),t<=g?3==e?(d[i]>=p?r.style.backgroundImage="url(../images/coffee4.png)":d[i]>=k?r.style.backgroundImage="url(../images/coffee3.png)":d[i]>=b?r.style.backgroundImage="url(../images/coffee2.png)":d[i]>=y?r.style.backgroundImage="url(../images/coffee1.png)":r.style.backgroundImage="url(../images/coffee5.png)",r.style.color="black",r.style.backgroundRepeat="no-repeat",r.style.backgroundPosition="center",r.style.backgroundColor="transparent"):4==e?(d[i]>=p?r.style.backgroundImage="url(../images/skirt5.png)":d[i]>=k?r.style.backgroundImage="url(../images/skirt1.png)":d[i]>=b?r.style.backgroundImage="url(../images/skirt2.png)":d[i]>=y?r.style.backgroundImage="url(../images/skirt3.png)":r.style.backgroundImage="url(../images/skirt4.png)",r.style.color="black",r.style.backgroundRepeat="no-repeat",r.style.backgroundPosition="center",r.style.backgroundColor="transparent"):5==e?(d[i]>=p?r.style.backgroundImage="url(../images/pantsu5.png)":d[i]>=k?r.style.backgroundImage="url(../images/pantsu1.png)":d[i]>=b?r.style.backgroundImage="url(../images/pantsu2.png)":d[i]>=y?r.style.backgroundImage="url(../images/pantsu3.png)":r.style.backgroundImage="url(../images/pantsu4.png)",r.style.color="black",r.style.backgroundRepeat="no-repeat",r.style.backgroundPosition="center",r.style.backgroundColor="transparent"):(d[i]>=p?r.style.background=u[e][0]:d[i]>=k?r.style.background=u[e][1]:d[i]>=b?r.style.background=u[e][2]:d[i]>=y?r.style.background=u[e][3]:r.style.background="#dcdcdc",r.style.color="white"):r.style.backgroundColor="transparent",i++;for(let t=1;t<6;t++)for(let n=6;n>=0;n--)r=document.getElementById(10*t+n),3==e?(d[i]>=p?r.style.backgroundImage="url(../images/coffee4.svg)":d[i]>=k?r.style.backgroundImage="url(../images/coffee3.svg)":d[i]>=b?r.style.backgroundImage="url(../images/coffee2.svg)":d[i]>=y?r.style.backgroundImage="url(../images/coffee1.svg)":r.style.backgroundImage="url(../images/coffee5.png)",r.style.color="black",r.style.backgroundRepeat="no-repeat",r.style.backgroundPosition="center",r.style.backgroundColor="transparent"):4==e?(d[i]>=p?r.style.backgroundImage="url(../images/skirt5.png)":d[i]>=k?r.style.backgroundImage="url(../images/skirt1.png)":d[i]>=b?r.style.backgroundImage="url(../images/skirt2.png)":d[i]>=y?r.style.backgroundImage="url(../images/skirt3.png)":r.style.backgroundImage="url(../images/skirt4.png)",r.style.color="black",r.style.backgroundRepeat="no-repeat",r.style.backgroundPosition="center",r.style.backgroundColor="transparent"):5==e?(d[i]>=p?r.style.backgroundImage="url(../images/pantsu5.png)":d[i]>=k?r.style.backgroundImage="url(../images/pantsu1.png)":d[i]>=b?r.style.backgroundImage="url(../images/pantsu2.png)":d[i]>=y?r.style.backgroundImage="url(../images/pantsu3.png)":r.style.backgroundImage="url(../images/pantsu4.png)",r.style.color="black",r.style.backgroundRepeat="no-repeat",r.style.backgroundPosition="center",r.style.backgroundColor="transparent"):(d[i]>=p?r.style.background=u[e][0]:d[i]>=k?r.style.background=u[e][1]:d[i]>=b?r.style.background=u[e][2]:d[i]>=y?r.style.background=u[e][3]:r.style.background="#dcdcdc",r.style.color="white"),i++}document.getElementById("color").onchange=function(){let e=document.getElementById("color");switch(m=this.value,console.log(m),h(this.value),m){case"0":e.style.color="green";break;case"1":e.style.color="red";break;case"2":e.style.color="blue";break;default:e.style.color="black"}}}))})()})();