import { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoints } from './index';
//my suspicion here is that the API response is so fast (since its local), that there is never an existing request to cancel 
//by the time the next one is sent. NOTE: Confirmed in testing by manually slowing API response. Function behaves as expected. 
//Still, implementing debounce on search bar 'onChange' to reduce overall API calls in cases with fast response times 
//(will be needed anyways in a future offline electron port anyways) 

export default function useRecipeSearch(searchParams) { 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [noSearchResults, setNoSearchResults] = useState(false);

    console.log(searchParams)
    useEffect(() => {
        setRecipes([]);
    }, [searchParams.query])

    useEffect(() => {
        let cancel
        setLoading(true);
        setError(false);
        
        axios({ 
            method: 'get',
            url: endpoints.getRecipes,
            params: {
                pgNum: searchParams.pgNum,
                query: searchParams.query
            },
            cancelToken: new axios.CancelToken(c => cancel = c),
            timeout: 5000
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
                    setNoSearchResults(true)
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
                if (axios.isCancel(error)) {console.log('request cancelled'); return}
                setError(true);
                setLoading(false);
                console.log(error); //improve this! Maybe you have to do it on the API side, but stupid 400 errors are useless for debugging. 
            });
        return () => cancel()

    }, [searchParams.query, searchParams.pgNum])// why does this need to be broken out? Doesn't work with just [searchParams].
    
    const listState = {loading, error, recipes, hasMore, noSearchResults}
    return listState
}