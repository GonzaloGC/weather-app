import './SkeletonLoader.css'
import DotLoader from 'react-spinners/DotLoader'

export const SkeletonLoader = () => {
  return (
    <>
      <div className='container-spinner'>
      <DotLoader color="rgba(73, 73, 121, 1)" />
      </div>
      {/* <section className="container-card">
        <div className="card1">
          <div className='number-tem'></div><span className='celcius'></span>
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
      </section> */}
    </>
  )
}
