import RouteCard from "./RouteCard"

const RouteCardContainer = ({ routesData }) => {
  const routeCards = routesData.map((data) => {
    return <RouteCard 
      key={data.id}
      coffeeShop={data.coffeeShop}
      date={data.date}
      neighborhood={data.neighborhood}
      distanceMiles={data.distanceMiles}
      rating={data.rating}
      notes={data.notes}
      drink={data.drink}
    />
  })
  return (
    <section>
      {routeCards}
    </section>
  )
};

export default RouteCardContainer;