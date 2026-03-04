const RouteCard = ({ id, coffeeShop, date, neighborhood, drink, distanceMiles, rating, notes }) => {
  return (
    <section>
      {date}, {coffeeShop}, {drink}
    </section>
  )
};

export default RouteCard;