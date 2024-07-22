const API_KEY="7565e56299a2a5e0a6852ffb8f58ce80";
let temp=0;
async function showweather(){
    let city="patna";
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data=await response.json();
    temp=`${data?.main?.temp}C`;
    document.getElementById('weatherdata').innerText=temp;
}
showweather();