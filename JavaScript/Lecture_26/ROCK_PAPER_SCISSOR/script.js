const btn = document.getElementById('btn');
const div = document.getElementById('b2');
btn.addEventListener("click",(e)=>{
         const h1 = document.createElement('h1');
         h1.textContent = "ROCK PAPER SCISSOR";
         const opt = document.createElement('div');
         opt.id = "options";

        
        // Okay optimize krrha single loop use krke 
        const choices = [
        { id: 1, alt: "Rock", src: "rock.webp" },
        { id: 2, alt: "Paper", src: "Paper.webp" },
        { id: 3, alt: "Scissor", src: "scissor.png" }
     ];
        for(let i=0;i<3;i++)
        {
            let img1 = document.createElement('img');
            img1.id = choices[i].id;
            img1.src = choices[i].src;
            img1.alt = choices[i].alt;
            opt.append(img1);
        }

         const h2 = document.createElement('h2');
         h2.innerText = "Select Any One Above ";

         const btn2 = document.createElement('button');
         btn2.id = "resultbtn";
         btn2.textContent = "See Result";
         
         const resultdiv  = document.createElement('div');
         resultdiv.id = "result";
         
         btn.style.display = "none";
         div.append(h1, opt, h2, btn2, resultdiv); // can append at once
         
        let tar;
        opt.addEventListener("click",(e)=>{
            tar = Number(e.target.id);
        });
         // new process
         let obj = {
         1:"Rock",
         2:"Paper",
         3:"Scissor"
         };

         btn2.addEventListener("click",(e)=>{
                e.preventDefault();
                const g = Math.floor(Math.random()*3)+1;
                let p1 = document.createElement('p');
                p1.textContent = `You Selected ${obj[tar]}`;
                resultdiv.append(p1);
                let p2 = document.createElement('p');;
                p2.textContent = `Computer Selected ${obj[g]}`;
                resultdiv.append(p2);
                let p3 = document.createElement('p');
                if((g==3 && tar==1) || (g==2 && tar==3) || (tar==2 && g==1))
                {
                    p3.textContent = "You Wins";;
                    resultdiv.append(p3);
                }
                else  if(g===tar) // match draw
                {
                    p3.textContent =  "Match Draw";
                    resultdiv.append(p3);
                }
                else
                {
                    p3.textContent = "Computer Wins";
                    resultdiv.append(p3);
                }
         });
         

});

const b2 = document.getElementById('b2');

// <h1>ROCK PAPER SCISSOR</h1>
//         <div id="options">
//             <img src="../rock.webp" id="1" alt="">
//             <img src="../Paper.webp" id="2" alt="">
//             <img src="../scissor.png" id="3" alt="">
//         </div>
//         <h2>Select Any One Above </h2>
//         <button id="resultbtn">See Result</button>
//         <div id="result">
//             <p>You Selected Stone</p>
//             <p>Computer Selected Stone</p>
//             <p>Match Draw</p>
//         </div>