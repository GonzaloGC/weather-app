import { useState, useEffect } from 'react'
import { SkeletonLoader } from './components/SkeletonLoader/SkeletonLoader'
import { CardWeather } from './components/CardWeather/CardWeather'
import { Header } from './components/Header/Header'
import { fetchData } from './fetch/fetch'

export const App = () => {
  const [getCity, setGetCity] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    return setGetCity(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (getCity) {
      setIsLoading(true)
      // fetchWeatherData()
    }
  }
  useEffect(() => {
    if (isLoading) {
      const fetchWeatherData = async () => {
        try {
          const data = await fetchData(getCity)
          // console.log(data)
          setWeatherData(data)
        } catch (error) {
          console.error('Error fetching data:', error)
        } finally {
          setIsLoading(false) // Terminar la indicación de carga
        }
      }

      fetchWeatherData()
    }
  }, [isLoading, getCity])
  return (
    <>
      {/* <Header /> */}
      <Header
        getCity={getCity}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isLoading ? <SkeletonLoader /> : (<CardWeather weatherData={weatherData} />)}
    </>
  )
}
