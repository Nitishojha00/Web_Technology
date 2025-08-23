const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    let content = ["Hi", "Hello", "Namaste Ji", "Sb Badhia", "Ekdm Jhakkas"];
    const colors = ['red','green','yellow','blue','purple','pink','grey'];

    const div = document.createElement('div');
    div.id = 'box';
    div.textContent = content[Math.floor(Math.random()*content.length)];

    div.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    div.style.left = `${x-100}px`;
    div.style.top = `${y-100}px`;
    body.appendChild(div);

    setInterval(() => {
        div.remove();
    }, 2800);
});
