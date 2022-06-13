import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {
    let params  = useParams()
    let category = params?.category
  return (
    <div>Category:{category} 
    <br />
    now make a network request to backend to fetch the resource
    </div>

  )
}

export default Category