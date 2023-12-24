import React from 'react'
import CardProduct from './Card'
import CardPlaceholder from '../CardPlaceholder'
import { BaseURL } from '../../Api/Api'
const CardsContainer = ({ data, role, loading }) => {
  const data1 = data || []

  const dataShow = data1.map((el, i) => {
    return (
      <CardProduct role={role} key={i} img={`${BaseURL}${role === "search" ? el.thumbnail : el.image}`} desc={role === "subCategory" ? el.subtitle : el.name} id={el.id} />
    )
  })

  return (
    <div className='d-flex  align-items-center  justify-content-lg-start justify-content-center gap-4  flex-wrap '>
      <CardPlaceholder loading={loading}>{dataShow}</CardPlaceholder>
    </div>
  )
}

export default CardsContainer
