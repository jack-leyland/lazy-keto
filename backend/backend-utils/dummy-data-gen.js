//This is just a quick tool to populate the database with dummy recipes for development and testing purposes. Run in Node from command line, it will prompt for number of recipes.

const axios = require('axios');
const prompt = require('prompt');


var schema = {
  properties: {
    count: {
      description: 'How many recipes to generate?',
      type: 'number',
      required: true
    },
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Generating dummy recipes');
  postDummyRecipes(result.count);
});

function onErr(err) {
  console.log(err);
  return 1;
}

function postDummyRecipes(count) {

    let num = 3;

    for ( let i = 0; i < count; i++) {
        axios.post('http://localhost:5000/api/recipes/add', {
            "name": "Generated Test Recipe " + String(num),
            "desc": "Programmaticlly generated dummy recipe",
            "type": "Lunch",
            "time": 7,
            "steps": [
              {
                "name": "Step1",
                "desc": "step desc",
                "prepTime": 4,
              },
              {
                "name": "Step2",
                "desc": "step desc",
                "prepTime": 4,
              },
              {
                "name": "Step3",
                "desc": "step desc",
                "prepTime": 4,
              }
            ],
            "user": "Jack",
        },)
        .then(res => {
          console.group(res)
        })
        .catch((error) => {
          console.log(error)
        });
        
        num++;
    }
};