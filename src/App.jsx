import {useState} from 'react'
import ScreenWeather from "./components/ScreenWeather"
import Informacoes from './components/Informacoes';

function App() {
  const urlWeatherCall = 'https://api.openweathermap.org/data/2.5/weather?'
  const apiKey = '2c23509ba3aa57c4c8a36d1aa4a6b1b4';

  const [city, setCity] = useState('')
  const [dataWeather, setDataWeather] = useState({})


  async function searchCityInformation() {
    if (city) {
      const res = await fetch(`${urlWeatherCall}q=${city}&lang=pt_br&units=metric&appid=${apiKey}`)
      const data = await res.json()
      if (data.name) {
        setDataWeather(data)
        setCity('')
      }else{
        alert('Cidade não encontrada')
      }
    }else{
      alert("Nome de uma cidade é requerido")
    }
}


  return (
    <div>
      <ScreenWeather searchCityInformation={searchCityInformation} setCity={setCity} city={city}>
        {<Informacoes data={dataWeather}/>}
      </ScreenWeather>
    </div>
  )
}

export default App
