(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const CART_KEY = 'zqc-shopping-list-v1';
  const FONT_KEY = 'zqc-large-text-v1';
  const SITE = 'https://abaic2.github.io/zaiqingchun-yinfa-supermarket/';
  const entryProductId = new URL(location.href).searchParams.get('product');
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent || '');
  const ADDRESS = '山西省临汾市尧都区功臣御苑一期西门，再青春银发超市';
  const products = new Map(PRODUCTS.map(p => [p.id, p]));
  let currentProduct = null;
  let feedbackTimer;
  let storageAvailable = true;
  function read(key) {
    try { return localStorage.getItem(key); }
    catch { storageAvailable = false; return null; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); return true; }
    catch { storageAvailable = false; return false; }
  }
  function loadCart() {
    const clean = {};
    try {
      const raw = JSON.parse(read(CART_KEY) || '{}');
      if (!raw || Array.isArray(raw) || typeof raw !== 'object') return clean;
      for (const [key, value] of Object.entries(raw)) {
        const id = Number(key);
        if (/^\d+$/.test(key) && products.has(id) && Number.isInteger(value) && value > 0)
          clean[id] = Math.min(value, 99);
      }
    } catch { /* A damaged saved list must not prevent browsing. */ }
    return clean;
  }
  let cart = loadCart();
  function notify(message) {
    document.querySelectorAll('[data-feedback]').forEach(el => { el.textContent = message; });
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(() => {
      document.querySelectorAll('[data-feedback]').forEach(el => { el.textContent = ''; });
    }, 4500);
  }
  function syncModal() {
    document.body.classList.toggle('modal-open', Boolean(document.querySelector('dialog[open]')));
  }
  function openDialog(dialog) {
    if (!dialog.open) dialog.showModal();
    syncModal();
  }
  function cleanProductURL() {
    const url = new URL(location.href);
    url.searchParams.delete('product');
    history.replaceState(null, '', url.href);
  }
  function productURL(id) {
    const url = new URL(SITE);
    url.searchParams.set('product', id);
    return url.href;
  }
  function applyFont(enabled) {
    document.documentElement.classList.toggle('large-text', enabled);
    byId('large-text').setAttribute('aria-pressed', String(enabled));
    byId('large-text').textContent = enabled ? '大字模式：已开' : '大字模式';
  }
  applyFont(read(FONT_KEY) === '1');
  byId('large-text').onclick = () => {
    const enabled = !document.documentElement.classList.contains('large-text');
    applyFont(enabled);
    if (!save(FONT_KEY, enabled ? '1' : '0')) notify('已切换字号；当前浏览器无法记住设置。');
  };
  function rows() {
    return Object.entries(cart).map(([id, quantity]) => ({ product: products.get(Number(id)), quantity }));
  }
  function money(value) { return '¥ ' + Number(value.toFixed(2)).toLocaleString('zh-CN'); }
  function updateList() {
    const items = rows();
    const count = items.reduce((n, row) => n + row.quantity, 0);
    const unknown = items.some(row => row.product.price === null);
    const total = items.reduce((n, row) => n + (row.product.price ?? 0) * row.quantity, 0);
    document.querySelectorAll('[data-list-count]').forEach(el => { el.textContent = count; });
    byId('list-empty').hidden = count > 0;
    byId('copy-list').disabled = !count;
    byId('clear-list').disabled = !count;
    byId('list-summary').textContent = `${items.length} 款商品，共 ${count} 件`;
    byId('list-total').textContent = money(total) + (unknown ? '（另有待询价商品）' : '');
    byId('list-storage-note').textContent = storageAvailable
      ? '清单保存在当前设备的此浏览器中，到店后可直接给店员看。'
      : '当前浏览器无法保存清单，关闭页面前请复制清单留存。';
    byId('list-items').innerHTML = items.map(({product: p, quantity}) => `
      <article class="list-row" data-list-row="${p.id}">
        <img src="${esc(thumbnail(p))}" alt="${esc(p.name)}" width="72" height="96" loading="lazy">
        <div class="list-row-main"><button class="list-product-name" data-list-open="${p.id}">${esc(p.name)}</button>
          <p class="list-unit-price">${p.price === null ? '价格待核实' : money(p.price) + ' / 件'}</p>
          <div class="quantity-controls"><button data-quantity="${p.id}" data-delta="-1" aria-label="减少${esc(p.name)}数量" ${quantity <= 1 ? 'disabled' : ''}>−</button>
            <span aria-label="数量">${quantity}</span><button data-quantity="${p.id}" data-delta="1" aria-label="增加${esc(p.name)}数量" ${quantity >= 99 ? 'disabled' : ''}>＋</button>
            <button class="remove-item" data-remove="${p.id}" aria-label="移除${esc(p.name)}">移除</button></div>
        </div><strong class="list-subtotal">${p.price === null ? '待询价' : money(p.price * quantity)}</strong>
      </article>`).join('');
    if (currentProduct) byId('detail-add').textContent = cart[currentProduct.id]
      ? `再加一件（已选 ${cart[currentProduct.id]} 件）` : '加入选购清单';
  }
  function persistCart() {
    save(CART_KEY, JSON.stringify(cart));
    updateList();
  }
  function add(id) {
    const p = products.get(id);
    if (!p) return;
    if ((cart[id] || 0) >= 99) { notify('这款商品最多可选择 99 件。'); return; }
    cart[id] = (cart[id] || 0) + 1;
    persistCart();
    notify(`已将“${p.name}”加入清单` + (storageAvailable ? '' : '，当前浏览器无法保存，请及时复制清单。'));
  }
  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add]');
    if (addButton) add(Number(addButton.dataset.add));
  });
  byId('detail-add').onclick = () => { if (currentProduct) add(currentProduct.id); };
  document.querySelectorAll('.list-trigger').forEach(button => {
    button.onclick = () => {
      if (byId('detail').open) byId('detail').close();
      updateList();
      openDialog(byId('shopping-list'));
    };
  });
  byId('close-list').onclick = byId('continue-shopping').onclick = () => byId('shopping-list').close();
  byId('clear-list').onclick = () => {
    if (window.confirm('确定清空选购清单吗？')) { cart = {}; persistCart(); notify('选购清单已清空。'); }
  };
  byId('list-items').onclick = event => {
    const quantity = event.target.closest('[data-quantity]');
    const remove = event.target.closest('[data-remove]');
    const open = event.target.closest('[data-list-open]');
    if (quantity) {
      const id = Number(quantity.dataset.quantity);
      cart[id] = Math.min(99, Math.max(1, cart[id] + Number(quantity.dataset.delta)));
      const delta = quantity.dataset.delta;
      persistCart();
      const row = document.querySelector(`[data-list-row="${id}"]`);
      const next = row.querySelector(`[data-delta="${delta}"]`);
      (next.disabled ? row.querySelector('[data-remove]') : next).focus();
    } else if (remove) {
      delete cart[Number(remove.dataset.remove)];
      persistCart();
      (document.querySelector('[data-remove]') || byId('continue-shopping')).focus();
    } else if (open) {
      byId('shopping-list').close();
      showProduct(Number(open.dataset.listOpen));
    }
  };
  async function copy(text, message) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      notify(message);
    } catch {
      byId('copy-value').value = text;
      openDialog(byId('copy-dialog'));
      byId('copy-value').focus();
      byId('copy-value').select();
    }
  }
  byId('close-copy').onclick = () => byId('copy-dialog').close();
  byId('copy-address').onclick = () => copy(ADDRESS, '门店地址已复制。');
  byId('copy-product').onclick = () => {
    if (currentProduct) copy(productURL(currentProduct.id), '单品链接已复制，可以发给家人或朋友。');
  };
  function showShareGuide(wechat) {
    byId('share-guide-text').textContent = wechat
      ? '请点击微信右上角“…” → “发送给朋友”，再选择好友并发送。无需复制链接。'
      : '当前浏览器未能打开系统分享。请使用浏览器菜单中的“分享”，若出现“微信”或“微信好友”，选择后即可发送。若没有微信选项，可在微信中打开此商品页，再通过右上角“…”发送给朋友。';
    byId('share-guide-product').textContent = currentProduct ? '正在分享：' + currentProduct.name : '';
    openDialog(byId('share-guide'));
  }
  byId('close-share-guide').onclick = byId('share-guide-done').onclick = () => byId('share-guide').close();
  byId('share-guide-copy').onclick = () => {
    if (currentProduct) copy(productURL(currentProduct.id), '单品链接已复制。');
  };
  byId('share-product').onclick = async () => {
    const p = currentProduct;
    if (!p) return;
    if (isWeChat) {
      // Load the real product URL so WeChat shares the entered page, not an old catalog URL.
      if (entryProductId !== String(p.id)) {
        const url = new URL(location.href);
        url.searchParams.set('product', p.id);
        url.hash = 'share-wechat';
        history.replaceState(null, '', url.href);
        location.reload();
        return;
      }
      showShareGuide(true);
      return;
    }
    const data = {title: p.name + ' · 再青春银发超市', text: p.name + (p.price === null ? '' : `，${money(p.price)}`), url: productURL(p.id)};
    if (navigator.share) {
      try { await navigator.share(data); return; }
      catch (error) { if (error.name === 'AbortError') return; }
    }
    showShareGuide(false);
  };
  document.querySelectorAll('.map-trigger').forEach(button => {
    button.onclick = () => openDialog(byId('map-dialog'));
  });
  byId('close-map').onclick = () => byId('map-dialog').close();
  byId('map-copy-address').onclick = () => copy(ADDRESS, '门店地址已复制。');
  byId('copy-list').onclick = () => {
    const lines = rows().map(({product: p, quantity}) => `${p.name} × ${quantity}：${p.price === null ? '待询价' : money(p.price * quantity)}`);
    const text = ['再青春银发超市 · 选购清单', ...lines, '参考合计：' + byId('list-total').textContent,
      '价格与库存以门店确认为准。', ADDRESS, '咨询电话：18435716527', SITE].join('\n');
    copy(text, '选购清单已复制，可发给家人或到店出示。');
  };
  window.catalogFeatures = {
    onProductOpen(p) {
      currentProduct = p;
      const url = new URL(location.href);
      url.searchParams.set('product', p.id);
      history.replaceState(null, '', url.href);
      document.title = p.name + ' · 再青春银发超市';
      updateList();
    }
  };
  byId('detail').addEventListener('close', () => {
    currentProduct = null;
    cleanProductURL();
    document.title = '再青春银发超市 · 产品图册';
    syncModal();
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('close', syncModal);
  });
  function openURLProduct() {
    const id = new URL(location.href).searchParams.get('product');
    if (id === null) { if (byId('detail').open) byId('detail').close(); return; }
    if (/^\d+$/.test(id) && products.has(Number(id))) showProduct(Number(id));
    else { cleanProductURL(); notify('这条商品链接暂不可用，请在图册中查找。'); }
  }
  window.addEventListener('popstate', openURLProduct);
  window.addEventListener('storage', event => {
    if (event.key === CART_KEY || event.key === null) { cart = loadCart(); updateList(); }
    if (event.key === FONT_KEY || event.key === null) applyFont(read(FONT_KEY) === '1');
  });
  updateList();
  openURLProduct();
  if (isWeChat && currentProduct && new URL(location.href).hash === '#share-wechat') {
    const url = new URL(location.href);
    url.hash = '';
    history.replaceState(null, '', url.href);
    showShareGuide(true);
  }
})();
