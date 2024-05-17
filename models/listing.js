const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title:{
        type:String,
        require : true,
    },
    description : String,
    image :{
        type:String,
        default:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
        set:(v) =>v ===" "? 
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D" : v,
    },
    price : String,
    location : String,
    country : String
});

let Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;



// db.call.insertMany([
//     { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
//     { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
//     { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
//     { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
//     { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
//  ]);


// db.call.find(
//    {
//     dim_cm : {$gte : 14 , $lte : 21},
//     qty : {
//         $gte : 25
//     },
//     $or:[
//         {
//             tags:["plain" , "blank"]
//         },
//         {
//             tags:[ "blank" , "plain"]
//         },
//     ]
//    }
// )