import {React, useContext, useRef} from "react";
import axios from 'axios';
import { WeatherContext } from "../context/WeatherContext";

function Form(/*{setInputCity}*/){
    const inputRef = useRef()
    const {setWeatherData} = useContext(WeatherContext)

    async function searchCity(){

        const key = "8c3f5cb06ef4933a1bab04ac7339b3c1"
        const city = inputRef.current.value

        /*setInputCity(city);*/

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

        // Pega todos os daddos da API
        const apiData = await axios.get(url)
        // Armazena apeas o que está dentro de data
        setWeatherData(apiData.data)

        

    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
            {/* Neste caso será utilizado o useRef ao invés do onChange, pois é uma busca, e é pontual */}
            <h1 className="text-white text-2xl mb-6">Previsão do Tempo</h1>
            <div className=" w-100 p-7 rounded-xl bg-gradient-to-br from-white/5  via-white/20 to-white/5 backdrop-blur-mdborder border-white/20 shadow-lg">
                      
                    <input className="w-full p-2 mb-3 rounded-md bg-white/20 text-white placeholder-white/70 outline-none" ref={inputRef} type="text" placeholder="Digite uma cidade" />
                    <button className="w-full py-2 rounded-md bg-white/30 text-white hover:bg-white/40 transition" onClick={searchCity}>Pesquisar</button>
                </div>
            </div>

        )
}

export default Form

