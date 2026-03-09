import supabase from "../supabaseClient.js";

const handleDbAllCallback = (res) => {
  return (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  };
};

const handleDbRunCallback = (res, message = 'Deleted') => {
  return (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message });
  };
};

const getAllRoutes = (req, res) => {
  const sql = 'SELECT * FROM routes';
  db.all(sql, [], handleDbAllCallback(res));
}

const getRouteById = (req, res) => {
  const idInt = Number(req.params.id);
  const sql = `SELECT * FROM routes WHERE id = ${idInt}`;
  db.all(sql, [], handleDbAllCallback(res));
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
  const sql = `DELETE FROM routes WHERE id = ?`;
  console.log("Deleting id:", idInt);
  db.serialize(() => {
    db.run(sql, [idInt], handleDbRunCallback(res));
  })
};

export { getAllRoutes, getRouteById, createRoute, deleteRoute }