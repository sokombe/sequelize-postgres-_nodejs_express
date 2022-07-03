const projectController= require('../controllers/projetController.js')

var router=require('express').Router()

router.post('/addProject',projectController.addProject) // create

router.get('/getallProject',projectController.getallProject) // read

/* 
router.put('/:id/updateProject',projectController.getOnearticle)

router.delete('/:id/deleteProject',projectController.deletearticle) */ // delete  

// we export the router
module.exports= router
