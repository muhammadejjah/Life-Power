import React from 'react'
import CardProduct from './Card'
import CardPlaceholder from '../CardPlaceholder'
import { BaseURL } from '../../Api/Api'
import logo from "../../images/logo.png"
const CardsContainer = ({ data, role, loading }) => {
  const data1 = data || []

  const dataShow = data1.map((el, i) => {
    return (
      <CardProduct role={role} key={i} img={el.image===null||el.thumbnail===null ?logo:`${BaseURL}${role === "search" ? el.thumbnail : el.image}`} desc={role === "subCategory" ? el.subtitle : el.name} id={el.id} />
    )
  })

  return (
    <div className='d-flex  align-items-center  justify-content-lg-start justify-content-center gap-4  flex-wrap '>
      {dataShow}
      {loading&&<CardPlaceholder loading={true}/>}
    </div>
  )
}

export default CardsContainer
