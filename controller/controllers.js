const { uploadSingle, uploadMultiple } = require('../services/fileService')

const postuploadsingle = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingle(req.files.image)
    console.log(result)
    return res.send('upload single files')
}


const postuploadmultiple = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files.image)
    let result = await uploadMultiple(req.files.image)
    return res.status(200).json({
        EC: 0,
        data: result
    })
}


module.exports = { postuploadsingle, postuploadmultiple }