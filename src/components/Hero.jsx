import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLocation, useNavigate } from 'react-router-dom';


const Hero = () => {
    let navigate = useNavigate()
    let location = useLocation()
    
    const handlenav = (id)=>{
        navigate(`/posts/${id}`,{state:{from:location}})
        
    }

  return (<div className='p-2'>
    <Row xs={2} sm={2}  md={4} lg={4} xl={8} xxl={10} className="g-2">
    {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
        <Card onClick={()=>handlenav(idx)} className='hover:cursor-pointer'>
          <Card.Img variant="top" className='w-48 h-48' src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <div className='flex justify-center'>
        <Button className="mt-2" >Load more</Button>
  </div>
    </div>
  )
}

export default Hero