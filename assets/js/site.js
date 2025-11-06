<script>
/* Language state */
let lang = localStorage.getItem('riskalia_lang') || (navigator.language||'fr').slice(0,2);
if(!['fr','en','ar'].includes(lang)) lang='fr';

function t(path){
  const nodes = path.split('.');
  let cur = I18N[lang];
  for(const n of nodes){ if(cur==null || !(n in cur)) return path; cur = cur[n]; }
  return cur;
}

function applyTexts(){
  document.documentElement.lang = lang;
  document.body.dir = (lang==='ar'?'rtl':'ltr');
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-ph]').forEach(el=>{ el.placeholder = t(el.dataset.ph); });
  document.querySelectorAll('.lang-btn').forEach(b=> b.classList.toggle('active', b.dataset.lang===lang));
}

function initLangSwitch(){
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      lang = btn.dataset.lang;
      localStorage.setItem('riskalia_lang', lang);
      applyTexts();
      // page-specific renders
      renderHomeWhy(); initSolutions(true); renderRe(); renderESG(); renderContactLabels();
    });
  });
}

function initNav(){
  const menuBtn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if(menuBtn && menu){
    menuBtn.addEventListener('click',()=> menu.classList.toggle('show'));
    document.querySelectorAll('nav a').forEach(a=> a.addEventListener('click',()=> menu.classList.remove('show')));
  }
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    a.classList.toggle('active', href.endsWith(here));
  });
}

/* Home */
function renderHomeWhy(){
  const wrap = document.getElementById('home-why'); if(!wrap) return;
  const items = t('home.why') || [];
  wrap.innerHTML = items.map(x=>`<div class="card"><h3>${x.t}</h3><p class="muted">${x.d}</p></div>`).join('');
}

/* Solutions */
let solPop='enterprise';
function renderSolutions(){
  const grid = document.getElementById('sol-grid'); if(!grid) return;
  const list = I18N[lang].solutions[solPop] || [];
  grid.innerHTML = list.map(it=>`
    <div class="card">
      <h4>${it.icon} ${it.title}</h4>
      <p class="muted">${it.desc}</p>
      <div style="margin-top:10px"><a class="btn" href="contact.html">${t('cta.quote')}</a></div>
    </div>
  `).join('');
}
function initSolutions(forceRender=false){
  const pills = document.querySelectorAll('.pill'); if(!pills.length) return;
  pills.forEach(p=> p.addEventListener('click', ()=>{
    pills.forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    solPop = p.dataset.pop;
    renderSolutions();
  }));
  if(forceRender) renderSolutions(); else renderSolutions();
}

/* Reinsurance */
let reTab='intro';
function renderRe(){
  const box = document.getElementById('re-content'); if(!box) return;
  const lines = I18N[lang].re?.[reTab] || [];
  box.innerHTML = `<ul style="line-height:1.8;margin-left:1rem">${lines.map(li=>`<li>${li}</li>`).join('')}</ul>`;
}
function initRe(){
  const tabs = document.querySelectorAll('.tab'); if(!tabs.length) return;
  tabs.forEach(tbtn=> tbtn.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    tbtn.classList.add('active');
    reTab = tbtn.dataset.tab;
    renderRe();
  }));
  renderRe();
}

/* ESG */
function renderESG(){
  const grid = document.getElementById('esg-grid'); if(!grid) return;
  const blocks = I18N[lang].esg?.blocks || [];
  grid.innerHTML = blocks.map(b=>`
    <div class="card">
      <h4>${b.icon} ${b.title}</h4>
      <p class="muted">${b.desc}</p>
    </div>
  `).join('');
}

/* Contact */
function renderContactLabels(){
  const sel = document.getElementById('type-select'); if(!sel) return;
  const first = sel.querySelector('option[value=""]');
  if(first) first.innerHTML = t('contact.form.type');
}
function initContactForm(){
  const f = document.querySelector('form[data-contact]'); if(!f) return;
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert(t('contact.ok'));
  });
}

/* Boot */
document.addEventListener('DOMContentLoaded', ()=>{
  applyTexts();
  initLangSwitch();
  initNav();
  renderHomeWhy();
  initSolutions();
  initRe();
  renderESG();
  renderContactLabels();
  initContactForm();
});
</script>
