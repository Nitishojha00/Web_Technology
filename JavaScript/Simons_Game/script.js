let lvl = 0;
let arr = [];
let color = ["green","red","yellow","blue"];
let flg = true;

// Selecting each element by its ID
const green = document.getElementById('green');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const btn = document.getElementById('btn');
const box = document.getElementById('box');
const level = document.getElementById('level');
const button = document.querySelector('button'); // select button inside #btn

function flicker()
{
   let idx = Math.floor(Math.random()*4);
   arr.push(idx); // okay storing index it opitimize little bit

   // ab color ko higlight kro kuch der ke liya
   let item = document.getElementById(color[idx]);
   item.style.backgroundColor = "white";
   setTimeout(()=>{
       item.style.backgroundColor = color[idx];
   },600);
}

async function checker()
{
    let length = arr.length;
    let i ;
    for( i=0;i<length;i++)
    {
        let tar;
        await box.addEventListener('click',(e)=>{
            tar = e.target.id;
        });
        console.log(tar);
        if(tar!=color[arr[i]]) break;
    }

    if(i!=length)
    {
        body.innerHTML("Game Over");
    }
}

function performTasks()
{
        while(flg && lvl<10)
        {
            flicker();
            checker();
        }

}

button.addEventListener('click', () => {
    button.style.display = 'none'; 
    performTasks();
});

color[0].style.backgroundColor = "red";
