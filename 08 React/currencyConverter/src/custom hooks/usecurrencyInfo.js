// we should create core javascript file to write custom hooks
// we can make use of react hooks to make custom hooks

import { useState , useEffect } from "react"

function useCurrencyInfo(currency){
    // we want to use this when currency related part changes  

    // store the feteched data in a variable 
    const [data , setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.5/v1/currencies/${currency}.json`)
        .then((response)=>response.json()) // we get the data in string format we converted it into json
        .then((res)=> setData(res[currency]))
        console.log(data);
    },
     [currency])

     return data  
     // what about the fetched data , current currency pair 
     // see in the last
}

export default useCurrencyInfo  // we are returning entire function