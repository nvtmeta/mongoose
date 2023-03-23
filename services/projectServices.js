const aqp = require('api-query-params');
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
      if (data.type === 'REMOVE-USERS') {
        let myProject = await Project.findById(data.projectId).exec();
        myProject.usersInfor.pull(...data.usersArr);
        const res = await myProject.save();
        return res;
      }
      if (data.type === 'ADD-TASKS') {
        let myProject = await Project.findById(data.projectId).exec();
        myProject.tasks.push(...data.taskArr);
        const res = await myProject.save();
        return 'add tasks';
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },

  getProject: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    let offset = (page - 1) * limit;
    delete filter.page;
    const result = await Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    try {
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  updateProjectSer: async (data) => {
    try {
      const { name, endDate, description, id } = data;
      const res = await Project.updateOne(
        { _id: id },
        { name, endDate, description }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  deleteProjectSer: async ({ id }) => {
    try {
      const res = await Project.findOneAndDelete({ _id: id });
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  deleteUsersProjectSer: async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
