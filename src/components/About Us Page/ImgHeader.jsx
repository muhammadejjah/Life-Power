import React from 'react'

const ImgHeader = ({ img, title, role }) => {
    return (
        <section className='img-header'>
            <img src={img} alt='img-header' />
            <h2 style={{color:role==="aboutUs"?"#005090":"white"}} >{title}</h2>
        </section>
    )
}

export default ImgHeader
