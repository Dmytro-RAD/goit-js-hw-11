import{a as d,S as m,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=d.create({baseURL:"https://pixabay.com/api/",params:{key:"50331031-463f70f86d851a00b481c2fad",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function y(i){return p.get("",{params:{q:i}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function g({webformatURL:i,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:s}){return`<li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${i}"
        alt="${o}"
        width="360"
        height="200"
      />
    </a>
    <div class="info">
  <div class="info-item">
    <p class="text-info">Likes</p>
    <p class="value-info">${n}</p>
  </div>
  <div class="info-item">
    <p class="text-info">Views</p>
    <p class="value-info">${e}</p>
  </div>
  <div class="info-item">
    <p class="text-info">Comments</p>
    <p class="value-info">${t}</p>
  </div>
  <div class="info-item">
    <p class="text-info">Downloads</p>
    <p class="value-info">${s}</p>
  </div>
</div>

  </li>`}function h(i){return i.map(g).join("")}function v(i){u();try{const r=h(i);l.innerHTML=r,L()}finally{f()}}function L(){new m(".gallery a").on("show.simplelightbox",function(){})}function w(){l.innerHTML=""}function u(){c.hidden=!1}function f(){c.hidden=!0}const b=document.querySelector(".form"),q=document.querySelector(".input-form");b.addEventListener("submit",i=>{i.preventDefault();const r=q.value.trim();if(!r){a.show({message:"Please enter a search query!",color:"yellow"});return}w(),u(),y(r).then(o=>{if(o.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",imageWidth:24});return}v(o.hits)}).catch(o=>{a.show({message:`Error fetching images: ${o.message}`,color:"red"})}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map
