import React from 'react'
import { motion } from 'framer-motion'
import { Tab,Row,Nav, Col,Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import baseurl from '../baseurl'
import { useQuery } from 'react-query'
import Loading from '../helper/Loading'
import useAuth from '../Hooks/useAuth'
import PostbyUser from '../components/PostbyUser'

const fetchPostbyuser = async({queryKey})=>{
    const email = queryKey[1]
    const req  = await fetch(baseurl+"/api/posts/user/"+email)
    const res = await req.json()
    return res
}

const UserPage = () => {
    const user = useAuth()
    const [selectAnimation,setSelectAnimation]  = React.useState(1)
    const variant = {
        initial:{scale:0,opacity:0},
        animate:{scale:[0,1,4],opacity:[0,1,0]},
      }
    const variant2 = {
        initial:{scale:0,x:-200,opacity:0},
        animate:{scale:[1,1,0.8,1],x:[-200,0,400],opacity:[0,1,0]},
      }

    const {data,isLoading,isError} = useQuery(["userposts",user.Email],fetchPostbyuser,{
        refetchOnWindowFocus:false,
        staleTime:120000
    })

  return (
    <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">User</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Animation Settings</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div>
            <h1>All Posts by you</h1>
            <div>
                {isLoading ? <Loading /> :
                isError ? <h1>Error Fetching Data</h1>:
                data?.data ? <PostbyUser data={data.data} />:
                <h1>No ad posted by you! <br />Post one <Link to='/create-post'>now</Link></h1>
                }
            </div>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <div className='flex flex-col gap-4 mt-4 w-96'>
              <Button variant="primary">Change Password</Button>
              <Button variant="danger">Delete Account</Button>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <div>
                <h1>Animation Style </h1>
                <div className='flex gap-4 p-2'>
                    <div onClick={()=>setSelectAnimation(1)} className={selectAnimation===1? 'border-2 border-blue-600' :""} >
                        <Card>
                            <div className='flex justify-center items-center w-full bg-orange-500 h-60'>
                                    <motion.div variants={variant} initial="initial" animate="animate" exit="exit" transition={{type:"spring",duration:2,repeat:Infinity}}
                                    className='w-20 h-20 bg-white rounded-lg'></motion.div>
                            </div>
                            <Card.Title>Style 1</Card.Title>
                            <Card.Text>The page grows to the fullest and new page arises out of thin air</Card.Text>
                        </Card>
                    </div>
                    <div onClick={()=>setSelectAnimation(2)} className={selectAnimation===2? 'border-2 border-blue-600' :""}>
                        <Card>
                            <div className='flex justify-center items-center w-full bg-orange-500 h-60'>
                                    <motion.div variants={variant2} initial="initial" animate="animate" exit="exit" transition={{type:"spring",duration:2,repeat:Infinity}}
                                    className='w-20 h-20 bg-white rounded-lg'></motion.div>
                            </div>
                            <Card.Title>Style 2</Card.Title>
                            <Card.Text>The page shrinks a little and leaves to the left while new page comes from right</Card.Text>
                        </Card>
                    </div>
                </div>
            </div>

        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>

  )
}

export default UserPage