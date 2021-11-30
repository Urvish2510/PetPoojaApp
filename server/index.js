require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Database Connection
import ConnectDB from "./database/connection";

// google authentication config
import googleAuthConfig from "./config/google.config";

// private route authentication config
import privateRouteConfig from "./config/route.config";

// API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/User";

//passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const petpooja = express();
petpooja.use(cors());
petpooja.use(express.json());
petpooja.use(helmet());
petpooja.use(passport.initialize());

// Application Routes
petpooja.use("/auth", Auth);
petpooja.use("/restaurant", Restaurant);
petpooja.use("/food", Food);
petpooja.use("/menu", Menu);
petpooja.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

petpooja.listen(1122, () => {
  ConnectDB()
    .then(() => {
      console.log("Server is running !!!");
    })
    .catch((error) => {
      console.log("Server is running but Database connection failed !!!");
      console.log(error);
    });
});
