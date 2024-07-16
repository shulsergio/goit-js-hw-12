import{a as x,i as q,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const r={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};function S(s,t){const n=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${s}&image_type=${r.image_type}&orientation=${r.orientation}&safesearch=${r.safesearch}&page=${t}&per_page=${r.per_page}`;return x.get(n).then(e=>e.data).catch(e=>{throw console.error("Error fetching data:",e),new Error(e.response?e.response.status:e.message)})}function d(){q.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const P=document.querySelector(".main-list");let $=new L(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s,t){if(P.insertAdjacentHTML("beforeend",v(s.hits)),t){const n=document.querySelector(".gallery-item").getBoundingClientRect();console.log("rect.key"),console.log(n.height),window.scrollBy({top:n.height*2,behavior:"smooth"})}$.refresh()}function v(s){return s.map(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:o,comments:l,downloads:b})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${i}>
                <img
                  class="gallery-image"
                  src=${t}
                  alt=${n}

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
                  <p class="text-item">${l}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${b}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const f=document.querySelector(".loader"),a=document.querySelector(".input-query"),w=document.querySelector("#btn-submit"),u=document.querySelector(".js-btn-addload");w.addEventListener("click",h);u.addEventListener("click",C);let g="",m=1,c=0,p=0;async function h(s){if(s){if(s.preventDefault(),!a.value.trim()){console.log("InputQuery.value1"),console.log(a.value),document.querySelector(".main-list").innerHTML="",document.querySelector(".input-query").innerHTML="",d();return}g=a.value.replace(/\s+/g,"+").toLowerCase(),document.querySelector(".main-list").innerHTML="",document.querySelector(".js-text-addload").style.display="none",m=1,p=0,c=0}f.style.display="inline-block",S(g,m).then(t=>{f.style.display="none",console.log("totalPhotoCreate-",c),console.log("data.hits.length-",t.hits.length),t.totalHits===0?(d(),u.style.display="none"):c+15>=t.totalHits?(y(t,p),u.style.display="none",document.querySelector(".js-text-addload").style.display="block"):(y(t,p),u.style.display="block"),c+=t.hits.length}).catch(d).finally(()=>{a.value=""})}function C(){m+=1,console.log("pages"),console.log(m),p=1,h()}
//# sourceMappingURL=commonHelpers.js.map
