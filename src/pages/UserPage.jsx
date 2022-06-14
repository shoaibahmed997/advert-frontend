import React from 'react'
import { motion } from 'framer-motion'

const UserPage = () => {
    const [roll, setroll] = React.useState(false);
  return (
    <div>
        <motion.h1
        animate={{
            y:roll? 250 :0,
            rotateX:roll ? -360:0,
            x : roll? 1500:0,
            scale: roll ? 3 :1,
         }}
         exit={{opacity:0}}
         transition={{type:"tween",duration:2}}
        onTap={(e,i)=>{
            setroll(!roll)
        }}
        
        >Hello User</motion.h1>
    </div>

  )
}

export default UserPage