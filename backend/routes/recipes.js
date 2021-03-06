const router = require('express').Router();
let Recipe = require('../models/recipe.model').Recipe;

router.route('/').get((req, res) => {
    
    var pgNum = parseInt(req.query.pgNum);
    var size = 30;
    var skip = size * (pgNum - 1);
    var searchText = String(req.query.query);
    var query = {};

    if (pgNum < 0 || pgNum === 0) {
        let response = {
            success: false,
            failureType: 1, 
            message: "API Error: Invalid page number, pgNum must be greater than 0",
            totalResults: 0,
            recipes: null

        };;
        return res.json(response)
    }

    if (searchText !== "") { query = { $text: { $search: searchText }}; console.log(query)}

    Recipe.aggregate([
        {$match: query},
        {$facet: {
            "countResults" : [ {$group: {_id:null, totalResults:{$sum:1}}} ],
            "paginatedResults": [
            { $skip: skip },
            { $limit: size }
            ],
        }},
        {$unwind: "$countResults"},
        {$project:{
            totalResults: "$countResults.totalResults",
            recipes: "$paginatedResults",
         }}
    ])
        .then(result => {
           if (!result[0]) {
                let response = {
                    success: false,
                    failureType: 2, 
                    message: "No matching recipes found",
                    totalResults: 0,
                    recipes: null

                };
                return res.json(response)
            }
            var formattedResult = {
                success: true,
                failureType: null,
                message: null, 
                totalResults: result[0].totalResults,
                recipes: result[0].recipes
            }
            res.json(formattedResult)
        })
        .catch(err => res.status(400).json('Error: ' + err))

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