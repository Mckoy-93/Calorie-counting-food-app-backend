DROP TABLE foods IF EXISTS;

CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cal INTEGER,
    fat INTEGER,
    carb INTEGER,
    fiber INTEGER,
    protein INTEGER,
    image TEXT NOT NULL
);