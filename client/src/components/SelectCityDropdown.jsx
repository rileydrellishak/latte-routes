import Select from 'react-select'

const SelectCityDropdown = ({ selectCity, cities }) => {
  const options = cities.map((city) => {
    return (
      { 
        value: `${city.id}`, 
        label: `${city.name}, ${city.state_code}`
      }
    )
  })
  return (
    <>
      <Select 
        id='city-select'
        defaultValue={null}
        onChange={selectCity}
        required
        options={options}
        placeholder='Select City'
      />
    </>
  )
}

export default SelectCityDropdown;