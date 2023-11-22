import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import CardPlaceholder from '../CardPlaceholder';
const CardProduct = ({ img, desc, role }) => {
  return (
    <Link to={role === "subCategory" ? `/products/${1}` : `/product/${1}`} className='ani-fade'>
      <Card className="mb-3 pt-3" style={{ width: '12rem' }}>
        <Card.Img className='card-img' variant="top" src={img} />
        <Card.Body>
          <Card.Title>{desc}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CardProduct
