import React from 'react'
import { useQuery } from 'react-query'
import baseurl from '../baseurl'
import Hero from '../components/Hero'
import Loading from '../helper/Loading'


const fetchData = async()=>{
    const req =  await fetch(`${baseurl}/api/posts`)
    const res = await req.json()
    return res
}


const Homepage = () => {

  const {isLoading,isError,data}  = useQuery("homepage",fetchData,{
    refetchOnWindowFocus:false
  })
  console.log(data)

  return (<>

  {isLoading ? <Loading /> :
    isError ? <h1>Error Fetching Data</h1>:
    <Hero data={data.data} />
  }
  </>
  )
}

export default Homepage