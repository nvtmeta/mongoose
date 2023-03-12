const path = require('path');
const dirPath = path.join(__dirname, '../public/images/upload/');

// generate random every seconds
var number;
let seconds
(function repeat() {
    seconds = number = Math.random();
    setTimeout(repeat, 1000);
})();

const uploadSingle = async (fileObj) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    uploadPath = dirPath + seconds + fileObj?.name;
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObj.mv(uploadPath)
        console.log(uploadPath)
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
const uploadMultiple = async (fileArr) => {
    if (Array.isArray(fileArr)) {
        let uploadPath
        let countSuccess = 0
        let arrResult = []
        try {
            for (let i = 0; i < fileArr?.length; i++) {
                uploadPath = dirPath + fileArr[i].name;
                await fileArr[i].mv(uploadPath)
                arrResult.push({
                    status: 'success',
                    path: fileArr[i].name,
                    uploadPath
                })
                countSuccess++
            }
            return {
                arrResult,
                countSuccess,
            }
        } catch (error) {
            return {
                status: 'fail',
                path: null,
                error: JSON.stringify(error)
            }
        }

    }


}


module.exports = {
    uploadMultiple, uploadSingle
}