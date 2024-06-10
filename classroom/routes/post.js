const express = require("express");
const router = express.Router();


//posts
//index 
router.get("/", (req , res)=>{
    res.send("get for posts");
});

//show
router.get("/:id", (req , res)=>{
    res.send("get for show posts");
});

//new
router.post("/", (req , res)=>{
    res.send("get for post posts");
});

//delete
router.delete("/:id", (req , res)=>{
    res.send("get for delete posts");
});

module.exports = router;