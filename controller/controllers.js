const { uploadSingle } = require('../services/fileService')

const postuploadsingle = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingle(req.files.image)
    console.log(result)
    return res.send('upload single files')
}

module.exports = { postuploadsingle }