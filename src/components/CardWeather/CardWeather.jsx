import './CardWeather.css'
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Spinner } from '../Spinner/Spinner'
import { motion } from 'framer-motion'
import { Clock } from '../Clock/Clock'
// import { useState } from 'react'

export const CardWeather = ({ weatherData }) => {
  const [getIcon, setGetIcon] = useState('')
  // const [isLoading, setIsLoading] = useState(true);

  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (weatherData === '' || weatherData.main === '') {
    return <div>{''}</div>
  } else if (!weatherData || !weatherData.main) {
    return <SkeletonLoader /> // Mostrar un mensaje de carga mientras no hay datos
  }
  const gradosKelvin = 273.15
  const nombre = weatherData.name || 'Unknown location'
  const temperaturaActualKelvin = weatherData.main.temp
  const temperaturaActual = Math.round(temperaturaActualKelvin - gradosKelvin)
  const temperaturaMinimaKelvin = weatherData.main.temp_min
  const temperaturaMaximaKelvin = weatherData.main.temp_max

  const temperaturaMinima = Math.round(temperaturaMinimaKelvin - gradosKelvin)
  const temperaturaMaxima = Math.round(temperaturaMaximaKelvin - gradosKelvin)

  const iconWeather = weatherData.weather[0].icon
  // console.log(iconWeather)
  /*  const icon = iconWeather.icon
  console.log(icon) */
  useEffect(() => {
    fetch(`https://openweathermap.org/img/wn/${iconWeather}@2x.png`).then(
      (res) => setGetIcon(res.url)
    )
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="container-card">
          <div className="card1">
            {/* <h3>La tem en {nombre} es </h3> */}
            <div className="number-tem">{temperaturaActual}</div>
            <span className="celcius">°</span>
          </div>
          <div className="card2">
            {isLoading && <Spinner />}
            <LazyLoadImage
              src={getIcon}
              onLoad={handleLoad}
              className="icon-weather"
              // alt="Descripción de la imagen"
            />
            {/* <img className="icon-weather" src={getIcon} alt="icono" /> */}
          </div>
          <div className="card3">
            <span>
              T° mín
              <br /> {temperaturaMinima}°C <br /> <hr className="line" /> T° máx{' '}
              <br />
              {temperaturaMaxima}°C{' '}
            </span>
            <div></div>
          </div>
          <div className="card4">
            <h1> </h1>
            <div></div>
          </div>
          <div className="card5">
            <h1></h1>
            <div></div>
          </div>
          <div className="card6">
            <h1> </h1>
            <div></div>
          </div>
        </section>
      </motion.div>
    </>
  )
}
