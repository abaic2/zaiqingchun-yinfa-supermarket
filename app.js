const $=id=>document.getElementById(id);
const categoryOrder=['助行器系列','轮椅系列','护理床系列','血压计系列','血糖仪系列','助听器系列','按摩理疗系列','固定带系列','支具系列','呼吸机系列','雾化吸痰器系列','家用系列'];
const availableCategories=[...new Set(PRODUCTS.map(p=>p.category))];
const categories=[...categoryOrder.filter(c=>availableCategories.includes(c)),...availableCategories.filter(c=>!categoryOrder.includes(c))];
let selected='全部产品';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const catLabel=s=>s==='全部产品'?s:s.replace('系列','');
function drawCategories(){ $('categories').innerHTML=['全部产品',...categories].map(c=>`<button class="category" data-category="${c}" aria-pressed="${selected===c}"><span>${catLabel(c)}</span><span>${c==='全部产品'?PRODUCTS.length:PRODUCTS.filter(p=>p.category===c).length}</span></button>`).join(''); }
function filteredProducts(){const terms=$('search').value.toLowerCase().trim().split(/\s+/).filter(Boolean);return PRODUCTS.filter(p=>(selected==='全部产品'||p.category===selected)&&terms.every(t=>(p.name+' '+p.category+' '+p.description+' '+(p.price??'')).toLowerCase().includes(t)));}
function render(){const list=filteredProducts(),q=$('search').value.trim();$('clear').hidden=!q;$('result-title').textContent=q?'搜索结果':selected;$('result-count').textContent=`${q?'“'+q+'” · ':''}${selected==='全部产品'?'':catLabel(selected)+' · '}共 ${list.length} 款产品`;$('empty').hidden=list.length>0;$('grid').innerHTML=list.map((p,i)=>`<article class="product"><button class="product-button" data-product="${p.id}" aria-label="查看${esc(p.name)}的介绍"><img src="${p.image}" alt="${esc(p.name)}产品图册" loading="${i<4?'eager':'lazy'}" decoding="async" width="720" height="960"><span class="product-body"><span class="tag">${catLabel(p.category)}</span><span class="product-name">${esc(p.name)}</span><span class="product-desc">${esc(p.description)}</span><span class="product-foot"><span class="price ${p.price===null?'pending':''}">${p.price===null?'价格待核实':'<small>¥</small> '+p.price}</span><span class="view">详情 <svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></span></span></span></button></article>`).join('');}
function showProduct(id){const p=PRODUCTS.find(p=>p.id===id);if(!p)return;$('detail-title').textContent=p.name;$('detail-category').textContent=p.category;$('detail-price').textContent=p.price===null?'价格待核实':'¥ '+p.price;$('detail-description').textContent=p.description;$('detail-image').src=p.image;$('detail-image').alt=p.name+'产品图册';$('detail').showModal();$('detail').scrollTop=0;document.body.classList.add('modal-open');}
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;selected=b.dataset.category;drawCategories();render();});
$('search').addEventListener('input',render);
$('clear').onclick=()=>{$('search').value='';render();$('search').focus();};
document.querySelectorAll('.suggest').forEach(b=>b.onclick=()=>{selected='全部产品';$('search').value=b.dataset.q;drawCategories();render();});
$('reset').onclick=()=>{selected='全部产品';$('search').value='';drawCategories();render();};
$('grid').onclick=e=>{const b=e.target.closest('[data-product]');if(b)showProduct(Number(b.dataset.product));};
$('close').onclick=()=>$('detail').close();
$('detail').addEventListener('close',()=>document.body.classList.remove('modal-open'));
$('detail').addEventListener('click',e=>{if(e.target===$('detail')){const r=$('detail').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('detail').close();}});
$('detail-store').onclick=()=>{$('detail').close();$('store').scrollIntoView({behavior:'smooth'});};
document.querySelector('.catalog-stat strong').textContent=PRODUCTS.length;
document.querySelector('.catalog-stat span').textContent=`${categories.length} 个品类 · 按需查找`;
document.querySelector('.category-heading>span').textContent=`${categories.length} 类`;
drawCategories();render();
