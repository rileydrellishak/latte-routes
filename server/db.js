import sqlite3 from 'sqlite3'
import path from 'path'

const db = new sqlite3.Database(
  './latte_routes.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE | sqlite3.OPEN_FULLMUTEX,
  (error) => {
    if (error) {
      console.error('Error opening database:', error.message);
    } else {
      console.log(`Connected to existing SQLite db`);
    }
  }
);

db.configure('busyTimeout', 5000)

export default db;