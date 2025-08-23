const e = document.querySelector('button');
e.addEventListener('click',()=>{
     const n1 = Number(document.getElementById('i1').value);
     const n2 = Number(document.getElementById('i2').value);
     const s = n1+n2;
     const button = document.getElementById('button');
     button.innerText = s;
})