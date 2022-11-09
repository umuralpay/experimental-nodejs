import {Request, Response} from "express";
import { workerData } from "worker_threads";

function index(req: Request, res: Response) {

    return res.json({
        details: workerData.thread_count
    });
}

export default {
    index
}