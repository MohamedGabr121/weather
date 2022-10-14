
let result=document.getElementById("result");
let searchBtn=document.getElementById("search-btn");
let cityOf=document.getElementById("city");
var key="ebfd5c1e7cc931e25311542a11303b39";
// let date=new Data();
let getWeather =()=>{
    let cityValue =cityOf.value;
    if(cityValue.length ==0){
      result.innerHTML= `<h3 class="msg"> Pleas Enter a city name</h3>`  
    }
    else{
        let de =new Date();
let days =[
    "sun","mon","tues","wendes","thurs","Friday","satar",
]
let months =[
    "January ","February ","March ","April ","May ","June","July ","August ","September","October ","November ","December",
]
// http://api.weatherapi.com/v1/forecast.json?key=00841824410f4dabaed185337221210&q=london&days=7
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}
&units=metric&cnt=3`;
    //let mnp =`http://api.weatherapi.com/v1/forecast.json?key=00841824410f4dabaed185337221210&q=london&days=7`
// cityValue.value="";
        fetch(url).then(( response)=>response.json()).then
        (data =>{
            console.log(days[de.getDay()]);
            console.log(months[de.getMonth()]);
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            // console.log(data.main);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML=`
            <div class="month">
            <h2 class=""texxt-denager>${[de.getDate()]}</h2>
            <h2>${months[de.getMonth()]}</h2>
            </div>
            <h2>${days[de.getDay()]}</h2>
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="des">${data.weather[0].description}</h4>
           <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
           <h1>${data.main.temp}&#176;</h1>
           <div class="temp-container">
           <div>
           <h4 class="title">min</h4>
           <h4 class="temp">${data.main.temp_min}</h4>
           </div>
           <div>
           <h4 class="title">max</h4>
           <h4 class="temp">${data.main.temp_max}</h4>
           </div>
           </div> `

        })
        // If the city name is not valid
        .catch(() =>{
            result.innerHTML=`<h3 class="msg">city not found</h3>`
        })
    }
}

searchBtn.addEventListener("click",getWeather)
window.addEventListener("load",getWeather);