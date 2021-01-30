//Using this file to document and store all endpoints instead of hardcoding them so that it's easier to change once the app gets hosted somewhere

const endpoints = {
    root: 'http://localhost:5000/api'
}
endpoints.getRecipes = endpoints.root + '/recipes';
endpoints.addRecipe = endpoints.allRecipes + '/add';

export { endpoints };