import React from 'react'
import { Card,Col,Row,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import baseurl from '../baseurl'
import useToken from '../Hooks/useToken'


const PostbyUser = ({data,refetch}) => {

    let navigate = useNavigate()
    let location = useLocation()
    let dispatch = useDispatch()
    const token = useToken()
    const handlenav = (id,item)=>{
        dispatch({type:"SELECT_POST",payload:item})
        navigate(`/posts/${id}`,{state:{from:location}})    
    }
    const deletefetchRequest = async(id)=>{
        const req = await fetch(baseurl+"/api/deletepost/"+id,{headers:{token:token}})
        const res=await req.json()
        if (res.success){
            Swal.fire({icon:"success",title:res.data})
            refetch()
        }else{
            Swal.fire({icon:"error",title:res.error})
        }
        
    }
    const deleteAd = (id)=>{
        Swal.fire({icon:"question",title:"Are you sure you want to delete this ad",
        text:"Action can't be reverted",
        showCancelButton:true,
        showConfirmButton:true,confirmButtonText:"Yes Delete It!",confirmButtonColor:'#d33'
    }).then(res=>{
        if (res.isConfirmed){
            deletefetchRequest(id)
        }
    })
    }

  return (<div className='p-2'>
    <Row xs={2} sm={2}  md={4} lg={4} xl={8} xxl={10} className="g-2">
    {data.map((item,i) => (
        <Col key={i}>
        <Card className='hover:cursor-pointer'>
          <Card.Img variant="top" className='w-48 h-48' src={baseurl+item.Images[0].Imgpath} />
          <Card.Body>
            <Card.Title>${item?.Price.toLocaleString({currency:"USD",currencyDisplay:"dollar"})}</Card.Title>
            <Card.Text>
             {item.Title}
            </Card.Text>
            <div className='grid gap-2'>
                <Button onClick={()=>handlenav(item.ID,item)}>View</Button>
                <Button onClick={()=>deleteAd(item.ID)} variant='danger'>Delete</Button>
            </div>
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

export default PostbyUser