import './Header.css'

export const Header = ({ handleSubmit, getcity, handleChange }) => {
  return (
    <>
      <section className='container-form'>
        <h1>Weather in your city</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input-search"
            type="text"
            placeholder="Search your city"
            value={getcity}
            onChange={handleChange}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="black"
                d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057l-4.126-4.127A5.5 5.5 0 1 1 8.5 3m0 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"
              />
            </svg>
          </button>
        </form>
      </section>
    </>
  )
}
