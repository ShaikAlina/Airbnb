const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

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
app.get("/listings" ,wrapAsync( async(req,res)=>{
    let alllisting = await Listing.find({});
    res.render("./listings/index.ejs",{alllisting});
}));

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("./listings/new.ejs");
});

//show Route
app.get("/listings/:id" ,wrapAsync( async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
}));

//create Route
app.post("/listings" ,wrapAsync( async (req , res , next)=>{
 
    const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings" );
   
}));

//Edit Route
app.get("/listings/:id/edit" ,wrapAsync(async (req , res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs" , {listing});
}));

//Update Route
app.put("/listings/:id",wrapAsync( async (req , res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect("/listings" );
}));

//delete Route
app.delete("/listings/:id" ,wrapAsync( async (req,res) => {
    let {id} = req.params;
    let del_listing = await Listing.findByIdAndDelete(id);
    console.log(del_listing);
    res.redirect("/listings");
}));

app.all("*" , (req , res , next)=>{
    next(new ExpressError(404 , "page not found!"));
});

app.use((err , req , res , next)=>{
    let {statusCode =500 , message="some error occured!!"} = err;
    res.render("./Error.ejs" , {message});
});

//server listening
app.listen(8080 , ()=>{
    console.log("server is listening ");
});
