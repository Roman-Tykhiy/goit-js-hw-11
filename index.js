import{S as p,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){return fetch(s).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img
        class="gallery-image"
        src="${r}" 
        data-source="${o}"
        alt="${i}"
        width="360"
    />
    <div class="item-container">
        <p class="text">Likes <span>${e}</span></p>
        <p class="text">Views <span>${t}</span></p>
        <p class="text">Comments <span>${n}</span></p>
        <p class="text">Downloads <span>${u}</span></p>
    </div></a>
     
    </li>`).join("")}const m=new p(".gallery-item a",{captionsData:"alt",captionDelay:"250"}),h=document.querySelector(".form"),l=document.querySelector(".list"),a=document.querySelector(".loader");a.style.visibility="hidden";const y="47389076-066c089ec4ce8fe31e83dc6f8";h.addEventListener("submit",g);function g(s){s.preventDefault(),a.style.visibility="";const r=s.target.elements.input.value.trim();setTimeout(()=>{if(r.length<1)return l.innerHTML="",a.style.visibility="hidden",c.show({title:"",message:"Please enter the searh",backgroundColor:"red",messageColor:"#fff",position:"topRight"});const i=`https://pixabay.com/api/?${new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;f(i).then(e=>{if(e.total===0)return l.innerHTML="",c.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"#fff",position:"topRight"});l.innerHTML=d(e.hits),m.refresh()}).catch(e=>{console.log(e)}).finally(()=>{a.style.visibility="hidden",s.target.reset()})},1e3)}
//# sourceMappingURL=index.js.map