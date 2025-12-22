import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({children}){

    const [weatherData, setWeatherData] = useState("");

    return(
        <WeatherContext.Provider value={{weatherData, setWeatherData}}>
            {children}
        </WeatherContext.Provider>
    );

}