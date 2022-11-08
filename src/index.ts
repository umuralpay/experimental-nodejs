import express, {Request, Response} from "express";

const APP = express();
const APP_PORT = 3000;

APP.get('/', (req: Request, res: Response) => {
    res.json({
        "success": false,
        "data": "selam 2"
    })
});

APP.listen(APP_PORT, () => {
    console.log(`App started and listening to ${APP_PORT}`)
});