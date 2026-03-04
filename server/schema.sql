CREATE TABLE routes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    coffeeShop TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    distanceMiles REAL NOT NULL CHECK(distanceMiles >= 0),
    rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
    notes TEXT,
    date TEXT NOT NULL,
    drink TEXT
);