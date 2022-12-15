const express = require('express');
const router = new express.Router();
const multer = require('multer');
const User = require('../model/Schema')
const moment = require('moment')

// image storage path
const imgconfig = multer.diskStorage({
    destination : (req, file, callback)=> {
        callback(null, "./uploads")
    },
    filename: (req, file, callback)=> {
        callback(null, `image-${Date.now()}. ${file.originalname}`)
    }
})


// image filter
const isImage = (req, file, callback)=> {
    if (file.mimetype.startsWith("image")){
        callback(null, true)
    } else {
        callback(new Error("Only image is allowed"))
    }
}


const upload = multer({
    storage : imgconfig,
    fileFilter : isImage
})



// user register

router.post('/register', upload.single('photo'), async(req, res) => {
    const {filename} = req.file;
    const {fname} = req.body;

    if (!fname || !filename) {
        res.status(401).json({status: 401, message : 'fill all the data'})
    }


    const date = moment(new Date()).format('YYYY-MM-DD')
    try {
        const user = new User({
            fname: fname,
            imgPath : filename,
            date : date
        })

        const result = await user.save()
        console.log(result);

        res.status(201).json({status : 201, result})
    } catch (error) {
        res.status(401).json({status: 401, error})
    }

})


//user data get
router.get('/getData', async(req, res)=> {
    try {
        const users = await User.find({})
        res.status(201).json({status: 201, users})
    } catch (error) {
        res.status(401).json({status: 401, error})
    }
})


// delete user data
router.delete('/:id', async(req, res)=> {

    try {
        const {id} = req.params;

        const dltUser = await User.findByIdAndDelete({_id : id})

        res.status(201).json({status: 201, dltUser})
    } catch (error) {
        res.status(401).json({status: 401, error})
    }
})


module.exports = router;