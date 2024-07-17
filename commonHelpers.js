import{a as x,i as q,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const n={key:"36975970-2726c7257b1c2078714098d3d",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};async function S(r,t){const s=`https://pixabay.com/api/?key=36975970-2726c7257b1c2078714098d3d&q=${r}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}&page=${t}&per_page=${n.per_page}`;try{return(await x.get(s)).data}catch(e){throw console.error("Error fetching data:",e),new Error(e.response?e.response.status:e.message)}}function u(){q.show({backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const w=document.querySelector(".main-list");let P=new L(".main-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(r,t){if(w.insertAdjacentHTML("beforeend",$(r.hits)),t){const s=document.querySelector(".gallery-item").getBoundingClientRect();console.log("rect.key"),console.log(s.height),window.scrollBy({top:s.height*2,behavior:"smooth"})}P.refresh()}function $(r){return r.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:o,comments:i,downloads:b})=>`<li class="gallery-item">
            <div class="list-clock">
              <a class="gallery-link" href=${a}>
                <img
                  class="gallery-image"
                  src=${t}
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
                  <p class="text-item">${o}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Comments</p>
                  <p class="text-item">${i}</p>
                </li>
                <li class="info-item">
                  <p class="text-item text-item-name">Downloads</p>
                  <p class="text-item">${b}</p>
                </li>
              </ul>
            </div>
          </li>`).join("")}const f=document.querySelector(".loader"),p=document.querySelector(".input-query"),v=document.querySelector("#btn-submit"),l=document.querySelector(".js-btn-addload");v.addEventListener("click",h);l.addEventListener("click",C);let g="",m=1,d=0,c=0;async function h(r){if(r){if(r.preventDefault(),!p.value.trim()){document.querySelector(".main-list").innerHTML="",document.querySelector(".input-query").innerHTML="",u();return}g=p.value.replace(/\s+/g,"+").toLowerCase(),document.querySelector(".main-list").innerHTML="",document.querySelector(".js-text-addload").style.display="none",m=1,c=0,d=0}f.style.display="inline-block";try{const t=await S(g,m);f.style.display="none",t.totalHits===0?(u(t),l.style.display="none"):d+15>=t.totalHits?(y(t,c),l.style.display="none",document.querySelector(".js-text-addload").style.display="block"):(y(t,c),l.style.display="block"),d+=t.hits.length}catch{u()}finally{p.value=""}}async function C(){m+=1,c=1,await h()}
//# sourceMappingURL=commonHelpers.js.map
