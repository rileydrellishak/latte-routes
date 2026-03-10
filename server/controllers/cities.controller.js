import supabase from "../database/supabaseClient.js";
import { validateId, validateModel, handleControllerError } from "./utils.js";

const getNeighborhoodsForCity = async (req, res) => {
  try {
    const idInt = validateId(req.params.id)
    await validateModel(idInt, 'cities')

    const { data, error } = await supabase
    .from('neighborhoods')
    .select('*')
    .eq('city_id', idInt)

    if (error) {
      return handleControllerError(res, error)
    }

    if (!data || data.length === 0) {
      return res.status(404).json({ error: `City with id of ${idInt} has no neighborhoods.`})
    }

    res.status(200).json(data)
  } catch (error) {
    return handleControllerError(res, error)
  }
}

export { getNeighborhoodsForCity }