import supabase from "../database/supabaseClient.js";

const handleControllerError = (res, error) => {
  return res.status(error.status || 500).json({ error: error.message })
}

const validateId = (id) => {
  const idInt = Number(id)
  if (isNaN(idInt)) {
    const error = new Error(`Id ${id} invalid. Ids must be integers.`);
    error.status = 400;
    throw error
  }
  return idInt
}

const validateModel = async (idInt, modelName) => {
  const { data, error } = await supabase
    .from(modelName)
    .select('*')
    .eq('id', idInt)
    .maybeSingle();

  if (error) {
    const err = new Error(error.message);
    err.status = 500;
    throw err;
  }

  if (!data) {
    const err = new Error(`${modelName} with id ${idInt} not found`)
    err.status = 404;
    throw err
  }

  return data
}

const getAllModels = (modelName) => async (req, res) => {
  const { data, error } = await supabase
  .from(modelName)
  .select('*');

  if (error) {
    return handleControllerError(res, error)
  }

  res.status(200).json(data)
}

const getModelById = (modelName) => async (req, res) => {
  try {
    const idInt = validateId(req.params.id)
    const model = await validateModel(idInt, modelName)
    return res.status(200).json(model);

  } catch (error) {
    return handleControllerError(res, error)  
  }
  
}

// get all X that belong to this parent (neighborhoods to cities, coffee shops to neighborhoods)
const getRelatedModels = (childModel, foreignKeyColumn) => async (req, res) => {
  const fkColModelName = {
    'city_id': 'cities',
    'neighborhood_id': 'neighborhoods',
    'coffee_shop_id': 'coffee_shops',
    'route_id': 'routes',
  }
  
  try {
    const parentId = validateId(req.params.id)
    
    await validateModel(parentId, fkColModelName[foreignKeyColumn])
    const { data, error } = await supabase
    .from(childModel)
    .select('*')
    .eq(foreignKeyColumn, parentId)

    if (error) throw error;
    res.status(200).json(data)
  } catch (error) {
    return handleControllerError(res, error)
  }
}

export { getAllModels, getModelById, validateId, validateModel, handleControllerError, getRelatedModels }