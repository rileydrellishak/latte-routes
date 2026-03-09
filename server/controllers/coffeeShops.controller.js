import supabase from "../database/supabaseClient.js";

const getAllCoffeeShops = async (req, res) => {
  const { data, error } = await supabase
  .from('coffee_shops')
  .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data)
}

const getCoffeeShopById = async (req, res) => {
  const idInt = Number(req.params.id);
  const { data, error } = await supabase
  .from('coffee_shops')
  .select('*')
  .eq('id', idInt);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data)
}

export { getAllCoffeeShops, getCoffeeShopById}