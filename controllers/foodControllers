const express = require('express');
const foods = express.Router();
const { getAllFoods, getFood, createFood, deleteFood, updateFood } = require('../queries/foods');
const validateFood = require('../validateFood.js');


foods.get('/', async (req, res) => {
    const allFoods = await getAllFoods();
    if (allFoods[0]) {
        res.status(200).json({
            success: true,
            payload: allFoods
        });
    } else {
        res.status(500).json({ error: "server error" });
    }
});

foods.get("/:id", async (req, res) => {
    const { id } = req.params;
    const food = await getFood(id);
    if (food.id) {
        res.json({
            success: true,
            payload: food
        });
    } else {
        res.status(404).json({
            success: false,
            payload: '/not found/'
        });
    }
});

foods.post("/", async (req, res) => {
    const { body } = req;
    body.name = validateFood(body);
    try {
        const createdFood = await createFood(body)
        if (createdFood.id) {
            res.status(200).json({ success: true, payload: createdFood })
        } else {
            res.status(422).json({ success: false, payload: "Must include name field" })
        }
    } catch (error) {
        console.log(error)
    }
});

foods.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedFood = await deleteFood(id);
    if (deletedFood.id) {
        res.status(200).json({
            success: true,
            payload: deletedFood
        });
    } else {
        res.status(404).json({
            success: false,
            payload: "Not found"
        });
    }
});

foods.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedFood = await updateFood(req.body, id);
    if (updatedFood.id) {
        res.status(200).json({
            success: true,
            payload: updatedFood
        });
    } else {
        res.status(404).json({ error: "Not found" })
    }
});

module.exports = foods;