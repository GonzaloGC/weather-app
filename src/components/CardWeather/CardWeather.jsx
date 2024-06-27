import './CardWeather.css'
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader'

export const CardWeather = ({ weatherData }) => {
  if (weatherData === '' || weatherData.main === '') {
    return <div>no hay nada</div>
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
        <div className="card">
          <h1>La temperatura en {nombre} es </h1>
          <div>{temperaturaActual}° Celsius</div>
        </div>
      </section>
      {/* </motion.div> */}
    </>
  )
}
