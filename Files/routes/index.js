var express = require('express');
var router = express.Router();
const userModel = require('./users')
const passport = require("passport")
const localStrategy = require("passport-local")
passport.use(new localStrategy({ usernameField: 'email' }, userModel.authenticate()));


// Define a middleware function to render the loader HTML


// Register the middleware function to be executed on every request




router.get('/', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  const err = req.flash('error')
  res.render('login2',{error: err});
});

router.post('/register', function(req, res, next) {
  const { phoneno, fullname, email, password } = req.body;

  // Ensure username field is set to email
  req.body.username = email;

  // Create a new user instance
  const newUser = new userModel({
    phoneNo: phoneno,
    email: email,
    fullName: fullname,
    username: email // Assuming email is used as the username
  });

  // Register the user with passport-local-mongoose
  userModel.register(newUser, password, function(err, user) {
    if (err) {
      console.error('Error registering user:', err);

      // Render the register page again with an error message
      return res.status(400).render('register', {
        title: 'Register',
        error: err.message
      });
    }

    // Authenticate the user after successful registration
    passport.authenticate('local')(req, res, function() {
      res.redirect('/login');
    });
  });
});



router.get('/profile',isLoggedIn,function(req,res)
{
  res.render('profile')
})


router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/login",
  failureFlash:true
}),function(req,res){})



router.get("/logout",function(req,res){
  req.logout(function(err) {
  if (err) { return next(err); }
  res.redirect('/');
    });
  })

function isLoggedIn(req,res,next)
{
  if(req.isAuthenticated()) return next();
  res.redirect('/login');
}

 

 



module.exports = router;
