const db = require('../models')

// create the main Model
const Project = db.project

// 1. create article
const addProject = async (req, res) => {
    let info = {
        name: req.body.name,
        description: req.body.description,
        priority: req.body.priority,
    }

    const newproject = await Project.create(info);
    res.status(200)
        .send(newproject)
    console.log(newproject)
}
 
// 2. getallProject
const getallProject=(req,res)=>{
    res.send('getting project')
}

module.exports={
    addProject,
    getallProject
}