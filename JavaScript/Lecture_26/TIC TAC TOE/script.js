let arr = [["B","B","B"],["B","B","B"],["B","B","B"]];
function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] !== 'B' && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            return true;
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (arr[0][j] !== 'B' && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
            return true;
        }
    }

    // Check diagonals
    if (arr[0][0] !== 'B' && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        return true;
    }
    if (arr[0][2] !== 'B' && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        return true;
    }

    // No winner
    return false;
}
let turn = 0;
let cnt = 0;
const board = document.getElementById('board');
const result = document.getElementById('result');
function printer(e)
    {
            let str = e.target.className;
            let boxNum = Number(str.substring(3,4)); // konsa wala box hai pata chal jayega
            let row = Math.floor(boxNum/3);
            let col = Math.floor(boxNum%3);

            const box = document.querySelector(`.${str}`);
            
            if(arr[row][col]==='B') 
            {
                cnt++;   
                if(turn===0)
                {
                    arr[row][col] = "O";
                    box.innerText = "O";
                    turn = 1;
                    if(checkWinner())
                    {
                        result.textContent = "O Wins";
                        // jitgya ab remove krdo event listener
                        board.removeEventListener("click",printer);
                    }
                }
                else
                {
                    arr[row][col] = "X";
                    box.innerText = "X";
                    turn = 0;
                    if(checkWinner())
                    {
                        result.textContent = "X Wins";
                        // jitgya ab remove krdo event listener
                       board.removeEventListener("click",printer);
                    }
                }
            }
        if(cnt==9)
        {
            result.textContent = "Match Draw";
            board.removeEventListener("click",printer);
        }
    }

board.addEventListener("click",printer);
const btn = document.querySelector('button');
btn.addEventListener('click',(e)=>{
    // reset krdiya
        arr =  [["B","B","B"],["B","B","B"],["B","B","B"]];
        for(let child of board.childNodes)
        {
            child.textContent = "";
        }
        result.textContent = "";
        turn = 0;
        cnt = 0;
        board.addEventListener("click", printer);
});

// i can also add some cunctionalitiies that tell game 
// is drawn or not 