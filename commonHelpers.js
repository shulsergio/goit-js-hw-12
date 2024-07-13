import{i as h,S as b}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const c={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"3"};function x(s,t){console.log("query- ",s),console.log("pages in pixabay=",t);const i=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${s}&image_type=${c.image_type}&orientation=${c.orientation}&safesearch=${c.safesearch}&page=${t}&per_page=${c.per_page}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u(){h.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const q=document.querySelector(".main-list");let L=new b(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function S(s){console.log("data"),console.log(s),q.insertAdjacentHTML("beforeend",P(s.hits)),L.refresh()}function P(s){return s.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:o,comments:r,downloads:g})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${a}>
                <img
                  class="gallery-image"
                  src=${t}
                  alt=${i}

                />
              </a>
              <ul class="adds-list">
                <li class="info-item">
                  <p class="text-item text-item-name">Likes</p>
                  <p class="text-item">${e}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Views</p>
                  <p class="text-item">${o}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Comments</p>
                  <p class="text-item">${r}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${g}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const d=document.querySelector(".loader"),y=document.querySelector(".input-query"),$=document.querySelector("#btn-submit"),m=document.querySelector(".js-btn-addload");$.addEventListener("click",f);m.addEventListener("click",w);let n="",l=1,p=0;function f(s){s&&(s.preventDefault(),n=y.value.replace(/\s+/g,"+").toLowerCase(),document.querySelector(".main-list").innerHTML="",document.querySelector(".js-text-addload").style.display="none",l=1,p=0),d.style.display="inline-block",console.log("queryData- ",n),x(n,l).then(t=>{if(d.style.display="none",!n.trim()){u(),document.querySelector(".main-list").innerHTML="";return}t.totalHits===0?u():p===t.totalHits?(m.style.display="none",document.querySelector(".js-text-addload").style.display="block"):(S(t),m.style.display="block"),p+=t.hits.length}).catch(u).finally(()=>{y.value=""})}function w(){console.log("pages before =,",l),l+=1,console.log("pages after +1 =,",l),console.log("queryData,",n),f()}
//# sourceMappingURL=commonHelpers.js.map
