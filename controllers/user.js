const User = require("../models/user.js");


module.exports.renderSignUpForm = async (req , res)=>{
    res.render("./users/signup.ejs");}

module.exports.signUp = async(req , res)=>{
    try{
        let {username , email , password} = req.body;
        let newUser = new User({username , email});
        let registeredUser = await User.register(newUser , password);
        console.log("new registered user is :",registeredUser);
        req.login(registeredUser , (err)=>{
            if(err){
                next(err);
            }
            req.flash("success" , "Welcom to WanderLust!");
            res.redirect("/listings") ;           
        });
    }catch(e){
        req.flash("error" , e.message);
        res.redirect("/signup");
    };
};

module.exports.renderLoginForm = (req , res)=>{
    res.render("./users/login.ejs");
};


module.exports.login = async(req , res)=>{
    req.flash("success","welcome You are logged in!!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
    };

module.exports.logout =  (req , res , next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","successfully Logged out!!");
        res.redirect("/listings");
    });
};