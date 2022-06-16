import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import {motion } from "framer-motion"
const Layout = () => {
  const animationType = localStorage.getItem('AdvertAppAnimation')
  if (!animationType){
    localStorage.setItem("AdvertAppAnimation",1)
  }
  console.log(animationType)
  const variant = {
    initial  : {scale:0,opacity:0},
    animate : {scale:[0,1],opacity:1},
    exit : {scale:0,opacity:0},
  }
  const variant2 = {
    initial  : {scale:.8,x:-1000,opacity:.5},
    animate : {scale:[.8,1],x:0,opacity:1},
    exit : {scale:.8,x:[0,1000],opacity:.5},
  }
  return (
    <div>
      <Header />

    <motion.div variants={animationType ===1 ? variant : animationType===2 ? variant2: variant } initial="initial" animate="animate" exit="exit" transition={{type:"spring",duration:.50}} >

      <Outlet />
    </motion.div>
      </div>
  )
}

export default Layout