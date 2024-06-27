export const Header = ({ handleSubmit, getcity, handleChange }) => {
  return (
    <>
      <section>
        <h1>Weather in your city</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your city"
            value={getcity}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    </>
  )
}
