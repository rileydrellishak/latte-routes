-- Clear existing data
DELETE FROM routes;

-- Reset auto-increment counter
DELETE FROM sqlite_sequence WHERE name='routes';

-- Insert seed data
INSERT INTO routes (id, coffeeShop, neighborhood, distanceMiles, rating, notes, date, drink) VALUES
(1, 'Milk & Honey', 'The Gulch', 1.1, 5, 'Super busy restaurant, but to go was quick', '2026-02-20', 'Iced Burnt Sugar Latte'),

(2, 'The Cafe at Thistle Farms', 'Sylvan Park', 1.0, 4, 'Amazing special for Valentine''s Day! A chocolate chocolate cherry latte', '2026-02-14', 'Iced Valentine''s Latte'),

(3, 'Frothy Monkey', '12 South', 2.3, 4, 'Cozy vibe and plenty of seating. WiFi was solid for studying.', '2026-02-10', 'Oat Milk Honey Latte'),

(4, 'Barista Parlor', 'East Nashville', 3.8, 5, 'Minimalist aesthetic, strong espresso. A little pricey but worth it.', '2026-02-05', 'Cortado'),

(5, 'Crema', 'Downtown', 1.7, 5, 'Best latte art I’ve seen in a while. Friendly baristas.', '2026-02-02', 'House Vanilla Latte'),

(6, 'Dose Coffee', 'West Nashville', 4.2, 4, 'Quiet weekday morning spot. Great place to focus.', '2026-02-01', 'Hot Caramel Latte'),

(7, '8th & Roast', 'Charlotte Avenue', 2.9, 3, 'Good coffee but limited seating during peak hours.', '2026-01-30', 'Maple Cinnamon Latte');

-- Run from /server sqlite3 server/routes.db < server/seed.sql