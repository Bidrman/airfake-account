import React from 'react'
import { Col } from 'reactstrap'

import Airbank from '../../components/icons/airbank'

const TopControls = () => {
    return (
        <div className={'d-flex flex-row align-items-center justify-content-between topControls'}>
            <Col xs={4} className={'px-0'}>
                <a href='www.airbank.cz' className={'d-inline-block p-2 p-md-3 bg-black'}>
                    <Airbank />
                </a>
            </Col>
            <Col xs={3} className={'px-0 d-flex justify-content-center'}>
                <a
                    href={'http://localhost:3000/'}
                    className={
                        'd-block position-relative text-decoration-underline arrow-moving topControls__link'
                    }
                >
                    Přejít na airbank
                </a>
            </Col>
        </div>
    )
}

export default TopControls
