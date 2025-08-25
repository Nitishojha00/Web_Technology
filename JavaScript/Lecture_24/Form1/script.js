// event bubbling ka concept  event trigger from the child node and its effect reach to the parent or grandpart or you cann say simply its ancestor
// using that ican handle event.target se pata krlenge kaha s trigger hua

const button = document.querySelector('button');

button.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.getElementById('name');
    console.log(name.value);
})