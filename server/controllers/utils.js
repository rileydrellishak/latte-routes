import supabase from "../database/supabaseClient.js";

const getAllModels = (modelName) => async (req, res) => {
  const { data, error } = await supabase
  .from(modelName)
  .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data)
}

const getModelById = (modelName) => async (req, res) => {
  const idInt = Number(req.params.id);

  if (isNaN(idInt)) {
    return res.status(400).json({ error: `Id ${req.params.id} invalid. Ids must be integers.`})
  }
  
  const { data, error } = await supabase
  .from(modelName)
  .select('*')
  .eq('id', idInt);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  if (!res.data) {
    return res.status(404).json({ error: `${modelName} with id of ${idInt} not found.`})
  }

  res.status(200).json(data)
}

export { getAllModels, getModelById }