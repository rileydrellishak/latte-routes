import './App.css'
import { getAllCoffeeShopsAPI, getAllCitiesAPI, getNeighborhoodsForCity } from '../api/utilities'
import { useState, useEffect } from 'react'
import { FadeLoader } from 'react-spinners'
import SelectCityDropdown from './components/SelectCityDropdown'
import SelectNeighborhoodDropdown from './components/SelectNeighborhoodDropdown'
function App() {
  const [cities, setCities] = useState([])
  const [neighborhoods, setNeighborhoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCityId, setSelectedCityId] = useState(null)
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState(null)

  const fetchData = async () => {
    try {
      const citiesAPI = await getAllCitiesAPI();
      setCities(citiesAPI)
      if (citiesAPI.length > 0) {
        const defaultCityId = citiesAPI[0].id;
        setSelectedCityId(defaultCityId);
        
        const neighborhoodsAPI = await getNeighborhoodsForCity(defaultCityId)
        setNeighborhoods(neighborhoodsAPI)
        setSelectedNeighborhoodId(neighborhoodsAPI[0].id)
      }
      
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

  const selectCity = async (event) => {
    const cityId = event.target.value
    setSelectedCityId(cityId);
    const neighborhoodsAPI = await getNeighborhoodsForCity(cityId);
    setNeighborhoods(neighborhoodsAPI)
  }

  const selectNeighborhood = async (event) => {
    const neighborhoodId = event.target.value
    setSelectedNeighborhoodId(neighborhoodId)
  }

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
        <h2>select city</h2>
        <SelectCityDropdown selectCity={selectCity} cities={cities}/>
        
        <h2>select neighborhood</h2>
        <SelectNeighborhoodDropdown selectNeighborhood={selectNeighborhood} neighborhoods={neighborhoods}/>
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
