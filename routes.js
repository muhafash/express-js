const router = require("express").Router();

const multer = require("multer");
const upload = multer(dest: "/uploads");
// membuat server
const port = process.env.PORT ? process.env.PORT : 4000;// membuat  server port

router.get("/", (req, res)=>{
    const {page, total}=req.query;
    // mengirim html
    res.send({
        status: "Success",
        message: "Welcome to express tutorial",
        page,
        total
    })
});

router.get("/product/:id", (req, res)=>{
    let data = req.params;
    // mengirimkan json
    res.json({
        id: data.id
    });
});
router.post("/product", (req, res)=>{
    res.json(req.body);
});

router.get("/customer/:name", (req, res)=>{
    let name = req.params;
    // menangkap query
    console.log(req.query);
    // mengirimkan json
    res.json({name});
});


router.get("/:category/:tag", (req, res)=>{
    let {category, tag} = req.params;
    // mengirimkan json
    res.json({
        category: category,
        tag: tag
    });
});

module.exports = {router, port};