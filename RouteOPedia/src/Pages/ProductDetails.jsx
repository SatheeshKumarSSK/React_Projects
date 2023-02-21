import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h4>ProductDetails</h4>
      <p>Product Id: {id}</p>
    </div>
  )
}

export default ProductDetails