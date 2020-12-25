import SocketHandlerService from "./services/SocketHandlerService";

require("./config/db.config")();
import {app, io} from "./config"

import express from 'express';
import cors from "cors"
import {apiRouter} from "./api";

app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.use(express.json())

app.use("/api", apiRouter)
io.on('connection', (socket) => new SocketHandlerService(socket).handle());