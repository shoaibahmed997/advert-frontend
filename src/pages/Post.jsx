import React from 'react'
import { Carousel,Badge,Button } from 'react-bootstrap'
import {MdLocationPin} from 'react-icons/md'
import {BiMailSend} from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'
import Map from '../components/Map'



const Post = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handlenav = ()=>{
        navigate(location?.state?.from?.pathname || '/')
    }

  return (
      <div className='bg-neutral-100' >
          <Button onClick={handlenav} className='top-1 left-1 absolute z-10'>&larr;</Button>
    <Carousel interval={null} className=' bg-zinc-800' >
    <Carousel.Item>
      <img 
        className="d-block w-100 min-h-[360px] lg:h-[500px] lg:px-40 2xl:px-80 2xl:h-[700px]"
        src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 min-h-[360px] lg:h-[500px] lg:px-40 2xl:px-80 2xl:h-[700px]"
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 min-h-[360px] lg:h-[500px] lg:px-40 2xl:px-80 2xl:h-[700px]"
        src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk="
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  <div className='p-2 mt-2'>
    <div className='text-2xl lg:text-4xl semibold'>Product Title goes here</div>
    <div className='mt-2 flex items-end gap-6'>
        <div className=' text-xl lg:text-2xl'><Badge pill bg='success'>$ 1,40,240</Badge></div>
        <div className='flex items-end text-md lg:text-xl'><Badge text='dark' pill style={{display:'flex',alignItems:"center"}} bg='warning'> <MdLocationPin size={18} /> Dharamshala </Badge></div>
    </div>
    <hr />
    <div className='flex gap-4'>
        <img className='border-2 border-l-violet-400 border-r-purple-300 border-t-pink-400 border-b-fuchsia-500 rounded-full drop-shadow-2xl' height={"80px"} width={"80px"}  src="/male.png" alt="" />
        <div>
            <div className='mt-2'>Ad Posted by</div>
            <div><Badge className='mt-2 p-2' pill={true}>Shoaib Ahmed</Badge></div>
        </div>
    </div>
    <hr />
    <div className='text-xl font-semibold lg:text-2xl'>Details</div>
        <div className='p-8 flex flex-col gap-4'>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>Description</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sequi nisi quod id fugit aspernatur non magnam repellat quae iure a mollitia rerum quidem minus iste animi, vel consectetur ratione tenetur perferendis eos earum! Nihil voluptatibus eaque modi, laudantium at totam iusto dicta ad corrupti consequatur excepturi, repellendus dolorem eos!</div>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>Category</span> : Bikes</div>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>Posted On</span> : 14-05-2021</div>
            <div className='text-lg lg:text-xl'><span className='font-semibold'>AD ID</span> : 40cd8088-8b07-4ebb-a421-3822f9c4be86</div>
            <div><Button className='flex'><BiMailSend /> Send Inquiry</Button></div>

        </div>

        <hr />
        <div className=' w-full h-[250px] lg:h-[500px] border-2 border-l-violet-400 border-r-purple-300 border-t-pink-400 border-b-fuchsia-500 overflow-scroll'>
            <Map coords={[76.3242743,32.2240511]} />
        </div>
        <hr />
  </div>
  </div>

  )
}

export default Post