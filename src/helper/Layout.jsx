import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import {motion } from "framer-motion"

const Layout = () => {
  const variants = {
    initial  : {scale:0,opacity:0},
    animate : {scale:1,opacity:1},
    exit : {x:200,scale:0,opacity:0},
    transition : {type:"spring",duration:1.5}
  }
  const variants2 = {
    initial  : {scale:0.8,x:-100,opacity:0},
    animate : {scale:1,x:0,opacity:1},
    exit : {scale:0.8,x:100,opacity:0},
    transition : {type:"spring",duration:1.5}
  }


  return (
    <div>
      <Header />

    <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition="transition"
    >

      <Outlet />
    </motion.div>
      </div>
  )
}

export default Layout