const uploadSingle = async (fileObj) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    uploadPath = __dirname + fileObj.name;

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObj.mv(uploadPath)
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (err) {
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(err)
        }

    }

}
const uploadMultiple = () => {

}

module.exports = {
    uploadMultiple, uploadSingle
}