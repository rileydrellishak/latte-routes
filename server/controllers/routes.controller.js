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

const deleteRoute = (req, res) => {
  const idInt = Number(req.params.id)
  console.log(idInt);
  const updatedRoutes = routes.filter(r => r.id != idInt)
  res.status(200).json(updatedRoutes)
}

export { getAllRoutes, createRoute, deleteRoute }