const multer = require('multer');
const router = require('express').Router();

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './uploads')
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const myStorage = multer({ storage : storage }); 

router.post('/uploadfile', myStorage.single('image'), (req, res) => {
    console.log(req.file);
    res.send('File Uploaded Successfully');
});

module.exports = router;
