import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import {motion } from "framer-motion"
const Layout = () => {
  return (
    <div>
      <Header />

    <motion.div
    // initial={{scale:0.8,x:-500,opacity:0}}
    // animate={{scale:1,x:0,opacity:1}}
    // exit={{scale:0.8,x:500,opacity:0}}
    initial={{scale:0,opacity:0}}
    animate={{scale:1,opacity:1}}
    exit={{x:200,scale:2,opacity:0}}
    transition={{type:"spring",duration:1}}
    >

      <Outlet />
    </motion.div>
      </div>
  )
}

export default Layout