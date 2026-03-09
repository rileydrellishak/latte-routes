# Latte Routes
A coffee and walking route tracker ☕️ 📍

## Core Features 🤎

### Generate a walking route 🚶‍♀️
- Enter city and/or neighborhood (or use current location!)
- Choose a coffee shop
- Set desired route length in miles
- Route is generated based on selected coffee shop and length parameter

### Create an entry 🥐
- Coffee shop name
- Neighborhood
- Distance walked
- Latte rating
- Notes
- Date

### Display entries 🧁
- List of all entries
- Average rating
- Total miles walked

## Tech Stack (JavaScript) 🍄‍🟫
### Frontend
- React
### Backend
- Express
### Storage
- SQLite
- Sequelize

## Data Models 🐿️
### coffee_shops
```
{
  id: integer,
  coffee_shop: string,
  neighborhood: id of neighborhoods,
  city: id of cities,
  lat: float,
  lon: float,
  street address: string
}
```
### cities
```
{
  id: integer,
  city: string,
  state_code: string,
  neighborhoods: id(s) of neighborhoods
}
```
### neighborhoods
```
{
  id: integer,
  neighborhood: string,
  city: string,
  coffee_shops: id(s) of coffee_shop,
  routes: id(s) of routes
}
```
### routes
```
{
  id: integer,
  coffee_shop: id of coffee_shop,
  distance_miles: float,
  entries: id(s) of entries
}
```
### entries
```
{
  id: integer,
  user: string,
  date: string,
  drink: string,
  route: id of route,
  notes: string,
}
```
