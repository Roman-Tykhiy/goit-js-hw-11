import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(s){return fetch(s).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
        <img
        class="gallery-image"
        src="${r}" 
        data-source="${i}"
        alt="${o}"
        width="360"
    />
    <div class="item-container">
        <p class="text">Likes <span>${e}</span></p>
        <p class="text">Views <span>${t}</span></p>
        <p class="text">Comments <span>${n}</span></p>
        <p class="text">Downloads <span>${u}</span></p>
    </div></a>
     
    </li>`).join("")}const m=new p(".gallery-item a",{captionsData:"alt",captionDelay:"250"}),h=document.querySelector(".form"),l=document.querySelector(".list"),c=document.querySelector(".loader"),y="47389076-066c089ec4ce8fe31e83dc6f8";h.addEventListener("submit",g);function g(s){s.preventDefault(),c.style.visibility="visible";const r=s.target.elements.input.value.trim();if(r.length<1)return a.show({title:"",message:"Please enter the searh",backgroundColor:"red",messageColor:"#fff",position:"topRight"});const o=`https://pixabay.com/api/?${new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;f(o).then(e=>{if(e.total===0)return l.innerHTML="",a.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"#fff",position:"topRight"});l.innerHTML=d(e.hits),m.refresh()}).catch(e=>{console.log(e)}).finally(()=>{c.style.visibility="hidden",s.target.reset()})}
//# sourceMappingURL=index.js.map
