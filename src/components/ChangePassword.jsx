import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'
import baseurl from '../baseurl'
import useToken from '../Hooks/useToken'


const ChangePassword = () => {
    const [IsText,setIsText] = React.useState(false)
    const [currentPass,setcurrentPass] = React.useState("")
    const [newPass,setnewPass] = React.useState("")
    const token = useToken()
    const handlesubmit = async(e)=>{
        e.preventDefault()
        const req = await fetch(baseurl+"/api/change-password",{headers:{"Content-type":"application/json",token},
        method:"POST",
        body:JSON.stringify({new_password:newPass,current_password:currentPass})
            })
        const  res = await req.json()

        if (res.success){
            Swal.fire({icon:"success",title:res.data})
            setcurrentPass(prev=>"")
            setnewPass(prev=>"")
        }else{
            console.log(res)
            Swal.fire({icon:"error",title:res['error type']})
        }
    }
  return (
        <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control value={currentPass} onChange={e=>setcurrentPass(e.target.value)} type={IsText ? "text" : "password"} placeholder="Current Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>New Password</Form.Label>
                <Form.Control value={newPass} onChange={e=>setnewPass(e.target.value)} type={IsText ? "text" : "password"} placeholder="New Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={(e)=>setIsText(!IsText)}  type="checkbox" label="Show" value={IsText} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Change Password
            </Button>
        </Form>
  )
}

export default ChangePassword