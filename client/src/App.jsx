import './App.css'
import { getAllCoffeeShopsAPI, getAllCitiesAPI, getNeighborhoodsForCity } from '../api/utilities'
import { useState, useEffect } from 'react'
import { FadeLoader } from 'react-spinners'
import SelectCityDropdown from './components/SelectCityDropdown'
import SelectNeighborhoodDropdown from './components/SelectNeighborhoodDropdown'
import CoffeeShopContainer from './components/CoffeeShopContainer'

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

  const selectCity = async (selectedCity) => {
    setNeighborhoods([])
    setSelectedNeighborhoodId(null)

    const cityId = selectedCity.value
    setSelectedCityId(cityId);

    const neighborhoodsAPI = await getNeighborhoodsForCity(cityId);
    setNeighborhoods(neighborhoodsAPI)
  }

  const selectNeighborhood = (selectedNeighborhood) => {
    const neighborhoodId = selectedNeighborhood.value
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
        <label><h2>Select City</h2></label>
        <SelectCityDropdown
          selectCity={selectCity}
          cities={cities}
        />

        <label><h2>Select Neighborhood</h2></label>
        <SelectNeighborhoodDropdown
          key={selectedCityId}
          selectNeighborhood={selectNeighborhood}
          neighborhoods={neighborhoods}
          selectedCityId={selectedCityId}
        />

        <h2>Coffee Shops</h2>
        <CoffeeShopContainer />
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
