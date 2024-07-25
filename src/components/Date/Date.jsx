import { useState, useEffect } from 'react'

export const CurrentDate = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 60000) // Actualiza cada minuto

    return () => clearInterval(timerId)
  }, [])

  const options = {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return (
    <div>
      <h1>{date.toLocaleDateString(undefined, options)}</h1>
    </div>
  )
}
