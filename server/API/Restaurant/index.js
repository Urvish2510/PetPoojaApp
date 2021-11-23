import express from "express";

// Models
import { RestaurantModel } from "../../database/allModels";

//Create a Router
const Router = express.Router();

/**
 * Router       /
 * Des          GET all restaurant datails on the city
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/", async (req, res) => {
  try {
    //http://localhost:1122/restaurant/?city=surat
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res.json({ error: "No restaurants found in this city" });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router       /:_id
 * Des          GET individual restaurant datail based on id
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    //http://localhost:1122/restaurant/143827ewuh37d238
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant) {
      return res.status(400).json({ error: "Restauant Not Found !!!" });
    }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router       /search
 * Des          GET restaurant datail based on search string
 * Params       none
 * Access       Public
 * Method       GET
 */

Router.get("/search/:searchString", async (req, res) => {
  /**
   * searchString = Raj
   * results = {
   *      RajHotel
   *      RajShow
   *      RonRaj
   *      Ronraj
   * }
   */
  try {
    //http://localhost:1122/restaurant/143827ewuh37d238
    const { searchString } = req.params;
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });
    if (!restaurants) {
      return res
        .status(404)
        .json({ error: `No restaurant matched with ${searchString}` });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
