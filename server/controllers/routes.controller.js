import routes from "../data/routes.data.js";

const getAllRoutes = (req, res) => {
  res.json(routes)
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