const { ObjectId } = require("mongodb");
const db = require("../mongo");
const bcrypt = require("bcrypt");


// to find all the users details
const service = {
    async posts(req, res) {
        try {
            const data = await db.users.find().toArray();
            console.log(data);
            res.send(data);
        } catch (err) {
            res.sendStatus(500);
        }

    },

    //for registration

    async signup(req, res, next) {
        try {
            //check email existance
            const data = await db.users.findOne({ email: req.body.email });
            if (data) return res.status(400).send("User already exists");

            //encrypting password
            const salt = await bcrypt.genSalt();
            req.body.password = await bcrypt.hash(req.body.password, salt);

            // orelse inserting data
            await db.users.insertOne(req.body);
            res.send("Registration done successfully");
        } catch (err) {
            console.log("Error registering ", err);
            res.sendStatus(500);
        }
    },

    //for log in

    async logIn(req, res, next) {
        try {
            //check email existance
            const data = await db.users.findOne({ email: req.body.email });
            if (!data) return res.status(401).send("User does not exists");

            //check the paaword
            const isValid = await bcrypt.compare(req.body.password, data.password);
            if (!isValid) return res.send({
                statusCode: 403,
                status: "Failed",
                statusMessage: "User/Password incorrect"
            });

            res.send({
                statusCode: 200,
                status: "success",
                statusMessage: "logged in successfully"
            });

        } catch (err) {
            console.log("Error logging in ", err);
            res.sendStatus(500);
        }

    }

}

module.exports = service;