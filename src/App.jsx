import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './assets/components/Form.jsx'
import WeatherInfo from './assets/components/WeatherInfo.jsx'
import WeatherWeekInfo from './assets/components/WeatherWeekInfo.jsx'

function App() {

  // Outra forma de enviar informações de um arquivo para outro

  // const [inputCity, setInputCity] = useState(null);
  

  return(
    <div>
      {/* <Form setInputCity = {setInputCity} /> */}
      {/* <WeatherInfo inputCity = {inputCity} /> */}
      <Form />
      <WeatherInfo />
      <WeatherWeekInfo />
    </div>
  )
}

export default App
