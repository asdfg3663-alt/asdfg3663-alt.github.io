const languageButton=document.querySelector('#language');
function setLanguage(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});languageButton.textContent=lang==='en'?'한국어':'English';languageButton.setAttribute('aria-label',lang==='en'?'Switch to Korean':'영어로 변경');try{localStorage.setItem('singularity-language',lang)}catch{}}
let preferred='en';try{preferred=localStorage.getItem('singularity-language')||'en'}catch{}setLanguage(preferred==='ko'?'ko':'en');
languageButton.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'ko':'en'));
const lightbox=document.querySelector('#lightbox');
document.querySelectorAll('.gallery button').forEach(button=>button.addEventListener('click',()=>{const source=button.querySelector('img');lightbox.querySelector('img').src=source.src;lightbox.querySelector('img').alt=source.alt;lightbox.querySelector('p').textContent=button.querySelector('span').textContent;lightbox.showModal()}));
lightbox.querySelector('.close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
