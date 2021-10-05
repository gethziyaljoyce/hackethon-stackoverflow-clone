require("dotenv").config();
const express = require("express");
const mongo = require("./mongo");

const userRoutes = require("./routes/users.routes");



const app = express();
const port = 3001;

(async function () {
    try {
        //connect to database
        await mongo.connect();

        //middleware to parse the request body into json format
        app.use(express.json());

        //logging middleware
        app.use((req, res, next) => {
            console.log("common");
            next();
        });


        //routes
        app.use("/users", userRoutes);

        //server start

        app.listen(port, () => { console.log(`Its running in the port ${port}`) });
    } catch (err) {
        console.log("error starting server", err);
    }

})();



