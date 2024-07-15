import{a as h,i as b,S as x}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const c={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"3"};function q(s,t){console.log("query- ",s),console.log("pages in pixabay=",t);const a=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${s}&image_type=${c.image_type}&orientation=${c.orientation}&safesearch=${c.safesearch}&page=${t}&per_page=${c.per_page}`;return h.get(a).then(e=>e.data).catch(e=>{throw console.error("Error fetching data:",e),new Error(e.response?e.response.status:e.message)})}function u(){b.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const L=document.querySelector(".main-list");let S=new x(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function P(s){console.log("data"),console.log(s),L.insertAdjacentHTML("beforeend",$(s.hits)),S.refresh()}function $(s){return s.map(({webformatURL:t,largeImageURL:l,tags:a,likes:e,views:o,comments:i,downloads:g})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${l}>
                <img
                  class="gallery-image"
                  src=${t}
                  alt=${a}

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
                  <p class="text-item">${i}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${g}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const d=document.querySelector(".loader"),y=document.querySelector(".input-query"),w=document.querySelector("#btn-submit"),m=document.querySelector(".js-btn-addload");w.addEventListener("click",f);m.addEventListener("click",D);let n="",r=1,p=0;async function f(s){s&&(s.preventDefault(),n=y.value.replace(/\s+/g,"+").toLowerCase(),document.querySelector(".main-list").innerHTML="",document.querySelector(".js-text-addload").style.display="none",r=1,p=0),d.style.display="inline-block",console.log("queryData- ",n),q(n,r).then(t=>{if(d.style.display="none",!n.trim()){u(),document.querySelector(".main-list").innerHTML="";return}t.totalHits===0?u():p===t.totalHits?(m.style.display="none",document.querySelector(".js-text-addload").style.display="block"):(P(t),m.style.display="block"),p+=t.hits.length}).catch(u).finally(()=>{y.value=""})}function D(){console.log("pages before =,",r),r+=1,console.log("pages after +1 =,",r),console.log("queryData,",n),f()}
//# sourceMappingURL=commonHelpers.js.map
