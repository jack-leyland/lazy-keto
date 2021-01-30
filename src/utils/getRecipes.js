import axios from 'axios';
import { endpoints } from './index';

export default function getRecipes(state, setState) { //When you will invitably have to limit how many recipes are fetched, this will be where you do it (if not in the API directly?)
    setState({ loading : true });

    axios.get(endpoints.getRecipes, {
        params: {
            skip: 0,
            limit: 15
        }
    })
        .then(res => { 
            setState({
                loading: false,
                recipes: [...state.recipes, ...res.data],
            })
        })
        .catch(error => {
            console.log(error);
        })
    console.log(endpoints.getRecipes) //debugging, remove later
}
