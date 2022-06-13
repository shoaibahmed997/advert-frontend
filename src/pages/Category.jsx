import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import baseurl from '../baseurl'
import Hero from '../components/Hero'
import Loading from '../helper/Loading'

const fetchData = async({queryKey})=>{
  const category = queryKey[1]
  const req = await fetch(baseurl+"/api/posts/category/"+category)
  const res = await req.json()
  return res
}

const Category = () => {
    let params  = useParams()
    let category = params?.category
    const {data,isLoading,isError} = useQuery(["category-search",category],fetchData,{
      refetchOnWindowFocus:false,
      staleTime:120000
    })
  return (
    isLoading ? <Loading /> :
    isError ? <h1>Error Fetching Data</h1>:
    data?.data ?
    <Hero data={data.data} />:
    <h1>No results found for {category}
    </h1>

  

  )
}

export default Category