import './CardWeather.css'
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader'

export const CardWeather = ({ weatherData }) => {
  if (weatherData === '' || weatherData.main === '') {
    return <div>{''}</div>
  } else if (!weatherData || !weatherData.main) {
    return <SkeletonLoader /> // Mostrar un mensaje de carga mientras no hay datos
  }
  const gradosKelvin = 273.15
  const nombre = weatherData.name || 'Unknown location'
  const temperaturaActualKelvin = weatherData.main.temp
  const temperaturaActual = Math.round(temperaturaActualKelvin - gradosKelvin)
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      > */}
      <section className="container-card">
        <div className="card1">
          {/* <h3>La tem en {nombre} es </h3> */}
          <div className='number-tem'>{temperaturaActual}</div><span className='celcius'>°C</span>
        </div>
        <div className="card2">
          <h1> </h1>
          <div></div>
        </div>
        <div className="card3">
          <h1> </h1>
          <div></div>
        </div>
        <div className="card4">
          <h1> </h1>
          <div></div>
        </div>
        <div className="card5">
          <h1> </h1>
          <div></div>
        </div>
        <div className="card6">
          <h1> </h1>
          <div></div>
        </div>
        {/* <div className="card7">
          <h1> </h1>
          <div></div>
        </div>
        <div className="card8">
          <h1> </h1>
          <div></div>
        </div>
        <div className="card9">
          <h1> </h1>
          <div></div>
        </div> */}
      </section>
      {/* </motion.div> */}
    </>
  )
}
