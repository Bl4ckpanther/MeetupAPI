const express = require('express');

const app = express.Router()

let meetups = [
    {
        id: 1,
        name: "title 1"
    },
    {
        id: 2,
        name: "title 2"
    }
];

app.get("/", (req, res) => {
    res.send(meetups)
})

app.post("/", (req, res) => {
    meetups.push(req.body)
    res.status(201).send("meetups added Successfully");
});

app.get("/:id" , (req, res) => {
    let meetup = meetups.find( meetup => {
        return req.params.id == meetup.id;
    })
    
    if(meetup){
        res.send(meetup)
        return;
    }

    res.status(404).send('Not found')
});

app.put("/:id", (req, res) => {
    let meetup = meetups.find( meetup => {
        return parseInt(req.params.id) === meetup.id
    })

    if (meetup) { 
        meetup.name = req.body.name;
        res.status(200).send("meetups updated successfully")
        return
    }

    res.status(400).send("Not found")
})

app.delete("/:id", (req ,res) => {
    let meetup = meetups.find( meetup => {
        return parseInt(req.params.id) === meetup.id;
    })

    if(meetup){
        let index = meetups.indexOf(meetup)
        meetups.splice(index, 1)
        res.status(200).send("meetups removed successfully")
        return;
    }

    res.status(404).send('Not found')
});

module.exports = app;