import { Reorder, useDragControls } from 'framer-motion';
import React, { useState } from 'react'
import { Card,Col,Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import baseurl from '../baseurl'

const RItem = ({item})=>{
  let navigate = useNavigate()
  let location = useLocation()
  let dispatch = useDispatch()
 
  
  const handlenav = (id,item)=>{
      dispatch({type:"SELECT_POST",payload:item})
      navigate(`/posts/${id}`,{state:{from:location}})    
  }
  const dragcontrols = useDragControls()


  return(
    <Reorder.Item as='div' dragListener={false}  id={item} value={item} dragControls={dragcontrols} >
          <Card  className='hover:cursor-pointer'>
          <Card.Img onClick={()=>handlenav(item.ID,item)} variant="top" className='w-48 h-48' src={baseurl+item.Images[0].Imgpath} />
          <Card.Body>
            <Card.Title>${item?.Price.toLocaleString({currency:"USD",currencyDisplay:"dollar"})} </Card.Title>
            <Card.Text>
            {item.Title}
            </Card.Text>
            <div onPointerDown={e=>dragcontrols.start(e)} className='h-6 w-6 bg-blue-400 ml-6 rounded-full'></div>
          </Card.Body>
        </Card>
      </Reorder.Item>
  )
}

const Hero = ({data}) => {
  let [elements,setelements] = useState(data)
  const variant = {
    transition :{type:'spring',duration:.7 }
  }

  return (<div className='p-2'>
    <Reorder.Group variants={variant} transition={"transition"} axis='x' as='div' values={elements} onReorder={setelements} className="grid grid-cols-4 gap-4" >
    {elements.map((item,i)=>(
      <RItem item={item} key={i} />

      ))}
      </Reorder.Group>
    </div>
  )
}

export default Hero
