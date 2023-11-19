import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import FirstSection from '../components/Sub Categories Page/FirstSection'
import CardsContainer from '../components/Sub Categories Page/CardsContainer'

const SubCategories = () => {
  return (
    <Container  style={{marginTop:"60px"}}>
      <FirstSection/>
      <CardsContainer role={"subCategory"} data={[1,1,1,1,1,1,1,]}/>
    </Container>
  )
}

export default SubCategories
