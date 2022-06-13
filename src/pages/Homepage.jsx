import React from 'react'
import baseurl from '../baseurl'
import Hero from '../components/Hero'

const fetchData = async()=>{
    return await fetch(`${baseurl}/api/posts`)
}

const Homepage = () => {
  
  return (<>
    <Hero />
  </>
  )
}

export default Homepage