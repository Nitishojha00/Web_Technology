
const Qlist = [
  {
    question: "Which method is used to add one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["shift()", "slice()", "pop()", "splice()"],
    answer: "pop()"
  },
  {
    question: "Which method removes the first element from an array?",
    options: ["unshift()", "slice()", "shift()", "splice()"],
    answer: "shift()"
  },
  {
    question: "Which method is used to add elements at the beginning of an array?",
    options: ["push()", "unshift()", "concat()", "map()"],
    answer: "unshift()"
  },
  {
    question: "What does the 'concat()' method do in JavaScript arrays?",
    options: ["Joins arrays", "Reverses array", "Adds element", "Removes element"],
    answer: "Joins arrays"
  },
  {
    question: "Which method is used to convert an array into a string?",
    options: ["join()", "map()", "toString()", "Both join() and toString()"],
    answer: "Both join() and toString()"
  },
  {
    question: "Which array method checks if every element satisfies a condition?",
    options: ["some()", "every()", "filter()", "includes()"],
    answer: "every()"
  },
  {
    question: "Which array method checks if at least one element satisfies a condition?",
    options: ["some()", "every()", "filter()", "reduce()"],
    answer: "some()"
  },
  {
    question: "Which method creates a shallow copy of a portion of an array?",
    options: ["splice()", "slice()", "map()", "concat()"],
    answer: "slice()"
  },
  {
    question: "Which method can be used to remove or replace elements in an array?",
    options: ["slice()", "splice()", "filter()", "reduce()"],
    answer: "splice()"
  },
  {
    question: "What will [1,2,3].length return?",
    options: ["2", "3", "4", "undefined"],
    answer: "3"
  },
  {
    question: "Which method reverses the order of elements in an array?",
    options: ["sort()", "reverse()", "map()", "filter()"],
    answer: "reverse()"
  },
  {
    question: "Which method sorts the elements of an array?",
    options: ["order()", "sort()", "arrange()", "map()"],
    answer: "sort()"
  },
  {
    question: "Which array method is used to iterate over each element and return a new array?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    answer: "map()"
  },
  {
    question: "Which array method executes a function once for each element but returns undefined?",
    options: ["map()", "forEach()", "reduce()", "filter()"],
    answer: "forEach()"
  },
  {
    question: "Which array method creates a new array with elements that pass a condition?",
    options: ["reduce()", "map()", "filter()", "some()"],
    answer: "filter()"
  },
  {
    question: "Which method tests whether an array includes a certain element?",
    options: ["find()", "filter()", "includes()", "indexOf()"],
    answer: "includes()"
  },
  {
    question: "What does the 'indexOf()' method return if the element is not found?",
    options: ["undefined", "-1", "null", "false"],
    answer: "-1"
  },
  {
    question: "Which method returns the first index of a matched element?",
    options: ["lastIndexOf()", "indexOf()", "find()", "findIndex()"],
    answer: "indexOf()"
  },
  {
    question: "Which method returns the last index of a matched element?",
    options: ["lastIndexOf()", "indexOf()", "find()", "some()"],
    answer: "lastIndexOf()"
  },
  {
    question: "Which method returns the first element that satisfies a condition?",
    options: ["find()", "filter()", "some()", "every()"],
    answer: "find()"
  },
  {
    question: "Which method returns the index of the first element that satisfies a condition?",
    options: ["find()", "findIndex()", "indexOf()", "some()"],
    answer: "findIndex()"
  },
  {
    question: "Which method is used to flatten nested arrays?",
    options: ["flat()", "concat()", "reduce()", "map()"],
    answer: "flat()"
  },
  {
    question: "What is the default depth of flat()?",
    options: ["1", "2", "Infinity", "0"],
    answer: "1"
  },
  {
    question: "Which method is used to reduce an array to a single value?",
    options: ["map()", "reduce()", "filter()", "forEach()"],
    answer: "reduce()"
  },
  {
    question: "Which array method fills all elements with a static value?",
    options: ["fill()", "push()", "splice()", "map()"],
    answer: "fill()"
  },
  {
    question: "Which method copies part of an array within the same array?",
    options: ["copyWithin()", "slice()", "splice()", "concat()"],
    answer: "copyWithin()"
  },
  {
    question: "What does Array.isArray([]) return?",
    options: ["true", "false", "undefined", "null"],
    answer: "true"
  },
  {
    question: "What will typeof [] return?",
    options: ["array", "object", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which method converts array-like objects into arrays?",
    options: ["Array.from()", "Array.of()", "concat()", "map()"],
    answer: "Array.from()"
  },
  {
    question: "Which method creates an array from a set of arguments?",
    options: ["Array.of()", "Array.from()", "concat()", "slice()"],
    answer: "Array.of()"
  },
  {
    question: "What does [].length return?",
    options: ["0", "1", "undefined", "null"],
    answer: "0"
  },
  {
    question: "What does delete array[index] do?",
    options: ["Removes element and shifts", "Sets element to undefined", "Removes completely", "Throws error"],
    answer: "Sets element to undefined"
  },
  {
    question: "Which array method can be used to convert all values to a single string with custom separator?",
    options: ["join()", "concat()", "toString()", "slice()"],
    answer: "join()"
  },
  {
    question: "Which array method can check if a value exists in an array?",
    options: ["indexOf()", "find()", "includes()", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which array method creates an iterator for values?",
    options: ["values()", "keys()", "entries()", "map()"],
    answer: "values()"
  },
  {
    question: "Which array method creates an iterator for keys?",
    options: ["values()", "keys()", "entries()", "filter()"],
    answer: "keys()"
  },
  {
    question: "Which array method returns both key and value pairs?",
    options: ["values()", "entries()", "keys()", "map()"],
    answer: "entries()"
  },
  {
    question: "What will [1,2,3].at(-1) return?",
    options: ["undefined", "3", "2", "error"],
    answer: "3"
  },
  {
    question: "Which method creates a shallow copy of an array?",
    options: ["slice()", "map()", "concat()", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which method returns a new array with repeated elements?",
    options: ["flatMap()", "map()", "fill()", "repeat()"],
    answer: "flatMap()"
  },
  {
    question: "Which of the following is NOT an array method?",
    options: ["map()", "reduce()", "split()", "filter()"],
    answer: "split()"
  },
  {
    question: "Which array method executes a function once for each element?",
    options: ["map()", "forEach()", "reduce()", "filter()"],
    answer: "forEach()"
  },
  {
    question: "What is the difference between splice() and slice()?",
    options: ["splice() mutates array, slice() does not", "slice() mutates, splice() does not", "Both mutate", "Both do not mutate"],
    answer: "splice() mutates array, slice() does not"
  },
  {
    question: "Which method can be used to check if an object is an array?",
    options: ["Array.check()", "Array.isArray()", "isArray()", "typeof"],
    answer: "Array.isArray()"
  },
  {
    question: "Which method executes a reducer function for each element?",
    options: ["reduce()", "map()", "filter()", "some()"],
    answer: "reduce()"
  },
  {
    question: "Which method creates a string by concatenating array elements?",
    options: ["join()", "concat()", "map()", "reduce()"],
    answer: "join()"
  },
  {
    question: "Which array method can flatten and map in one step?",
    options: ["map()", "flat()", "flatMap()", "reduce()"],
    answer: "flatMap()"
  },
  {
    question: "What is the result of [].length?",
    options: ["0", "1", "undefined", "error"],
    answer: "0"
  },
  {
    question: "Which array method can remove duplicates indirectly?",
    options: ["filter() with indexOf()", "reduce()", "Set + spread operator", "All of the above"],
    answer: "All of the above"
  }
];
// choose 5 question randomly and present on screen 

// function generatUniqueNumber()
// {
//     let s = new Set();
//     while(s.length!=5)
//     {
//         let  idx = Math.floor(Math.random()*Qlist.length);
//         s.add(idx);
//     }

//     return [...s]; // converted to array using rest operator 
// }

// optimizing the generating unique number function
function generatUniqueNumber()
{
  let arr = new Array();
  let length  =  Qlist.length;
  for(let i=0;i<5;i++)
  {
    let idx = Math.floor(Math.random()*length);
    arr.push(Qlist[idx]);
    [Qlist[idx],Qlist[length-1]] = [Qlist[length-1] , Qlist[idx]]; // value swapped
    length--;
  }
  return arr;
}

const form = document.querySelector('form');
let  idxArr = generatUniqueNumber();
  for(let i=0;i<5;i++)
  {
        const  div = document.createElement('div');
        div.className = "question";
        const p = document.createElement('p');
        p.append(`Q${i+1}.  ${idxArr[i]["question"]}`);
        div.append(p);
        for(let j=0;j<4;j++)
        {
            const l = document.createElement('label');
            const  ip = document.createElement('input');
            ip.type = "radio";
            ip.name = `Q${i+1}`; // abhi bs Q1 kuki ek element krrha
            ip.value = `${idxArr[i]["options"][j]}`;
            l.append(ip);
            const optName = document.createTextNode(`${idxArr[i]["options"][j]}`);
            l.append(optName);
            const br = document.createElement('br');
            div.append(l);
            div.append(br);
        }
        form.append(div);
  }


const button = document.createElement('button');
button.type = "submit";
button.textContent = "Submit"; // for change text Content
form.append(button);


// jaisa hi form submit hoga uska result turnt show krdo 

// form.addEventListener('submit',(e)=>{  
//      e.preventDefault();
//      let data = new FormData(form);
//      const result = document.createElement('div');
//      result.id = "result";
//      let marks = 0;
//      for (let i = 0; i < 5; i++) 
//       {
//         // Compare answers
//         if (data.get(`Q${i+1}`) === idxArr[i].answer) 
//           marks++;
//       }

//   result.textContent = `You scored ${marks}/5`;
//   form.append(result);
    
// })

//rohit sir
form.addEventListener('submit',(e)=>{  
     e.preventDefault();
     let data = new FormData(form);
     const result = document.createElement('div');
     result.id = "result";
     let marks = 0;
     const ans = Array.from(data.values());
     for (let i = 0; i < 5; i++) 
      {
        // Compare answers
        if (ans[i] === idxArr[i].answer) 
          marks++;
      }
  result.textContent = `You scored ${marks}/5`;
  form.append(result);
    
})

