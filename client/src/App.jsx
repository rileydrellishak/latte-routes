import './App.css'
import { getAllCoffeeShopsAPI, getAllCitiesAPI } from '../api/utilities'
import { useState, useEffect } from 'react'
import { FadeLoader } from 'react-spinners'

function App() {
  const [cities, setCities] = useState([])
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const citiesAPI = await getAllCitiesAPI();
      setCities(citiesAPI)
      const coffeeShopsAPI = await getAllCoffeeShopsAPI();
      setCoffeeShops(coffeeShopsAPI)
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
        {cities[0].name}
        <p>select city</p>

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
