import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
const CardPlaceholder = ({ loading, children }) => {
    return (
        <Fragment>
            {loading ? (
                <Fragment>
                    <Card style={{ width: '13rem' }}>
                        <div animation="glow" className='card-img'></div>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                            </Placeholder>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <div className='card-img'></div>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                            </Placeholder>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <div className='card-img'></div>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                            </Placeholder>
                        </Card.Body>
                    </Card>
                </Fragment>
            ) : (children)}
        </Fragment>
    )
}

export default CardPlaceholder
