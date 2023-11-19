import React, { Fragment } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import CardProduct from './Card'
import inv from "../../images/12.png"
import battery from "../../images/11.png"
import CardPlaceholder from '../CardPlaceholder'

const CardsContainer = ({ data, role }) => {
  const desc = "SubCategory"
  data = data || [] //for test


  const dataShow = data.map((el, idx) => {
    return (
      <CardProduct role={role} key={idx} img={inv} desc={desc} />
    )
  })
  return (
    <div className='d-flex  align-items-center  justify-content-lg-start justify-content-center gap-4  flex-wrap '>
      <CardPlaceholder loading={!true}>{dataShow}</CardPlaceholder>
    </div>
  )
}

export default CardsContainer
