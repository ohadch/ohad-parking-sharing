require("./config/db.config")();
import {app} from "./config"

import express from 'express';
import cors from "cors"
import {apiRouter} from "./api";

app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.use(express.json())

app.use("/api", apiRouter)