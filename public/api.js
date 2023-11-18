let weather = document.querySelector('.weather-info');
let weather_insight = document.querySelector('.weather-insight');
let search = document.getElementById('search-btn');
var text_input = document.getElementById('city');
let date = document.querySelector('.date');
let place = document.querySelector('.location');
let main_container = document.querySelector('.app-container');
let error_state = document.querySelector('.error_state');
let vis = document.querySelector('.weather');
const API_KEY = '648f851e60msha4fb2d06e576b16p172595jsndf296a87739c';








var url;

search.addEventListener('click', function(){
    var city = text_input.value;
    url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    getData()


})
  
    







const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};





async function getData(){
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(response);
        console.log(typeof data);
        let tdate = data.location.localtime
        tdate = new Date(tdate).toDateString();
        console.log(tdate);



        if(response.status == 200){
            main_container.style.height = '540px'
            error_state.classList.remove('error-active');
            vis.style.visibility ='visible';
            date.style.visibility ='visible';




        }

        

        date.innerHTML =`
        <div class="date">
            <p>${tdate}</p>
         </div>
        `

        weather.innerHTML = `
            <div class="weather-info">
                <img class="weather-img" src="${data.current.condition.icon}" alt="">
                <h1 class="degree">${data.current.feelslike_f}°F</h1>
                <p class="">${data.current.condition.text}</p>
            </div>
        `
        weather_insight.innerHTML = `
        <div class="weather-insight">
            <div class="humidity">
                <i class="fa-solid fa-water fa-2xl" style="color: #ffffff;"></i>
            <div>
                <p>${data.current.humidity}%</p>
                <p>humidity</p>
            </div>
            </div>
            <div class="wind-speed">
                <i class="fa-solid fa-wind fa-2xl" style="color: #ffffff;"></i>               <div>
                <p>${data.current.wind_mph}mph</p>
                <p>Wind speed</p>
            </div>
            </div>
         </div>
        `
        place.innerHTML = `
            <div class="location">
            <i class="fa-solid fa-location-crosshairs fa-lg" style="color: #ffffff;"></i>
            <p>${data.location.name}</p>
        </div>
        
        `
      
        
       

     
        
    } catch (error) {
        console.error(error);
        if(error){
           vis.style.visibility ='hidden';
           date.style.visibility ='hidden';
           error_state.classList.add('error-active');
           main_container.style.height = '300px'
        }
       
    }
    
}

