(()=>{var e={349:e=>{"use strict";e.exports=JSON.parse('{"dayArr":["","","2022/10/27","2022/10/26","2022/10/25","2022/10/24","2022/10/23","2022/10/22","2022/10/21","2022/10/20","2022/10/19","2022/10/18","2022/10/17","2022/10/16","2022/10/15","2022/10/14","2022/10/13","2022/10/12","2022/10/11","2022/10/10","2022/10/9","2022/10/8","2022/10/7","2022/10/6","2022/10/5","2022/10/4","2022/10/3","2022/10/2","2022/10/1","2022/9/30","2022/9/29","2022/9/28","2022/9/27","2022/9/26","2022/9/25","2022/9/24","2022/9/23","2022/9/22","2022/9/21","2022/9/20","2022/9/19","2022/9/18"],"totalCountArr":[0,0,1781,1834,986,464,0,0,600,2193,2813,2008,26,0,0,930,841,1143,1106,0,0,0,339,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"beforeDayStr1":"2022/10/27","beforeDayofweek":4}')}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}(()=>{let e;new Promise((t=>{e=o(349),t("終わり")})).then((t=>{const o=document.getElementById("content");let r,a,n,l=new Date,g=l.getDate(),s=l.getDay(),c=(l.toLocaleDateString(),l.toLocaleDateString().substring(5)),u=[["#022D10","#088D34","#3AF478","#CBFCDB"],["#8F1209","#EF1E0F","#F34A3E","#F9A49E"],["#0E0157","#1E02BC","#4727FD","#9D8CFE"],["coffee4.png","coffee3.png","coffee2.png","coffee1.png"]["skirt1.png"]],d=250,y=600,k=1e3;for(let e=0;e<6;e++){r=document.createElement("div"),r.setAttribute("class","contentRow"),r.style.display="flex",o.appendChild(r);for(let t=0;t<7;t++)a=document.createElement("div"),a.id=10*e+t,a.setAttribute("class","contentCol"),a.style.width="100px",a.style.height="75px",a.style.marginRight="5px",a.style.marginBottom="5px",r.appendChild(a)}localStorage.getItem("beforeDay")!=c&&(localStorage.setItem("beforeDay",c),localStorage.setItem("totalCount",0));for(let e=s;e>=0;e--)n=document.getElementById(e),n.innerHTML=c,n.style.background="#022D10",g=l.setDate(l.getDate()-1),c=l.toLocaleDateString().substring(5);for(let e=1;e<6;e++)for(let t=6;t>=0;t--)n=document.getElementById(10*e+t),n.innerHTML=c,n.style.backgroundColor="#dcdcdc",g=l.setDate(l.getDate()-1),c=l.toLocaleDateString().substring(5);let m=e.totalCountArr;const b=document.getElementById("touchCount");let i=0;console.log("test");for(let e=0;e<m.length;e++)i+=m[e];b.innerHTML=i;let p,f=0;for(let e=6;e>=0;e--)p=document.getElementById(e),e<=s?m[f]>=k?p.style.backgroundColor=u[0][0]:m[f]>=y?p.style.backgroundColor=u[0][1]:m[f]>=d?p.style.backgroundColor=u[0][2]:m[f]>=1?p.style.backgroundColor=u[0][3]:p.style.backgroundColor="#dcdcdc":p.style.backgroundColor="transparent",f++;for(let e=1;e<6;e++)for(let t=6;t>=0;t--)p=document.getElementById(10*e+t),m[f]>=k?p.style.backgroundColor=u[0][0]:m[f]>=y?p.style.backgroundColor=u[0][1]:m[f]>=d?p.style.backgroundColor=u[0][2]:m[f]>=1?p.style.backgroundColor=u[0][3]:p.style.backgroundColor="#dcdcdc",f++;document.getElementById("color").onchange=function(){!function(e){f=0;for(let t=6;t>=0;t--)p=document.getElementById(t),t<=s?3==e?(m[f]>=k?p.style.backgroundImage="url(../images/coffee4.png)":m[f]>=y?p.style.backgroundImage="url(../images/coffee3.png)":m[f]>=d?p.style.backgroundImage="url(../images/coffee2.png)":m[f]>=1?p.style.backgroundImage="url(../images/coffee1.png)":p.style.backgroundImage="url(../images/coffee5.png)",p.style.color="black",p.style.backgroundRepeat="no-repeat",p.style.backgroundPosition="center",p.style.backgroundColor="transparent"):4==e?(m[f]>=k?p.style.backgroundImage="url(../images/skirt5.png)":m[f]>=y?p.style.backgroundImage="url(../images/skirt1.png)":m[f]>=d?p.style.backgroundImage="url(../images/skirt2.png)":m[f]>=1?p.style.backgroundImage="url(../images/skirt3.png)":p.style.backgroundImage="url(../images/skirt4.png)",p.style.color="black",p.style.backgroundRepeat="no-repeat",p.style.backgroundPosition="center",p.style.backgroundColor="transparent"):5==e?(m[f]>=k?p.style.backgroundImage="url(../images/pantsu5.png)":m[f]>=y?p.style.backgroundImage="url(../images/pantsu1.png)":m[f]>=d?p.style.backgroundImage="url(../images/pantsu2.png)":m[f]>=1?p.style.backgroundImage="url(../images/pantsu3.png)":p.style.backgroundImage="url(../images/pantsu4.png)",p.style.color="black",p.style.backgroundRepeat="no-repeat",p.style.backgroundPosition="center",p.style.backgroundColor="transparent"):(m[f]>=k?p.style.background=u[e][0]:m[f]>=y?p.style.background=u[e][1]:m[f]>=d?p.style.background=u[e][2]:m[f]>=1?p.style.background=u[e][3]:p.style.background="#dcdcdc",p.style.color="white"):p.style.backgroundColor="transparent",f++;for(let t=1;t<6;t++)for(let o=6;o>=0;o--)p=document.getElementById(10*t+o),3==e?(m[f]>=k?p.style.backgroundImage="url(../images/coffee4.svg)":m[f]>=y?p.style.backgroundImage="url(../images/coffee3.svg)":m[f]>=d?p.style.backgroundImage="url(../images/coffee2.svg)":m[f]>=1?p.style.backgroundImage="url(../images/coffee1.svg)":p.style.backgroundImage="url(../images/coffee5.png)",p.style.color="black",p.style.backgroundRepeat="no-repeat",p.style.backgroundPosition="center",p.style.backgroundColor="transparent"):4==e?(m[f]>=k?p.style.backgroundImage="url(../images/skirt5.png)":m[f]>=y?p.style.backgroundImage="url(../images/skirt1.png)":m[f]>=d?p.style.backgroundImage="url(../images/skirt2.png)":m[f]>=1?p.style.backgroundImage="url(../images/skirt3.png)":p.style.backgroundImage="url(../images/skirt4.png)",p.style.color="black",p.style.backgroundRepeat="no-repeat",p.style.backgroundPosition="center",p.style.backgroundColor="transparent"):5==e?(m[f]>=k?p.style.backgroundImage="url(../images/pantsu5.png)":m[f]>=y?p.style.backgroundImage="url(../images/pantsu1.png)":m[f]>=d?p.style.backgroundImage="url(../images/pantsu2.png)":m[f]>=1?p.style.backgroundImage="url(../images/pantsu3.png)":p.style.backgroundImage="url(../images/pantsu4.png)",p.style.color="black",p.style.backgroundRepeat="no-repeat",p.style.backgroundPosition="center",p.style.backgroundColor="transparent"):(m[f]>=k?p.style.background=u[e][0]:m[f]>=y?p.style.background=u[e][1]:m[f]>=d?p.style.background=u[e][2]:m[f]>=1?p.style.background=u[e][3]:p.style.background="#dcdcdc",p.style.color="white"),f++}(this.value)}}))})()})();