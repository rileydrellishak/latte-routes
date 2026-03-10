const SelectCityDropdown = ({ selectCity, cities }) => {
  const options = cities.map((city) => {
    return (
      <option key={city.id} value={city.id}>{city.name}, {city.state_code}</option>
    )
  })
  return (
    <>
      <select onChange={selectCity}>
        {options}
      </select>
    </>
  )
}

export default SelectCityDropdown;