const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main().then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log(err);
});


app.get("/" , (req,res)=>{
    res.send("working root");
});

//index.ejs
app.get("/listings" , async(req,res)=>{
    let alllisting = await Listing.find({});
    res.render("./listings/index.ejs",{alllisting});
});

//create Route
app.get("/listings/new",(req,res)=>{
    res.render("./listings/create.ejs");
});

//show Route
app.get("/listings/:id" ,async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
});

//create Route
app.post("/listings" , async (req , res)=>{
   const listing = req.body;
   const newListing = new Listing(listing);
   await newListing.save();
   res.redirect("/listings" );
});

//Edit Route
app.get("/listings/:id/edit" ,async (req , res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs" , {listing});
});

//Update Route
app.put("/listings/:id", async (req , res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect("/listings" );
});

//delete Route
app.delete("/listings/:id" , async (req,res) => {
    let {id} = req.params;
    let del_listing = await Listing.findByIdAndDelete(id);
    console.log(del_listing);
    res.redirect("/listings");
});

//server listening
app.listen(1111 , ()=>{
    console.log("server is listening ");
});

