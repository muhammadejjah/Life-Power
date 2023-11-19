import React from 'react'
import inv from "../../images/12.png"
import { Link } from 'react-router-dom'
const MostPopular = () => {
    const data = [ 1,1,1,1,1,1,1,1,1,1]
    const dataShow =data.map((el,idx)=>{
        return(
            <Link key={idx} className='mp-wraper px-2 mb-2 gap-2'>
                    <img className='border rounded' style={{ width: "50px", aspectRatio: "1/1" }} src={inv} alt='mp-img' />
                    <div className='w-100 d-flex align-items-center justify-content-center border rounded' ><p className=' m-0 text-dark'>Most mut Popular</p></div>
                </Link>
        )
    })
    return (
        <div className='d-flex  flex-column'>
            <div className='mp-title'><h5 className='m-0 p-2'>Most Popular</h5></div>
            <div className='w-100 d-flex  flex-column mp-container mt-3 '>
                {dataShow}
            </div>
        </div>
    )
}

export default MostPopular
