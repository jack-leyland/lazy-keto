const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => { 
    User.find() // can this be scaled? Not sure what purpose this route will serve
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username});

    newUser.save() //duplicate check is handled by mongoose in user schema options
        .then(() => res.json('User add success'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;