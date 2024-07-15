import{a as h,i as b,S as x}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const a={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};function L(s,t){const r=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${s}&image_type=${a.image_type}&orientation=${a.orientation}&safesearch=${a.safesearch}&page=${t}&per_page=${a.per_page}`;return h.get(r).then(e=>e.data).catch(e=>{throw console.error("Error fetching data:",e),new Error(e.response?e.response.status:e.message)})}function l(){b.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const S=document.querySelector(".main-list");let q=new x(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function P(s){S.insertAdjacentHTML("beforeend",$(s.hits));const i=document.querySelector(".gallery-item").getBoundingClientRect();console.log("rect.key"),console.log(i.height),window.scrollBy({top:i.height*2,behavior:"smooth"}),q.refresh()}function $(s){return s.map(({webformatURL:t,largeImageURL:i,tags:r,likes:e,views:o,comments:n,downloads:g})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${i}>
                <img
                  class="gallery-image"
                  src=${t}
                  alt=${r}

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
                  <p class="text-item">${n}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${g}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const d=document.querySelector(".loader"),y=document.querySelector(".input-query"),w=document.querySelector("#btn-submit"),m=document.querySelector(".js-btn-addload");w.addEventListener("click",f);m.addEventListener("click",v);let c="",p=1,u=0;async function f(s){s&&(s.preventDefault(),c=y.value.replace(/\s+/g,"+").toLowerCase(),document.querySelector(".main-list").innerHTML="",document.querySelector(".js-text-addload").style.display="none",p=1,u=0),d.style.display="inline-block",L(c,p).then(t=>{if(d.style.display="none",!c.trim()){l(),document.querySelector(".main-list").innerHTML="";return}t.totalHits===0?l():u===t.totalHits?(m.style.display="none",document.querySelector(".js-text-addload").style.display="block"):(P(t),m.style.display="block"),u+=t.hits.length}).catch(l).finally(()=>{y.value=""})}function v(){p+=1,f()}
//# sourceMappingURL=commonHelpers.js.map
