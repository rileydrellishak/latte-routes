import CoffeeShopCard from "./CoffeeShopCard";

const CoffeeShopContainer = ({data}) => {
  const cards = data.map((coffeeShop) => {
    return (
      <CoffeeShopCard cs={coffeeShop}/>
    )
  })
  return (
    <div className='coffee-shops-container'>
      {cards}
    </div>
  )
};

export default CoffeeShopContainer;