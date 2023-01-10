require("./config/db.config")();
import {app} from "./config"

import express from 'express';
import cors from "cors"
import {apiRouter} from "./api";

app.use(cors())
app.use(express.json())

app.use("/api", apiRouter)