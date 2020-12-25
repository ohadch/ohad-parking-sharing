import SocketHandlerService from "./services/SocketHandlerService";

require("./config/db")();
import {app, io} from "./config"

import express from 'express';
import cors from "cors"
import {apiRouter} from "./api";

app.use(cors())
app.use(express.json())

app.use("/api", apiRouter)
io.on('connection', (socket) => new SocketHandlerService(socket).handle());

export default app;