import db from '../db.js'

const getAllRoutes = (req, res) => {
  const sql = 'SELECT * FROM routes';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows)
  })
}

const createRoute = (req, res) => {
  const newRoute = {
    id: (routes.length + 1),
    ...req.body
  };

  routes.push(newRoute);
  res.status(201).json(newRoute)
}

// does not show removed in getAllRoutes yet, need to validate the model to make sure it exists
const deleteRoute = (req, res) => {
  const idInt = Number(req.params.id)
  const routeToRemove = routes.filter(r => r.id === idInt)
  if (routeToRemove.length < 1) {
    console.log('the route with that id dne')
    return res.status(404).json('womp')
  }
  const updatedRoutes = routes.filter(r => r.id != idInt)
  res.status(204).json()
}

export { getAllRoutes, createRoute, deleteRoute }