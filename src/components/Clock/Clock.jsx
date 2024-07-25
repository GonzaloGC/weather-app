import { useState, useEffect } from 'react'
import './Clock.css'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div>
      <h1 className='time'>{time.toLocaleTimeString()}</h1>
    </div>
  )
}
