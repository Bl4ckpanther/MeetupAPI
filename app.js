// add the dependencies
const express = require('express');
const cors = require("cors");

// get the router of meetup
const meetupRouter = require("./controllers/meetups")

// init the app
const app = express()

// init express
app.use(express.json())

// init cors
app.use(cors())

//  set the meetups folder
app.use("/meetups" , meetupRouter)

// Listen Port
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
})