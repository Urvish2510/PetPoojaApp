import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/allModels";

//Create a Router
const Router = express.Router();

/**
 * Router       /signup
 * Des          Register new user
 * Params       none
 * Access       Public
 * Method       POST
 */

Router.post("/signup", async (req, res) => {
    try {
        const { email, password, fullName, phoneNumber } = req.body.caredentials;
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            return res.json({ "user": "User alreadey exists!" });
        };

        //hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //Save data to database
        await UserModel.create({
            ...req.body.caredentials,
            password: hashedPassword,
        });

        //generate JWT auth token(package name jsonwebtoken)
        const token = jwt.sign({ user: { fullName, email } }, process.env.TOKEN_PASSWORD);
        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;