import mongoose from "mongoose";
import {MONGO_URI} from "../settings";

// Tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true
        });
        console.log("Successfully connected to the MongoDB database");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;