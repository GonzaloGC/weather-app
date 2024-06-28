import './Header.css'
import { useRef } from 'react'

export const Header = ({ handleSubmit, getcity, handleChange }) => {
  const inputRef = useRef(null)

  const handleFocus = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 300)
  }

  return (
    <>
      <h1>Weather in your city</h1>
      <section className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="input-search"
              type="text"
              placeholder="Search your city"
              value={getcity}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.1rem"
                height="1.1rem"
                viewBox="0 0 20 20"
              >
                <path
                  fill="black"
                  d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127A5.5 5.5 0 1 1 8.5 3m0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"
                />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
