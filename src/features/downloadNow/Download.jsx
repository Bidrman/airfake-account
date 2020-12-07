import React from 'react'
import { Row, Col, Card } from 'reactstrap'

import Google from '../../components/icons/google'
import Ios from '../../components/icons/ios'

const Download = () => {
    return (
        <div className={'download'}>
            <Col className={''}>
                <Col md={3} lg={4} className={'download__image'}></Col>
                <Col md={3} lg={4} className={'download__text'}>
                    <h3 className={'download__heading'}>Na nic nečekejte.</h3>
                </Col>
            </Col>
        </div>
    )
}

export default Download
