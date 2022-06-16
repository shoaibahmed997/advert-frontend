import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { motion } from 'framer-motion';
import {  useNavigate } from 'react-router-dom';
import baseurl from '../baseurl';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';





const Login = ()=>{
  const [email,setemail]  = useState("")
  const [password,setpassword]  = useState("")
  let navigate  = useNavigate()
  let dispatch = useDispatch()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const req = await fetch(`${baseurl}/api/login`,{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify({email,password})
    })
  
    const res = await req.json()
  
    if (res?.success){
      localStorage.setItem("AdvertApptoken",res.token)
      localStorage.setItem("AdvertAppUserDetail",JSON.stringify({ID:res.user.id,firstname:res.user.firstname,Email:email}))
      dispatch({type:"ADD_TOKEN",payload:res.token})
      dispatch({type:"ADD_USER",payload:{ID:res.user.id,firstname:res.user.firstname,Email:email}})
      navigate('/')
    }else{
       Swal.fire({
         icon:"error",
         title:`Loin Failed`,
         text:res.error
         
       })
    }
  
  }



  return (
        <Form onSubmit={handleSubmit} className='w-80 bg-slate-50 p-6 drop-shadow-lg'>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="success" type="submit">
              Log in
            </Button>
          </Form>
  )

}




const Signup = ()=>{
  const [firstname,setfirstname]  = useState("")
  const [lastname,setlastname]  = useState("")
  const [email,setemail]  = useState("")
  const [password,setpassword]  = useState("")
  let navigate = useNavigate()
  let dispatch = useDispatch()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const req = await fetch(`${baseurl}/api/signup`,{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify({firstname,lastname,email,password})
    })
  
    const res = await req.json()
  
    if (res?.success){
      localStorage.setItem("AdvertApptoken",res.token)
      localStorage.setItem("AdvertAppUserDetail",JSON.stringify({ID:res.user.id,firstname:res.user.firstname,Email:email}))
      dispatch({type:"ADD_TOKEN",payload:res.token})
      dispatch({type:"ADD_USER",payload:{ID:res.user.id,firstname:res.user.firstname,Email:email}})
      navigate('/')
    }else{
       Swal.fire({
         icon:"error",
         title:`Sign Up failed`,
         text:res.error
         
       })
    }
  
  }

return (
  <Form onSubmit={handleSubmit} className='w-80 bg-slate-50 p-6 drop-shadow-lg'>
  <Form.Group className="mb-3" controlId="formsignupFirstname">
    <Form.Label>First Name</Form.Label>
    <Form.Control value={firstname} onChange={(e)=>setfirstname(e.target.value)} type="text" placeholder="Enter First Name" required />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formsignupLastname">
    <Form.Label>Last Name</Form.Label>
    <Form.Control value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" placeholder="Enter Last Name" required />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formsignupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formsignupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signup
  </Button>
</Form>
)

}



const LoginSignup = () => {
  
  return (

    <motion.div exit={{scale:2}} transition={{type:"tween",duration:2}}  className="flex flex-col justify-center items-center bg-slate-100 h-screen w-full">

      <Tabs defaultActiveKey="Login"
        id="uncontrolled-tab"
        className="mb-3"
        >

        <Tab eventKey="Login" title="Login">
          <Login />
        </Tab>

        <Tab eventKey="Signup" title="Signup" >
         <Signup />
        </Tab>
    </Tabs>

    

  </motion.div>


  )
}

export default LoginSignup



    
