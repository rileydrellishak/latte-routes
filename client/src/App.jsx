import './App.css'
import { getAllRoutesAPI } from '../api/utilities'
import { useState, useEffect } from 'react'
import RouteCardContainer from './components/RouteCardContainer';
import { FadeLoader } from 'react-spinners'

function App() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const routesAPI = await getAllRoutesAPI();
      setRoutes(routesAPI)
    } catch (error) {
      console.error('error fetch!', error)
    } 
    finally {
      setLoading(false)
    }
  }

  useEffect(
    () => {
      fetchData();
    }, []
  )

  if (loading) {
    return (
      <>
        <h3>Loading...</h3>
        <FadeLoader
          color={'#b36a5e'}
          speedMultiplier={0.8}
        />
      </>
    )
  }

  return (
    <>
      <header>
        <h1>Latte Routes</h1>
      </header>
      <main>

          <RouteCardContainer routesData={routes}/>

      </main>
      <footer>
        <p>
          Riley 😎
        </p>
      </footer>

    </>
  )
}

export default App
