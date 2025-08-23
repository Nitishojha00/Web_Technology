const box = document.querySelector('.box');

box.addEventListener('click',()=>
{
    const color = ['red','green','yellow','blue','purple','pink','grey'];
    const n = Math.floor(Math.random()*(color.length-1));
    const b = document.querySelector('.box');
    b.style.backgroundColor = color[n];
    console.log(color[n]);
});