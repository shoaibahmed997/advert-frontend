import React, { useState } from 'react'
import { Form,Button,InputGroup } from 'react-bootstrap'
import Swal from 'sweetalert2';
import baseurl from '../baseurl';
import useToken from '../Hooks/useToken'

const CreatePost = () => {
    const token = useToken()

  const [isButtonLoading, setButtonLoading] = useState(false);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [price, setprice] = useState(0);
  const [category, setcategory] = useState("Property");
  const [location, setlocation] = useState("");
  const [files, setfiles] = useState();
  const [lat,setlat] = useState()
  const [long,setlong] = useState()
  const [gotLocation,setgotLocation] = useState(false)

  const handleSubmit = async (e)=>{
      let form = new FormData()
        e.preventDefault()
        form.append("title",title)
        form.append("desc",desc)
        form.append("price",price)
        form.append("category",category)
        form.append("location",location)
        form.append("lattitude",lat)
        form.append("longitude",long)
        if (!lat || !long ) return Swal.fire({icon:'error',tile:"Location not given"})
        if (files.length <=0) return Swal.fire({icon:'error',tile:"no file selected"})
        for (let i=0;i<files.length;i++){
            form.append("images",files[i])
        }
        try {
            const req = await fetch(baseurl+"/api/createpost",{
                method:"POST",
                headers:{token},
                body:form,
            })
            const res = await req.json()
            if (res.success){
                Swal.fire({icon:"success",title:"Ad Posted",text:"Your Ad will be Shortly Live",timer:1600})
            }else{
                Swal.fire({icon:"error",title:"Error Posting your ad",text:res.error})
            }
        } catch (error) {
            Swal.fire({icon:"error",title:"Error Posting your ad",text:error})
        }

  }


const getlocation = ()=>{
    setButtonLoading(true)
    navigator.geolocation.getCurrentPosition((item)=>{
        setlat(item.coords.latitude)
        setlong(item.coords.longitude)
        setgotLocation(true)
        setButtonLoading(false)
    },(error)=>{
        Swal.fire({
            icon:"error",
            title:error.message,
            timer:1500,
        })
        setButtonLoading(false)
    })
}


  return (
    <div className='flex justify-center items-center h-auto'>
        <Form id="myform" onSubmit={handleSubmit} className='w-96 border-2 p-6'>
            <Form.Text >Post an Ad for:</Form.Text>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Ad title" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control value={desc} onChange={(e)=>setdesc(e.target.value)} as="textarea" type="text" placeholder="Describe your ad in detail here" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control value={price} onChange={(e)=>setprice(e.target.value)} step="0.01" min={0} type="number" placeholder="Price in Dollars.Cents" required />
        </InputGroup>
        </Form.Group>
       

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Select value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Pick a Category" >
                    <option value={"Property"}>Property</option>
                    <option value={"Cars"}>Cars</option>
                    <option value={"Bikes"}>Bikes</option>
                    <option value={"Electronics"}>Electronics</option>
                    <option value={"Services"}>Services</option>
                    <option value={"Business"}>Business</option>
                    <option value={"Jobs"}>Jobs</option>
                    <option value={"Miscellaneous"}>Miscellaneous</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control value={location} onChange={(e)=>setlocation(e.target.value)} type="text" placeholder="Your City Name" required />
        </Form.Group>
        
        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Select Images</Form.Label>
            <br />
            <Form.Text>First Image will be cover picture</Form.Text>
            <Form.Control  onChange={(e)=>{setfiles(e.target.files)}} name='images' type="file" multiple accept="image/png, image/gif, image/jpeg, image/jpg, image/webp" required />
        </Form.Group>

        <Form.Group className="mb-3">
        <Button
            variant="primary"
            disabled={isButtonLoading}
            onClick={getlocation}
            >
            {isButtonLoading ? 'Loading…' : 'Get Location'}
        </Button>
            <Form.Text>Only for map</Form.Text>
        </Form.Group>
        
        <Button variant="success" type="submit" disabled={!gotLocation}>
            Post
        </Button>
        </Form>
    </div>
  )
}

export default CreatePost