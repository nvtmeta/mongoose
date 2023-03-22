const {
  createProject,
  getProject,
  updateProjectSer,
  deleteProjectSer,
  deleteUsersProjectSer,
} = require('../services/projectServices');

module.exports = {
  postNewProject: async (req, res) => {
    let result = await createProject(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  getAllProject: async (req, res) => {
    let result = await getProject(req.query);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
  updateProject: async (req, res) => {
    let result = await updateProjectSer(req.body);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
  deleteProject: async (req, res) => {
    let result = await deleteProjectSer(req.body);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
};
