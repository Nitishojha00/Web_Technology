const e = document.querySelector('button');

e.addEventListener('click',()=>{

        const i1 = document.getElementById('i1');
        const v1 = i1.value;
        const i2 = document.getElementById('i2');
        const v2 = i2.value/100;
        const v3 = v1/Math.pow(v2,2);
        const r = document.getElementById('result');
        r.style.textAlign = 'center';
        r.style.fontSize = '30px';
        r.style.fontWeight = 'bolder'
        r.style.padding = '5em';
        if(v3>=30)
        {
            r.innerText = 'Obesity';
        }
        else if(v3>=25)
        {
            r.innerText = 'Overweight';
        }
        else  if(v3>18.5)
        {
            r.innerText = 'Normal _Weight';
        }
        else
        {
            r.innerHTML = 'Under Weight';
        }
           
})




