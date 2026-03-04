import './App.css'
import { getAllRoutesAPI } from '../api/utilities'
import { useState, useEffect } from 'react'

function App() {
  const [routes, setRoutes] = useState(null);
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
        <section>
          <h2>Look at entries</h2>
          <p>oooo an entry</p>
          <p>Loading is {loading}</p>
        </section>
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
