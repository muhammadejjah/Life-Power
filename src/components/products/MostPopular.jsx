import React, { useEffect } from 'react'
import { BaseURL } from '../../Api/Api'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMostPopular } from '../../state/MostPopularSlice'
import Loading from '../Loading'
import Err from '../Err'
const MostPopular = () => {
    const dispatch = useDispatch()
    const { mostPopular, loading, error } = useSelector(state => state.MostPopularSlice)

    useEffect(() => {
        dispatch(getMostPopular())
    }, [dispatch])

    const dataShow = mostPopular.map((el, idx) => {
        return (
            <Link to={`/product/${el.id}`} key={idx} className='mp-wraper px-2 mb-2 gap-2'>
                <img className='border rounded' style={{ width: "60px", aspectRatio: "1/1",objectFit:"contain" }} src={`${BaseURL}${el.image}`} alt='mp-img' />
                <div className='w-100 d-flex align-items-center justify-content-center border rounded' ><p className=' m-0 text-dark'>{el.name}</p></div>
            </Link>
        )
    })

    return (
        <div className='d-flex  flex-column'>
            <div className='mp-title'><h5 className='m-0 p-2'>Most Popular</h5></div>
            <Loading loading={loading}>
                <Err error={error}>
                    <div className='w-100 d-flex  flex-column mp-container mt-3 '>
                        {dataShow}
                    </div>
                </Err>
            </Loading>
        </div>
    )
}

export default MostPopular
