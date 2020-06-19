const express = require('express');
const router = express.Router();


const { projects } = require('../data/projectsData.json');

router.get( '/', (req, res) => {
    res.render('index', { projects });
});

router.get( '/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find( ({id}) => id === +projectId );
    if(project) {
        res.render('project', { project });
    } else {
        const err = new Error('Not Found');
        err.status = 404;
        res.render('error', {error: err})
    }
    
});

router.get( '/about', (req, res) => {
    res.render('about');
});

module.exports = router;