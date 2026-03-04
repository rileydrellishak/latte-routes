import './App.css'
import { getAllRoutesAPI } from '../api/utilities'
import { useState, useEffect } from 'react'
import RouteCardContainer from './components/RouteCardContainer';

function App() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const routesAPI = await getAllRoutesAPI();
      setRoutes(routesAPI)
    } catch (error) {
      console.error('error fetch!', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(
    () => {
      fetchData();
    }, []
  )

  return (
    <>
      <header>
        <h1>Latte Routes</h1>
      </header>
      <main>
        <section>
          <h2>Create entry form</h2>
          <p>oooo create an entry</p>
        </section>
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
