const {
  taskPostSer,
  taskGetSer,
  taskPutSer,
  taskDeleteSer,
} = require('../services/taskServices');

module.exports = {
  taskPost: async (req, res) => {
    let result = await taskPostSer(req.body);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
  taskGet: async (req, res) => {
    let result = await taskGetSer(req.query);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
  taskPut: async (req, res) => {
    let result = await taskPutSer(req.query);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
  taskDelete: async (req, res) => {
    let result = await taskDeleteSer(req.body);
    return res.status(200).json({
      EC: 0,
      result,
    });
  },
};
