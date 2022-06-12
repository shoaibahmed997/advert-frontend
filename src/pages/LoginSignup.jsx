import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Login = ()=>{
  const [email,setemail]  = useState("")
  const [password,setpassword]  = useState("")
  let navigate  = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/')
    
}

  return (
        <Form onSubmit={handleSubmit} className='w-80 bg-slate-50 p-6'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
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
  const handleSubmit = (e)=>{
    e.preventDefault()
    
}

return (
  <Form onSubmit={handleSubmit} className='w-80 bg-slate-50 p-6'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control value={firstname} onChange={(e)=>setfirstname(e.target.value)} type="text" placeholder="Enter First Name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" placeholder="Enter Last Name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
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

        <Tab eventKey="Login"  title="Login">
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



    
