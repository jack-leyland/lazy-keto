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

router.route(':id').get((req, res) => {
    Ingredient.findById(req.params.id)
        .then(() => res.json(ingredient))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route(':id').delete((req, res) => {
    Ingredient.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ingredient deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('update/:id').post((req, res) => {
    Ingredient.findById(req.params.id)
    .then( ingredient => {
        ingredient.name = req.body.name;
        ingredient.desc = req.body.desc;
        ingredient.cost = req.body.cost;
        ingredient.user = req.body.user;
        ingredient.recipes = req.body.recipes;
        ingredient.buyLocation = req.body.buyLocation;

        /**This is going to have to stay oversimplified until more of the app is built and I learn more. In this case, the user
         will always be the same unless I build the option to make ingredients publically visible to other users. There might also need to 
         be a separate option to update just the recipes array since like it likely to be the most common write once there is a robust
         existing set of ingredients saved. Maybe the easiest way to do that is to have a function that checks which fields are going to 
         need to be updated before sending the request to the database. Probably won't be able to address that until I get to the front end. */ 

         ingredient.save()
            .then(() => res.json('Ingredient saved.'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;