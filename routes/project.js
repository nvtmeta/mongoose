const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const { postNewProject } = require('../controller/projectController');
// empty project post

router.post('/', postNewProject);

module.exports = router;
