import express from "express";

// Models
import { OrderModel } from "../../database/allModels";

//Create a Router
const Router = express.Router();

/**
 * Router       /
 * Des          GET all Orders based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */
