import express from "express";

// Models
import { FoodModel } from "../../database/allModels";

//Create a Router
const Router = express.Router();

/**
 * Router       /r/:_id
 * Des          GET all Food based on particular restaurant
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    //http://localhost:1122/restaurant/?city=surat
    const { _id } = req.params;

    const foods = await FoodModel.find({ restaurant: _id });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router       /c/:category
 * Des          GET all Food based on particular category
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/c/:category", async (req, res) => {
  try {
    //http://localhost:1122/restaurant/?city=surat
    const { category } = req.params;

    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods) {
      return res
        .status(404)
        .json({ error: `No restaurant matched with ${category}` });
    }

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
