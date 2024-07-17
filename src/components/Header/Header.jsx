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
  const handleKeyDown = (event) => {
    if (event.key === 'enter') {
      inputRef.current.blur()
    }
  }
  return (
    <>
      <h1 className='main-title'>Weather in your city</h1>
      <section className="container-form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <svg
              className="icon-location"
              width="20"
              height="20"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M215.31 298.6C253.81 300.85 282.93 311.41 282.93 324.08C282.93 338.4 245.8 350.01 199.99 350.01C154.19 350.01 117.06 338.4 117.06 324.08C117.06 311.41 146.18 300.86 184.67 298.6"
                stroke="#6A0BFF"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M200 50C147.58 50 105.26 92.37 105.26 144.62C105.26 161.05 111.5 179.56 116.82 189.98C134.29 224.21 198.95 319.93 198.95 319.93C199.43 320.73 200.59 320.73 201.06 319.93C201.06 319.93 265.72 224.22 283.19 189.98C288.51 179.56 294.75 161.05 294.75 144.62C294.74 92.36 252.42 50 200 50Z"
                stroke="#191919"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M198.81 97.6399C199.21 97.6299 199.6 97.6399 200 97.6399C225.88 97.6399 246.82 118.8 246.46 144.77C246.11 169.8 225.69 190.22 200.66 190.57C174.69 190.93 153.53 169.99 153.53 144.11C153.53 118.84 173.7 98.2699 198.81 97.6399Z"
                stroke="#000"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="input-search"
              type="text"
              placeholder="Search your city"
              value={getcity}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
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
