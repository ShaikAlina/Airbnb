const express = require("express");
const router = express.Router();

//users
//index 
router.get("/", (req , res)=>{
    res.send("get for Users");
});

//show
router.get("/:id", (req , res)=>{
    res.send("get for show Users");
});

//new
router.post("/", (req , res)=>{
    res.send("get for post Users");
});

//delete
router.delete("/:id", (req , res)=>{
    res.send("get for  delete Users");
});

module.exports = router;