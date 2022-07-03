const express = require('express');
const cors = require('cors');

// we set short our express instance
const app = express();

// we specify that our app is gonna to run in any avaible port
var corOptions = {
    origin: '*'
}


// midleware
app.use(cors(corOptions))
    
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const router_project = require('./routes/ProjectRoute.js')
app.use('/api/projects', router_project)


// end of routes

//welcome
app.get('/', (req, res) => {
    res.send("Bienvenu(e) dans notre Api!!! ")
})

// port --------------------------------------------------------------------------
const PORT = process.env.PORT || 8080

//server-----------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

