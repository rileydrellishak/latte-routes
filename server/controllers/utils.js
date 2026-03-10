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

export { getAllModels, getModelById, validateId, validateModel, handleControllerError }