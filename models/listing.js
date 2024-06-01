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
        default:"https://imgs.search.brave.com/H_6PGLr8mnFLl94kDg9ClyOe7m3Z5TgbPO_VkVjkxvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aGNjamgubml0cm9j/ZG4uY29tL3dzVkNk/b1dXTFhnV0lvUkZl/eER2VVFQam9BS0JT/SnNtL2Fzc2V0cy9p/bWFnZXMvb3B0aW1p/emVkL3Jldi1lN2Zk/ZmVmL2x1eHVyeWVz/Y2FwZXMuY2FwZXRv/d24vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDQvYmV5b25k/LXZpbGxhLWhvbWUt/c2xpZGVyLTEtY2Fw/ZS10b3duLTEwMjR4/NTc2LmpwZw",
        set:(v) =>v ===""? 
        "https://imgs.search.brave.com/H_6PGLr8mnFLl94kDg9ClyOe7m3Z5TgbPO_VkVjkxvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aGNjamgubml0cm9j/ZG4uY29tL3dzVkNk/b1dXTFhnV0lvUkZl/eER2VVFQam9BS0JT/SnNtL2Fzc2V0cy9p/bWFnZXMvb3B0aW1p/emVkL3Jldi1lN2Zk/ZmVmL2x1eHVyeWVz/Y2FwZXMuY2FwZXRv/d24vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDQvYmV5b25k/LXZpbGxhLWhvbWUt/c2xpZGVyLTEtY2Fw/ZS10b3duLTEwMjR4/NTc2LmpwZw" : v,
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type : Schema.Types.objectId,
            
        }
    ]


});

let Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;
