const express = require("express"),
      router  = express.Router();

//index route   
router.get('/', (req, res)=>{
    const _         = require("underscore");
	
	res.render("index", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//register route
router.get('/register', (req, res)=>{
    const _         = require("underscore");
	
	res.render("register", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//login route
router.get('/login', (req, res)=>{
    const _         = require("underscore");
	
	res.render("login", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})
//new poll route
router.get('/new-poll', (req, res)=>{
    const _         = require("underscore");
	
	res.render("new-poll", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//my polls route
router.get('/my-polls', (req, res)=>{
    const _         = require("underscore");
	
	res.render("my-polls", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//success route
router.get('/success', (req, res)=>{
    const _         = require("underscore");
	
	res.render("success", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//voting route
router.get('/voting', (req, res)=>{
    const _         = require("underscore");
	
	res.render("voting", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})
//results route
router.get('/results', (req, res)=>{
    const _         = require("underscore");
	
	res.render("results", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})
//plan for next development
//fix register/login or logout in header partial of pages
//depending on user state



module.exports = router;