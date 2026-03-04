import sqlite3 from 'sqlite3'
import path from 'path'

const db = new sqlite3.Database(
  path.join('./latte_routes.db'),
  sqlite3.OPEN_READWRITE,
  (error) => {
    if (error) {
      console.error('Error opening database:', error.message);
    } else {
      console.log(`Connected to existing SQLite db`);
    }
  }
);

export default db;