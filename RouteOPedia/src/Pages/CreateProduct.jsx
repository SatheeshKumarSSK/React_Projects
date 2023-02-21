import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
  const navigate = useNavigate();

  return (
    <div>
      <h4>CreateProduct</h4>
      <button onClick={() => navigate(-1)} className='btn btn-light'>Go Back</button>
    </div>
  )
}

export default CreateProduct