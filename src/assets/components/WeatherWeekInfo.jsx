import { React, useContext, useEffect, useState } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

 function WeatherWeekInfo(/*{inputCity}*/){


    
     
      const { weatherData } = useContext(WeatherContext);
      const [forecastData, setForecastData] = useState(null);
      const[RemainigDays, setRemainigDays] = useState([]);
      
      

      useEffect(() => {

          if (!weatherData) {
        console.log("Aguardando cidade...");
        return;
      }       
              const city = weatherData.name
              console.log(city)
              const key = "8c3f5cb06ef4933a1bab04ac7339b3c1"
              const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`;
      

       axios.get(url).then(res => {
        console.log(res.data);
       setForecastData(res.data)

      });

        }, [weatherData]); // Apenas altera quando a cidade muda

        useEffect(() =>{
          if (!forecastData || !forecastData.list) {
        return;
      }
        
          const dailyWeather = {}

            for(let dayWeather of forecastData.list){

              // Aqui as datas estão em um formato específico e dentro de dt aqui faz a conversão
              const date = new Date (dayWeather.dt * 1000).toLocaleDateString()

              //Aqui verifica se essa determinada data extraida já tem em dailyWeather, comparando o campo date como dailyWeather["16/12/2025"]
              if(!dailyWeather[date]){
                dailyWeather[date] = dayWeather
              }
            }

            // Converte tudo em array e retira primeira data que no caso é a data do dia
            const days = Object.entries(dailyWeather).slice(1);
            setRemainigDays(days);

           

        }, [forecastData]);

    return(
      <div className=" flex pt-20 pb-5 items-center justify-center bg-gray-800">

            {RemainigDays.map(([date,weatherInfo])=> {
              const displayDate = new Date(weatherInfo.dt * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
              return (
              <div className="flex flex-col mg-auto mx-auto text-center w-70 h-50 bg-white/20 text-white placeholder-white/70 outline-none rounded-2xl
              " key={date}>
                <h3 className="pt-2">{displayDate}</h3>

                <div className="">
                  {weatherData.weather?.[0]?.icon && (
                        <img
                          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                          alt={weatherData.weather?.[0]?.description || 'Ícone do tempo'}
                          className="inline-block"
                        />
                    )}
                </div>

                <div className="mx-auto text-center">
                  <p className="">{Math.round(weatherInfo.main.temp)}°C</p>
                  <p>{weatherInfo.weather[0].description}</p>
                </div>

            </div>
          )})}

      </div>
    )      
      
  }

export default WeatherWeekInfo;