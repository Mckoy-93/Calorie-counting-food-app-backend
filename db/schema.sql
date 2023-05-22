DROP DATABASE IF EXISTS;
CREATE DATABASE food_dev; 

\c foods_dev; 

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