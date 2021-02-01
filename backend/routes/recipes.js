const router = require('express').Router();
let Recipe = require('../models/recipe.model').Recipe;

router.route('/').get((req, res) => { 
    
    if (req.query.search) { //this is likely going to need work to account for weird user input in the search field. Sticking with this for now until the thing is working 

    } else {
        Recipe.find().skip(Number(req.query.skip)).limit(Number(req.query.limit)) //why is this params on the client side and query on the server??? seems dumb but ok if it works i guess
        .then(recipes => {
            res.json(recipes)
            console.log(req.query)
        })
        .catch(err => res.status(400).json('Error: ' + err));
    }

});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const desc = req.body.desc;
    const type = req.body.type;
    const time = Number(req.body.time);
    const steps = req.body.steps;
    const user = req.body.user;

    const newRecipe = new Recipe({
        name, 
        desc, 
        type, 
        time, 
        steps, 
        user
    });

    newRecipe.save()
        .then(() => res.json('Recipe add sucess'))
        .catch((err) => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then((recipe) => res.json(recipe))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => { // see note in ingredient router for detail on how this functionality will likely be handled.
            recipe.name = req.body.name;
            recipe.desc = req.body.desc;
            recipe.type = req.body.type;
            recipe.time = Number(req.body.time);
            recipe.steps = req.body.steps;
            recipe.user = req.body.user;

            recipe.save()
                .then(() => res.json('Recipe updated'))
                .catch( err => res.status(400).json('Error: ' + err));
            
        })
        .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router; 