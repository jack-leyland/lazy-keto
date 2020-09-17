const router = require('express').Router();
let Ingredient = require('../models/ingredient.model').Ingredient;

router.route('/').get((req, res) => {
    Ingredient.find()
        .then(ingredients => res.json(ingredients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name; // type validation will happen on front end.
    const desc = req.body.desc; // a request should not be sent unless the body properties are of the correct type. 
    const cost = Number(req.body.cost);
    const user = req.body.user;
    const recipes = req.body.recipes;
    const buyLocation = req.body.buyLocation;

    const newIngredient = new Ingredient({
            name, 
            desc, 
            cost, 
            user, 
            recipes, 
            buyLocation
        });

    newIngredient.save()
        .then(() => res.json('Ingredient add sucess'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;