import React from 'react'

const DeleteAccount = () => {
  return (
    <Form>
  

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">
            Delete
        </Button>
    </Form>
  )
}

export default DeleteAccount