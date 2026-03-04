const RouteCard = ({ id, coffeeShop, date, neighborhood, drink, distanceMiles, rating, notes }) => {
  const stars = (rating) => {
    const output = []
    while (output.length < rating) {
      output.push('⭐️')
    } return output.join('')
  }
  return (
    <section className="route-card">
      <h2>{coffeeShop}, {neighborhood}</h2>
      <h3>{date}</h3>
      <h3 className="drink">{drink}</h3>
      <p className="notes">{notes}</p>
      <p className="distance">{distanceMiles} miles</p>
      <div className="stars">{stars(rating)}</div>
    </section>
  )
};

export default RouteCard;