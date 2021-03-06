import { useState, useEffect } from 'react'
import API_KEY from './keys';


import response from './response';

const CONTEXT_KEY = "179b75aa5ba32243d";
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(res => res.json())
                .then(result => {
                    setData(result);
                })
                .catch((err) => {
                    setData(response)
                })
        }

        fetchData();

    }, [term]);

    return { data }
}

export default useGoogleSearch;
