import styles from '../styles/Home.module.css'
import { getAllTickers } from './api'
import NavBar from '../components/navbar'

const Home = (props) => {

  return (
      <NavBar/>
  )
}
export async function getServerSideProps() {
  let tickers = await getAllTickers();

  return {
    props: {
      tickers
    }
  }
}

export default Home
