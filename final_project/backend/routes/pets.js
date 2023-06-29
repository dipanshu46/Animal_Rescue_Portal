const Pets = require('../models/pets.model')
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

// Multer setup
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

var upload = multer({ storage: storage });

cloudinary.config({
    cloud_name: "dkdovv1mp",
    api_key: "689329276849189",
    api_secret: "NAySxZhmVYt9l8veK_SXshI-HCU",
});

async function uploadToCloudinary(locaFilePath) {

    // locaFilePath: path of image which was just
    // uploaded to "uploads" folder

    var mainFolderName = "main";
    // filePathOnCloudinary: path of image we want
    // to set when it is uploaded to cloudinary
    var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

    return cloudinary.uploader
        .upload(locaFilePath, { public_id: filePathOnCloudinary })
        .then((result) => {

            // Image has been successfully uploaded on
            // cloudinary So we dont need local image 
            // file anymore
            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);

            return {
                message: "Success",
                url: result.url,
            };
        })
        .catch((error) => {

            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
}

router.post('/', upload.array("pets-images", 12), async (req, res) => {
    let imageUrlList = [];

    if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
            let locaFilePath = req.files[i].path;

            // Upload the local image to Cloudinary
            // and get image url as response
            let result = await uploadToCloudinary(locaFilePath);
            imageUrlList.push(result.url);
        }
    }
    try {
        const pet = await Pets.create({
            petName: req.body.petName,
            description: req.body.description,
            age: req.body.age,
            color: req.body.color,
            images: imageUrlList,
        })
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error.message })
    }
})

router.get('/', async (req, res) => {
    // return pets which are not adopted
    try {
        const data = await Pets.find({ isAdopted: false })
        res.json({ status: 'ok', data: data })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.get('/all', async (req, res) => {
    try {
        const data = await Pets.find()
        res.json({ status: 'ok', data: data })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.patch('/update/:id', upload.array("pets-images", 12), async (req, res) => {
    try {
        let updatedBody = req.body;
        let imageUrlList = [];

        if (req.files) {
            for (var i = 0; i < req.files.length; i++) {
                var locaFilePath = req.files[i].path;

                // Upload the local image to Cloudinary
                // and get image url as response
                var result = await uploadToCloudinary(locaFilePath);
                imageUrlList.push(result.url);
            }
            updatedBody.images = imageUrlList
        }
        await Pets.findByIdAndUpdate(req.params.id, updatedBody).then((data) => {
            res.json({ status: 'ok', message: 'product updated successfully', data: data })
        })
        await Pets.find().then((data) => {
            console.log(data)
        })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const data = await Pets.findByIdAndDelete(req.params.id)
        res.json({ status: 'ok', message: 'product Deleted successfully' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: error.message })
    }
})

module.exports = router;