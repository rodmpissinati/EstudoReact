import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

// Pegar o Valor de form Via useContext

function WeatherInfo(){

    const {weatherData} = useContext(WeatherContext)

    if (!weatherData) {
        return <div>Carregando...</div>
    }

    return(
        <div className="flex h-50 flex-col items-center justify-center bg-gray-800  ">
            <div className="w-100 bg-white/20 text-white placeholder-white/70 outline-none mx-auto text-center p-4 rounded-xl
            border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                <h2 className="pb-3 text-2xl">{weatherData.name}</h2>
            
                <div>
                    {weatherData.weather?.[0]?.icon && (
                        <img
                          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                          alt={weatherData.weather?.[0]?.description || 'Ícone do tempo'}
                          className="inline-block"
                        />
                    )}
                    <p className="pb-2 text-xl">{Math.round(weatherData.main?.temp)}°C</p>
                </div>
                    <p className="text-xl pb-2">{weatherData.weather[0].description}</p>
            
            <div className="flex justify-center gap-7 ">
                <p className="">Sensação Térmica: {Math.round(weatherData.main.feels_like)}°C</p>
                <p className=" ">Umidade: {weatherData.main.humidity}%</p>
                <p className=" ">Pressão: {weatherData.main.pressure}</p>
            </div>
            </div>
        </div>
    )

}

export default WeatherInfo;