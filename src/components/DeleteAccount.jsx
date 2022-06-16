import React from 'react'
import {Form,Button} from 'react-bootstrap'
import useAuth from '../Hooks/useAuth'
import baseurl from '../baseurl'
import useToken from '../Hooks/useToken'
import Swal from 'sweetalert2'

const DeleteAccount = () => {
    const user  = useAuth()
    const [email,setemail] = React.useState("")
    const token = useToken()
    const handlesubmit = async(e)=>{
        e.preventDefault()
        const req = await fetch(baseurl+"/api/delete-account",{headers:{token}})
        const res = await req.json()
        if (res.success){
            Swal.fire({icon:"success",title:res.data,text:"You too left us &#x1F622;"})
        }else{
            Swal.fire({icon:"error",title:res["error type"]})
        }


    }

  return (
    <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter your Email</Form.Label>
            <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="Email" placeholder="Enter Email" required/>
        </Form.Group>
        <Button variant="danger" type="submit" disabled={user.Email !== email} >
            Delete
        </Button>
    </Form>
  )
}

export default DeleteAccount