function Timing()
{
  let t = document.querySelector('.timer');
  let d = new Date();
  t.style.color = 'red';
  t.style.fontSize = '25px' ;
  //document.querySelector('body')
  t.style.display = 'flex';
  t.style.justifyContent = 'center';
  t.style.backgroundColor = 'Black';
  t.style.height = '100vh';
  t.style.alignItems = 'center';
  let s = d.toLocaleTimeString();
  t.innerHTML = s;
}

setInterval(Timing,1000);