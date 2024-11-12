import React from 'react'
import { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res) => res.json())
    //     .then((data) => { 
    //         setData(data)
    //     })
    // })

  return (
    <div className='bg-purple-500 text-black text-2xl rounded-2xl text-center py-2'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="image" width={300}/></div>
  )
}

export default Github


// Loader is used to load the api data very quickly and optimized
export const gitHubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json()
}