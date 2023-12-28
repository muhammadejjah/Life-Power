import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const CardProduct = ({ img, desc, role, id }) => {
  const sliceText = desc.slice(0, 10)
  return (
    <Link to={role === "subCategory" ? `/products/${id}` : `/product/${id}`} className='ani-fade'>
      <Card className="mb-3 pt-3" >
        <Card.Img className='card-img' variant="top" src={img} />
        <Card.Body>
          <Card.Title title={desc} >{desc.length > 16 ? `${sliceText} ...` : desc}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CardProduct
