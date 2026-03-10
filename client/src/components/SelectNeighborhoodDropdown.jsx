import Select from 'react-select'

const SelectNeighborhoodDropdown = ({ selectNeighborhood, neighborhoods, selectedCityId }) => {
  const options = neighborhoods.map((neighborhood) => {
    return (
      { value: `${neighborhood.id}`, label: `${neighborhood.name}`}
    )
  })
  
  return (
    <>
      <Select 
        id='neighborhood-select'
        defaultValue={null}
        onChange={selectNeighborhood}
        required
        options={options}
        placeholder='Select Neighborhood'
        isDisabled={selectedCityId === null}
      />
    </>
  )
}

export default SelectNeighborhoodDropdown;