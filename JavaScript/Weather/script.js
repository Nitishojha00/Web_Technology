let l = document.getElementById('location');
let body = document.querySelector('body')

document.getElementById('btn').addEventListener('click',(e)=>{
    let plce = l.value;
    let dc = document.createElement('div');
    fetch(`http://api.weatherapi.com/v1/current.json?key=07e62f70e4bb40239b6125438250709&q=${plce}&aqi=no`)
    .then(d=>d.json())
    .then((val)=>{
        body.append(`🌍 City: ${plce}`);
        body.append(`🌡️ Temperature: ${val.current.temp_c} °C`);
    });

});

//07e62f70e4bb40239b6125438250709