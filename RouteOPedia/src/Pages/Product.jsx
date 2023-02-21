import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  })

  return (
    <div>
      <h4>Product</h4>

      <button onClick={() => navigate("/product/create")} className="btn btn-success">Add Product</button>

      <Link to={"/product/details/5"}><button className='btn btn-primary'>Navigate to Product Details - 5</button></Link>

      {goToProduct && <Navigate to={"/product/details/3"} />}

      <button className='btn btn-secondary' onClick={() => { setGoToProduct(true) }}>Navigate to Product - 3 (useState)</button>
    </div>
  )
}

export default Product