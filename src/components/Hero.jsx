import React from 'react'
import { Card,Col,Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import baseurl from '../baseurl'


const Hero = ({data}) => {
    let navigate = useNavigate()
    let location = useLocation()
    let dispatch = useDispatch()
    
    const handlenav = (id,item)=>{
        dispatch({type:"SELECT_POST",payload:item})
        navigate(`/posts/${id}`,{state:{from:location}})    
    }

  return (<div className='p-2'>
    <Row xs={2} sm={2}  md={4} lg={4} xl={8} xxl={10} className="g-2">
    {data.map((item,i) => (
        <Col key={i}>
        <Card onClick={()=>handlenav(item.ID,item)} className='hover:cursor-pointer'>
          <Card.Img variant="top" className='w-48 h-48' src={baseurl+item.Images[0].Imgpath} />
          <Card.Body>
            <Card.Title>${item?.Price.toLocaleString({currency:"USD",currencyDisplay:"dollar"})}</Card.Title>
            <Card.Text>
             {item.Title}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <div className='flex justify-center'>
        {/* <Button className="mt-2" >Load more</Button> */}
  </div>
    </div>
  )
}

export default Hero