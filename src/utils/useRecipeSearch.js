import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoints } from './index';

export default function useRecipeSearch(searchParams) {
      
    useEffect(() => {
        axios.get(endpoints.getRecipes, { //this returns an array!
            params: {
                size: searchParams.size,
                pgNum: searchParams.pgNum,
                query: searchParams.query
            }
        })
            .then(res => { 
                console.log(res.data) 
            })
            .catch(error => {
                console.log(error); //improve this! Maybe you have to do it on the API side, but stupid 400 errors are useless for debugging. 
            })

    }, [searchParams])
    
    return null
}