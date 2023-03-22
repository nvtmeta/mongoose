const aqp = require('api-query-params');
const Task = require('../models/task');

module.exports = {
  taskPostSer: async (data) => {
    try {
      if (data.type === 'EMPTY-TASK') {
        const res = await Task.create(data);
        return res;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },
  taskGetSer: async (queryString) => {
    try {
      const page = queryString.page;
      const { limit } = aqp(queryString);
      let offset = (page - 1) * limit;
      const result = await Task.find().skip(offset).limit(limit).exec();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  taskPutSer: async (data) => {
    const { _id, ...rest } = data;
    try {
      const result = await Task.updateOne({ _id }, { ...rest });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  taskDeleteSer: async ({ _id }) => {
    try {
      const result = await Task.deleteById(_id);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
