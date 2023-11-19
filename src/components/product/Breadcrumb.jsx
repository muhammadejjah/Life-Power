import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const ProductBreadcrumb = () => {

  return (
    <Breadcrumb className='my-5'>
      <Link className='breadcrumb-item main-color-opacity' to={`/categories/${1}`} >batteries</Link>
      <Link  className='breadcrumb-item main-color-opacity' to={`/products/${1}`}>mtu</Link>
      <Breadcrumb.Item active>MTU-200</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default ProductBreadcrumb
