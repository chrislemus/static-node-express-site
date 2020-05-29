const express = require('express');
const router = express.Router();

const { projects } = require('../data/projectsData.json');

router.get( '/', (req, res) => {
    res.render('index', { projects });
});

router.get( '/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find( ({id}) => id === +projectId );
    res.render('project', { project });
});

router.get( '/about', (req, res) => {
    res.render('about');
});

module.exports = router;