import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.SUPABASE_CONNECTION_STRING)

sequelize.authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch(err => console.error("Database connection error:", err));

export default sequelize;