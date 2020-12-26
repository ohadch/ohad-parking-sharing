import {RequestHandler} from "express";

export const authMiddleware : RequestHandler = async (req, res, next) => {
    const user = req.header("user");
    if (user) {
        (req as any).user = JSON.parse(user);
    }
    next();
}