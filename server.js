// dependencites
const express = require ("express");
const cors = require ("cors");

//json imports
const projects = require("./projects.json");
const about = require("./about.json");

//app object
const app = express();

// middleware
app.use(cors());

//home route
app.get("/", (req,res)=>{
    res.send("Hello World!");
});

// retrieve projects route
app.get("/projects", (req,res)=>{
    // send projects via JSON
    res.json(projects);
});

// about info
app.get("/about", (req,res) => {
    //send projects via JSON
    res.json(about);
});

//my port!
const PORT = process.env.PORT || 4000;

//listenerrrr
app.listen(PORT, () => console.log(`It's me, yer BOY, on port ${PORT}, yERRRRRRRRRR`));