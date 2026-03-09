

const getAllCoffeeShops = (req, res) => {
  const sql = 'SELECT * FROM routes';
  db.all(sql, [], handleDbAllCallback(res));
}

const getCoffeeShopById = (req, res) => {
  const idInt = Number(req.params.id);
  const sql = `SELECT * FROM routes WHERE id = ${idInt}`;
  db.all(sql, [], handleDbAllCallback(res));
}

export { getAllCoffeeShops, getCoffeeShopById}