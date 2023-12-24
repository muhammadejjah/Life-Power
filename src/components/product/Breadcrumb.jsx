import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductBreadcrumb = () => {
  const { product } = useSelector(state => state.ProductSlice)
  const [category, setCategory] = useState({})
  const [subCategory, setSubCategory] = useState({})
  const [productName, setProductName] = useState({})

  useEffect(() => {
    if (product.path !== undefined) {
      setCategory(product.path[0])
      setSubCategory(product.path[1])
      setProductName(product.path[2])
    }
  }, [product])

  return (
    <Breadcrumb style={{ marginTop: "75px" }}>
      <Link className='breadcrumb-item ' to={`/category/${category.id}`}>{
        category.name
      }</Link>
      <Link className='breadcrumb-item ' to={`/products/${subCategory.id}`}>{subCategory.name}</Link>
      <Breadcrumb.Item active>{productName.name}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default ProductBreadcrumb
