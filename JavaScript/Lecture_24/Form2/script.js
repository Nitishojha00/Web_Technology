// event bubbling ka concept  event trigger from the child node and its effect reach to the parent or grandpart or you cann say simply its ancestor
// using that ican handle event.target se pata krlenge kaha s trigger hua

const button = document.querySelector('form');
// practice input whatever we write we able to see in console
// button.addEventListener("input",(e)=>{
//     e.preventDefault();
//     const name = document.getElementById('name');
//     console.log(name.value);
// })


//practice change whatever we write we able to see in console
// form me kuch bhi change hoga turnt update hogi value
// button.addEventListener("change",(e)=>{
//     e.preventDefault();
//     const name = document.getElementById('name');
//     console.log(name.value);
// })

// focusout me bubbling hota mtlb ancestors ko pata chal jata
//focus me nhi hota
// focus out me jaisa hi form me kuch krke cursor khi aur click kroge to turnt value change hoti
// button.addEventListener("focusout",(e)=>{
//     e.preventDefault();
//     const name = document.getElementById('name');
//     console.log(name.value);
// })


// button.addEventListener("focusout",(e)=>{
//     e.preventDefault();
//     const name = document.getElementById('name');
//     console.log(name.value);
// })


// reset
// button.addEventListener("reset", (e) => {
//   console.log("Before reset:", document.getElementById("name").value);
//   // no preventDefault(), so form resets normally
// });


// formdata
button.addEventListener('submit',(e)=>{
    e.preventDefault(); // stop form from reloading page
    const data = new FormData(button);
    for(let [key,value] of data.entries())
        console.log(key , "  " , value);
})
