DROP DATABASE IF EXISTS;
CREATE DATABASE anabrolic_db; 

\c anabrolic_db; 

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