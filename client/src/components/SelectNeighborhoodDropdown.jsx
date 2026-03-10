const SelectNeighborhoodDropdown = ({ selectNeighborhood, neighborhoods }) => {
  const options = neighborhoods.map((neighborhood) => {
    return (
      <option value={neighborhood.id}key={neighborhood.id}>{neighborhood.name}</option>
    )
  })
  
  return (
    <>
      <select onChange={selectNeighborhood}>
        {options}
      </select>
    </>
  )
}

export default SelectNeighborhoodDropdown;