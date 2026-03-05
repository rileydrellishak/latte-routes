-- Clear existing data
DELETE FROM routes;

-- Reset auto-increment counter
DELETE FROM sqlite_sequence WHERE name='routes';

-- Insert seed data
-- INSERT INTO <table-name> (column, column, etc) VALUES (x, x, x), (y, y, y);

-- Run from /server sqlite3 server/routes.db < server/seed.sql