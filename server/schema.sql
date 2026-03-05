CREATE TABLE routes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    coffee_shop TEXT NOT NULL,
    neighborhood TEXT NOT NULL,
    distance_miles REAL NOT NULL CHECK(distanceMiles >= 0),
    rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
    notes TEXT,
    date TEXT NOT NULL,
    drink TEXT
);

CREATE TABLE coffee_shops (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    coffee_shop TEXT NOT NULL,
    neighborhood TEXT NOT NULL, -- instance of neighborhoods rows
    city TEXT NOT NULL, --instance of cities row
    lat REAL NOT NULL,
    lon REAL NOT NULL,
    street_address TEXT NOT NULL,
);

CREATE TABLE cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city TEXT NOT NULL,
    state_code TEXT NOT NULL
);

CREATE TABLE neighborhoods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    neighborhood TEXT NOT NULL,
    city TEXT NOT NULL, -- instance of cities row
    coffee_shops TEXT NOT NULL, --instances of coffee_shops rows
    routes TEXT NOT NULL, --instances of routes
)