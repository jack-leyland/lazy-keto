const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
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
        .then(() => res.json(recipe))
        .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch( err => res.status(400).json('Error: ' + err));
});



module.exports = router; 