function Timing()
{
  let t = document.querySelector('.timer');
  let d = new Date();
  const b = new Date(2026,4,2,0,0,0,0);
  t.style.color = 'red';
  t.style.fontSize = '25px' ;
  //document.querySelector('body')
  t.style.display = 'flex';
  t.style.justifyContent = 'center';
  t.style.backgroundColor = 'Black';
  t.style.height = '100vh';
  t.style.alignItems = 'center';
  let diff = b-d;
  // Convert milliseconds → time units
    let years   = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    let months  = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
    let days    = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    let hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

  t.innerHTML =  `${years}:${months}:${days}:${hours}:${minutes}:${seconds}`;
}

setInterval(Timing,1);