export const fetchData = async (getCity) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${getCity}&limit=5&appid=0c4812369203c9c8a85d583724245506`
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const geoData = await response.json()

    if (geoData.length === 0) {
      throw new Error('No geographic data found for the provided city')
    }

    const lat = geoData[0].lat
    const lon = geoData[0].lon

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c4812369203c9c8a85d583724245506`
    )
    if (!weatherResponse.ok) {
      throw new Error('Weather response was not ok')
    }

    const weatherData = await weatherResponse.json()
    console.log(weatherData)
    return weatherData
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
// fetchData()
