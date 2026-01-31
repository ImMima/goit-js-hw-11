import{a as u,S as p,i as n}from"./assets/vendor-dgoA7Xew.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y=s=>u.get(m,{params:{key:"54455311-030751af506b74e799c74bea1",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data),d=document.querySelector(".loader"),f=document.querySelector(".gallery"),g=s=>{const o=s.map(r=>`
<li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" width="360" height="200" />
        <div class="gallery-item-info"> 
            <div class="info-cell">
                <div class="info-cell-title">Likes</div>
                <span> ${r.likes}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Views</div>
                <span> ${r.views}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Comments</div>
                <span> ${r.comments}</span>
            </div>
            <div class="info-cell">
                <div class="info-cell-title">Downloads</div>
                <span> ${r.downloads}</span>
            </div>   
        </div>    
    </a>
</li>`).join("");f.innerHTML=o,new p(".gallery a")},h=()=>{f.innerHTML=""},v=()=>{d.hidden=!1},a=()=>{d.hidden=!0},c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=c.querySelector("input[name='search-text']").value.trim();r&&(h(),v(),y(r).then(i=>{const e=i.hits;if(a(),!Array.isArray(e)||!e.length){n.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconColor:"#fff",messageColor:"#fafafb",titleColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"});return}g(e)}).catch(i=>{a(),n.error({title:"Unknown error",message:i.message,position:"topRight",iconColor:"#fff",messageColor:"#fafafb",titleColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B"})}))});
//# sourceMappingURL=index.js.map
