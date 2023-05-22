const db = require("../db/dbConfig.js");

const getAllFoods = async () => {
    try {
        const allFoods = await db.any('SELECT * FROM foods');
        return allFoods;
    } catch (error) {
        return error;
    }
};

const getFood = async (id) => {
    try {
        const oneFood = await db.one('SELECT * FROM foods WHERE id=$1', id);
        return oneFood;
    } catch (error) {
        return error;
    }
};

const createFood = async (food) => {
    try {
        const newFood = await db.one(
            'INSERT INTO foods (name, cal, fat, carb, fiber, protein, image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [food.name, food.cal, food.fat, food.carb, food.fiber, food.protein, food.image]
        );
        return newFood;
    } catch (error) {
        return error;
    }
};

const deleteFood = async (id) => {
    try {
        const deletedFood = await db.one(
            'DELETE FROM foods WHERE id = $1 RETURNING *', id);
        return deletedFood;
    } catch (error) {
        return error;
    }
};

const updateFood = async (food, id) => {
    try {
        const updatedFood = await db.one(
            'UPDATE foods SET name=$1, cal=$2, fat=$3, carb=$4, fiber=$5, protein=$6, image=$7 WHERE id=$8 RETURNING *',
            [food.name, food.cal, food.fat, food.carb, food.fiber, food.protein, food.image, id]
        );
        return updatedFood;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllFoods, getFood, createFood, deleteFood, updateFood };