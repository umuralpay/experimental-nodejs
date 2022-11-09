import express from "express";
import HomeController from "./controllers/HomeController";

const APP = express();
const APP_PORT = 3000;

APP.get('/', HomeController.index);

APP.listen(APP_PORT, () => {
    console.log(`App started and listening to ${APP_PORT}`)
});