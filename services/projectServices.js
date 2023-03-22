const Project = require('../models/project');

module.exports = {
  createProject: async (data) => {
    try {
      if (data.type === 'EMPTY-PROJECT') {
        const res = await Project.create(data);
        return res;
      }
      if (data.type === 'ADD-USERS') {
        let myProject = await Project.findById(data.projectId).exec();

        myProject.usersInfor.push(...data.usersArr);
        // save database
        const res = await myProject.save();
        console.log(res);
        return 'add users';
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },
};
