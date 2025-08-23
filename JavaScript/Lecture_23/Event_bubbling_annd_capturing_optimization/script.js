const body = document.querySelector('body');
body.addEventListener('click',(e)=>{
    if(e.target.tagName==='DIV') /* check krna jruri nhito body se bhi propogatehoga*/ 
    body.style.backgroundColor = e.target.id;
})