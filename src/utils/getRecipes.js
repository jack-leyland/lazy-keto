import axios from 'axios';
import { endpoints } from './index';

export default function getRecipes(state, setState) { 
    setState({ loading : true });

    axios.get(endpoints.getRecipes, {
        params: {
            skip: state.skip,
            limit: state.limit,
            search: state.search
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
