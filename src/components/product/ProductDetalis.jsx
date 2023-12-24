import React, { Fragment, useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import MostPopular from '../products/MostPopular'
import { BaseURL } from '../../Api/Api'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
const ProductDetalis = ({ details, desc }) => {
    const data = details || {}
    const [attributes, setAttributes] = useState([])
    const [files, setFiles] = useState([])
    useEffect(() => {
        if (data) {
            setAttributes(data.attributes)
            setFiles(data.files)
        }
    }, [data])
    const attributesShow = attributes.map((el, idx) => {
        return (
            <tr key={idx}>
                <td style={{ width: "30%" }} className='py-2 mb-3'>{el.name}</td>
                <td style={{ width: "70%", opacity: "80%" }} className='py-2 mb-3'>
                    {el.type === "url" ? <a target='_blank' href={el.value} rel="noreferrer">{el.value}</a> : <p>{el.value}</p>}
                </td>
            </tr>
        )
    })
    const filesShow = files.map((el, idx) => {
        return (
            <tr key={idx}>
                <td style={{ width: "30%" }} className='py-2 mb-3'>{el.name}</td>
                <td style={{ width: "70%", opacity: "80%" }} className='py-2 mb-3'>
                    {el.type === "image" ?
                        <img
                            src={el.value}
                            style={{ width: "50px", height: "100%", cursor: "pointer" }}
                            alt={el.value}
                            onClick={() => {
                                Swal.fire({
                                    imageUrl: `${el.value}`,
                                    imageWidth: 400,
                                    imageHeight: 400,
                                    imageAlt: "Custom image",
                                    showConfirmButton: false,
                                })
                            }}
                        />
                        :
                        <a
                            className='main-color'
                            href={el.value}
                            download={`${el.name}`}
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faShareFromSquare} /> Click For Show...
                        </a>}
                </td>
            </tr>
        )
    })

    return (
        <Fragment>
            <p className='main-color-opacity mb-4'
                dangerouslySetInnerHTML={{ "__html": desc }}
            >
            </p>
            <Row>
                <Col xs={12} lg={8}>
                    <div><h2 className='main-color  product-details '>Product Details</h2></div>
                    <table style={{ width: "100%" }} className='mt-4'>
                        <tbody>
                            {attributesShow}
                            {filesShow}
                        </tbody>
                    </table>
                </Col>
                <Col xs={12} lg={4} className='ms-auto mb-4'>
                    <MostPopular />
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProductDetalis
