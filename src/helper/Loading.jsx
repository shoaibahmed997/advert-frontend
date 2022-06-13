import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <Spinner size="80px" animation="border" variant="primary" />
    </div>
  )
}

export default Loading