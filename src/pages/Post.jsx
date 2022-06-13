import React from 'react'
import { Carousel,Badge,Button } from 'react-bootstrap'
import {MdLocationPin} from 'react-icons/md'
import {BiMailSend} from 'react-icons/bi'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Map from '../components/Map'
import usePost from '../Hooks/usePost'
import baseurl from '../baseurl'



const Post = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const post = usePost()
    const handlenav = ()=>{
        navigate(location?.state?.from?.pathname || '/')
    }

if (!post?.ID){
  return <Navigate to={location?.state?.from?.pathname || '/'} />
}
  return (
      <div className='bg-neutral-100 relative' >
          <Button onClick={handlenav} className='top-1 left-1 absolute z-10'>&larr;</Button>
    <Carousel interval={null} className=' bg-zinc-800' >
      {
        post.Images.map((item,i)=>( 
          <Carousel.Item key={i}>
            <img 
              className="d-block w-100 min-h-[360px] lg:h-[500px] lg:px-40 2xl:px-80 2xl:h-[700px]"
              src={baseurl+item.Imgpath}
              alt="First slide"
              />
          </Carousel.Item>
      ))}
  </Carousel>
  <div className='p-2 mt-2'>
    <div className='text-2xl lg:text-4xl semibold'>{post?.Title}</div>
    <div className='mt-2 flex items-end gap-6'>
        <div className=' text-xl lg:text-2xl'><Badge pill bg='success'>$ {post?.Price.toLocaleString({currency:"USD"})}</Badge></div>
        <div className='flex items-end text-md lg:text-xl'><Badge text='dark' pill style={{display:'flex',alignItems:"center"}} bg='warning'> <MdLocationPin size={18} /> {post.Location} </Badge></div>
    </div>
    <hr />
    <div className='flex gap-4'>
        <img className='border-2 border-l-violet-400 border-r-purple-300 border-t-pink-400 border-b-fuchsia-500 rounded-full drop-shadow-2xl' height={"80px"} width={"80px"}  src="/male.png" alt="" />
        <div>
            <div className='mt-2'>Ad Posted by</div>
            <div><Badge className='mt-2 p-2' pill={true}>{post.By}</Badge></div>
        </div>
    </div>
    <hr />
    <div className='text-xl font-semibold lg:text-2xl'>Details</div>
        <div className='p-8 flex flex-col gap-4'>
            <div className='text-lg lg:text-xl flex whitespace-pre  '><span className='font-semibold'>Description</span> :<span> {post?.Desc} </span></div>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>Category</span> : {post?.Category}</div>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>Posted On</span> : {post?.CreatedAt} </div>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>AD ID</span> : {post.ID}</div>
            <div><Button className='flex'><BiMailSend /> Send Inquiry</Button></div>

        </div>

        <hr />
        <div className=' w-full h-[250px] lg:h-[500px] border-2 border-l-violet-400 border-r-purple-300 border-t-pink-400 border-b-fuchsia-500 overflow-scroll'>
            <Map coords={[post.Longitude,post.Lattitude]} location={post.Location} />
        </div>
        <hr />
  </div>
  </div>

  )
}

export default Post