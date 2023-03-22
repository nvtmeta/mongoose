const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const {
  postNewProject,
  getAllProject,
  updateProject,
  deleteProject,
  deleteUsersProject,
} = require('../controller/projectController');

// empty project post
router.post('/', postNewProject);

// get all project
router.get('/', getAllProject);

// update project
router.put('/', updateProject);

// delete project
router.delete('/', deleteProject);

// delete users from project
// router.delete('/', deleteUsersProject);

module.exports = router;
