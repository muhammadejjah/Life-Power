import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import CardsContainer from '../Category Page/CardsContainer'
import MostPopular from './MostPopular'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BaseApiURL } from '../../Api/Api'
import axios from 'axios'
const ProductsShow = () => {
  const { subid } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [shouldIncrement, setShouldIncrement] = useState(false)
  const [success, setSuccess] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      if(success){
        try {
          setLoading(true)
          const res = await axios.get(`${BaseApiURL}/psubcategory/${subid}/${page}`)
          // const data = await res.json()
          setSuccess(res.data.success)
          console.log(res.data)
          setData(prev=>[...prev,...res.data.data])
          setLoading(false)
  
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  }, [page,success])



  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight=e.target.documentElement.scrollHeight
      const currentHight= e.target.documentElement.scrollTop + window.innerHeight
      
      if(currentHight + 1>=scrollHeight-300){
        setShouldIncrement(true)
      }else{
      setShouldIncrement(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  }, [page])
  useEffect(()=>{
    if(shouldIncrement){
      setPage(prev=>prev + 1)
    }
    else{
    }
  },[shouldIncrement])

  // const { loading, subCategory } = useSelector(state => state.SubCategorySlice)


  return (
    <Row className='mt-4'>
      <Col sm={12} lg={9}>
        <CardsContainer loading={loading} data={data} />
        <div className='w-100 text-center mt-4' style={{display:success?"none":"block"}}>No More Products</div>
      </Col>
      <Col sm={12} lg={3}>
        <MostPopular />
      </Col>
    </Row>
  )
}

export default ProductsShow
