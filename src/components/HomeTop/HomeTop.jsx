import './HomeTop.scss'

function HomeTop() {
  return (
    <div className='home__top'>
        <div>
            <h1>Jaegar Resto</h1>
            <p>Tuesday, 4May 2024</p>
        </div>
        <form action="#">
            <label htmlFor="search">
            <i className="bi bi-search"></i>
            </label>
            <input type="text" placeholder='SeArcH FooD' />
        </form>
    </div>
  )
}

export default HomeTop
