import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import {motion } from "framer-motion"
const Layout = () => {
  const variant = {
    initial:{scale:0,opacity:0},
    animate:{scale:1,opacity:1},
    exit:{x:200,scale:2,opacity:0},
  }
  return (
    <div>
      <Header />

    <motion.div variants={variant} initial="initial" animate="animate" exit="exit" transition={{type:"spring",duration:.50}} >

      <Outlet />
    </motion.div>
      </div>
  )
}

export default Layout