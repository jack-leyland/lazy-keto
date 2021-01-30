import axios from 'axios';
import { endpoints } from './index';

export default function getAllRecipes(state, setState) { //When you will invitably have to limit how many recipes are fetched, this will be where you do it (if not in the API directly?)
    setState({ loading : true });

    axios.get(endpoints.allRecipes)
        .then(res => { 
            setState({
                loading: false,
                recipes: [...state.recipes, ...res.data],
            })
        })
        .catch(error => {
            console.log(error);
        })
    console.log(endpoints.allRecipes) //debugging, remove later
}
