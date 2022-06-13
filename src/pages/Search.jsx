import React from 'react'
import { useParams } from 'react-router-dom'
import baseurl from '../baseurl'
import { useQuery } from 'react-query'
import Hero from '../components/Hero'
import Loading from '../helper/Loading'

const fetchData = async({queryKey})=>{
    const searchterm = queryKey[1]
    const req = await fetch(baseurl+"/api/search/"+searchterm)
    const res  = await req.json()
    return res
}

const Search = () => {
    let params = useParams()
    let searchterm = params["searchterm"]

    const {data,isLoading,isError} = useQuery(["search",searchterm],fetchData,{
        refetchOnWindowFocus:false,
        staleTime:120000
    })
  return (
    isLoading ? <Loading /> :
    isError ? <h1>Error Fetching Data</h1>:
    data?.data ?
    <Hero data={data.data} />:
    <>
    <h1>No results found for {searchterm}</h1>
    <h2>Try Something else</h2>
    </>
  )
}

export default Search