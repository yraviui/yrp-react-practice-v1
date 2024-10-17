import UseNextPage from './UseNextPage'
import UsePrevPage from './UsePrevPage'

const M11H09 = () => {
  const PrevPage = UsePrevPage(75)
  const nextPage = UseNextPage(75)
  return (
    <div>
      <h1>M11H09 - Custom Hook</h1>
      <h2>Pervious page: {PrevPage}</h2>
      <h2>Next page: {nextPage}</h2>
    </div>
  )
}

export default M11H09
