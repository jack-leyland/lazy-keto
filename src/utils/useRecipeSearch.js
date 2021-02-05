import { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoints } from './index';
//my suspicion here is that the API response is so fast (since its local), that there is never an existing request to cancel 
//by the time the next one is sent. Will have to see how this behaves once the switch is made to the Atlas DB and there's actually 
//some delay in executing requests

export default function useRecipeSearch(searchParams) { 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    
    useEffect(() => {
        setRecipes([]);
    }, [searchParams.query])
    
    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel
        axios({ 
            method: 'get',
            url: endpoints.getRecipes,
            params: {
                size: searchParams.size,
                pgNum: searchParams.pgNum,
                query: searchParams.query,
                cancelToken: new axios.CancelToken(c => cancel = c)
            }
        })
            .then(res => {
                if (res.data.failureType === 1) {
                    setError(true)
                    console.log(res.data.message)
                    setLoading(false)
                    return
                } 
                
                if (res.data.failureType === 2) {
                    setHasMore(false)
                    setLoading(false)
                    return
                }  

                setRecipes( prevRecipes => {
                    return [...new Set([...prevRecipes, ...prevRecipes.concat(res.data.recipes)])]
                })
                
                setHasMore(res.data.recipes.length > 0)
                setLoading(false)
            })
            .catch(error => {
                if (axios.isCancel(error)) return
                setError(true);
                setLoading(false);
                console.log(error); //improve this! Maybe you have to do it on the API side, but stupid 400 errors are useless for debugging. 
            });
        return () => cancel()

    }, [searchParams])
    
    const listState = {loading, error, recipes, hasMore}
    return listState
}