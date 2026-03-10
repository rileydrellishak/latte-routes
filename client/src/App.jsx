import './App.css'
import { getAllCitiesAPI, getNeighborhoodsForCity, getCoffeeShopsForNeighborhood } from '../api/utilities'
import { useState, useEffect } from 'react'
import { FadeLoader } from 'react-spinners'
import SelectCityDropdown from './components/SelectCityDropdown'
import SelectNeighborhoodDropdown from './components/SelectNeighborhoodDropdown'
import CoffeeShopContainer from './components/CoffeeShopContainer'

// key is cityId, value is array of neighborhoods
const cityNeighborhoodsCache = {}

// key is neighborhoodId, value is array of coffee shops
const neighborhoodCoffeeShopCache = {}

function App() {
  const [cities, setCities] = useState([])
  const [neighborhoods, setNeighborhoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCityId, setSelectedCityId] = useState(null)
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState(null)
  const [coffeeShops, setCoffeeShops] = useState([])
  const [APILoading, setAPILoading] = useState(false)

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
    setCoffeeShops([])
    setSelectedNeighborhoodId(null)

    const cityId = selectedCity.value
    setSelectedCityId(cityId);
    
    if (cityNeighborhoodsCache[cityId] === undefined) {
      const neighborhoodsAPI = await getNeighborhoodsForCity(cityId);
      setNeighborhoods(neighborhoodsAPI)
      cityNeighborhoodsCache[cityId] = neighborhoodsAPI
    }
    
    else {
      setNeighborhoods(cityNeighborhoodsCache[cityId])
    }
  }

  const selectNeighborhood = async (selectedNeighborhood) => {
    setCoffeeShops([])
    
    const neighborhoodId = selectedNeighborhood.value
    setSelectedNeighborhoodId(neighborhoodId)
    
    if (neighborhoodCoffeeShopCache[neighborhoodId] === undefined) {
      const coffeeShopsAPI = await getCoffeeShopsForNeighborhood(neighborhoodId);
      setCoffeeShops(coffeeShopsAPI)
      neighborhoodCoffeeShopCache[neighborhoodId] = coffeeShopsAPI
    }

    else {
      setCoffeeShops(neighborhoodCoffeeShopCache[neighborhoodId])
    }
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
        <CoffeeShopContainer data={coffeeShops}/>
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
