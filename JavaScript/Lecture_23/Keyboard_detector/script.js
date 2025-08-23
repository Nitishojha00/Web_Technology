const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
  const h1 = document.createElement('h1');
  h1.style.textAlign = 'center';
  h1.style.padding = '50px';
  h1.textContent = e.key; // OR `${e.key}` with backticks

  // Replace old content with new h1
  body.appendChild(h1);

  console.log(e.key);
});
