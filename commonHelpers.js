import{i as f,S as d}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let y=1;const n={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"33"};function g(o){const r=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${o}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}&page=${y}&per_page=${n.per_page}`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function l(){f.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const c=document.querySelector(".main-list");let h=new d(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(o){c.innerHTML="",console.log(o),c.insertAdjacentHTML("beforeend",b(o.hits)),h.refresh()}function b(o){return o.map(({webformatURL:i,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:m})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${r}>
                <img
                  class="gallery-image"
                  src=${i}
                  alt=${s}

                />
              </a>
              <ul class="adds-list">
                <li class="info-item">
                  <p class="text-item text-item-name">Likes</p>
                  <p class="text-item">${e}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Views</p>
                  <p class="text-item">${t}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Comments</p>
                  <p class="text-item">${a}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${m}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const p=document.querySelector(".loader"),u=document.querySelector(".input-query"),$=document.querySelector("#btn-submit");$.addEventListener("click",L);function L(o){p.style.display="inline-block",o.preventDefault();let i=u.value.replace(/\s+/g,"+").toLowerCase();g(i).then(r=>{p.style.display="none",r.totalHits===0?l():x(r)}).catch(l).finally(()=>{u.value=""})}
//# sourceMappingURL=commonHelpers.js.map
