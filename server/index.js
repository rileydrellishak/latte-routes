const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('the server is running!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let routes = [
  {
    id: 1,
    coffeeShop: "Milk & Honey",
    neighborhood: 'The Gulch',
    distanceMiles: 1.1,
    rating: 5,
    notes: 'Super busy restaurant, but to go was quick',
    date: '2026-02-20'
  }
]