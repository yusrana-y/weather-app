
const search= async()=>{
    city=city.value
    APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5eeb7c81194a1ffe734db3fb0252dc8c`
    const data = await fetch(APIUrl)
    data.json()
    .then((items)=>{
        city_name= items.name
        city_weather=items.weather[0].main
        weather_icon = items.weather[0].icon
        desc= items.weather[0].description
        temp = (items.main.temp - 273).toFixed(2)
        t_min=Math.floor(items.main.temp_min-273)
        t_max=Math.ceil(items.main.temp_max-273)
        f_like=Math.ceil(items.main.feels_like-273)
        humidity=items.main.humidity
        pressure=items.main.pressure
        wind = items.wind.speed
        visibility = (items.visibility/1000)
        const d = new Date()
switch(city_weather){
    case "Clear":
        {
            myVideo.innerHTML=`
            <source  src="./images/CLOUD2.mp4" type="video/mp4">
          </video>`
            break;
        }
    case "Clouds":
        {
            myVideo.innerHTML=`
            <source  src="./images/CLOUD2.mp4" type="video/mp4">
          </video>`
            break;
        }
    case "Rain" :{
        myVideo.innerHTML=`
        <source  src="./images/rain.mp4" type="video/mp4">
      </video>`
        break;
    }
     
    case "Snow":
        {
            myVideo.innerHTML=`
            <source  src="./images/SNOW.mp4" type="video/mp4">
          </video>`
            break;
        }
    default:
        break;
}
        output.innerHTML = `
                        <div class="row">
                        <div class="">
                            <p id="tdate" class="pt-2 mt-2 text-left">${d}</p>
                            <h1 id="city1">${city_name}</h1>
                            <div class="weather-icon"><img src=" https://openweathermap.org/img/wn/${weather_icon}@2x.png" /></div>
                            <p id="temp" class="pt-2"> ${temp}&#8451;  <span id="feel1">  Feels like   ${f_like}&deg;</span></p>
                            <h5>${city_weather} -     <span>${desc}</span></h5>
                            <span id="hl" class="mt-5 mb-5">${t_min}&deg;/${t_max}&deg;</span>
                            
                            <table class="mt-4" style="width:100%">
                                <tr>
                                  <th >Wind</th>
                                  <th>Humidity</th> 
                                  <th>Visibility</th>
                                  <th>Pressure</th>
                                </tr>
                                <tr>
                                  <td>${wind} km/h</td>
                                  <td>${humidity}%</td>
                                  <td>${visibility} km</td>
                                  <td>${pressure} kpa</td>
                                </tr>
                              </table>
                        
                        </div>               
                    </div> 
        `
    })

}

