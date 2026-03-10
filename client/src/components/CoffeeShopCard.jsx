const CoffeeShopCard = ({ cs }) => {
  return (
    <div className='coffee-shop-card'>
      <h3>{cs.name}</h3>
      <h4>{cs.street_number} {cs.street_name}</h4>
    </div>
  )
};

export default CoffeeShopCard;