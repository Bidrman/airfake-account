import React from 'react'
import { Row, Col, Card } from 'reactstrap'

import Google from '../../components/icons/google'
import Ios from '../../components/icons/ios'

const Download = () => {
    return (
        <div className={'mb-3 download bg-mobile-app'}>
            <Col className={'d-flex flex-row justify-content-center'}>
                <Col xs={0} sm={0} md={0} lg={4} className={'download__image'}></Col>
                <Col md={12} lg={7} className={'download__text mx-auto'}>
                    <h3
                        className={
                            'font-64 font-weight-bold text-white mb-2 mb-md-3 mt-3 mt-lg-5 download__heading'
                        }
                    >
                        Na nic nečekejte.
                    </h3>
                    <span className={'d-block font-24 font-500 text-white mb-2 mb-md-3 download__subheading'}>
                        Založte si účet v aplikace My Air.
                    </span>
                    <p className={'d-block font-20 font-300 text-grey download__desc'}>
                        A nebo klidně po staru{' '}
                        <a className={'text-grey font-300 text-decoration-underline'}>ze svého počítače</a>,{' '}
                        <a className={'text-grey font-300 text-decoration-underline'}>po telefonu</a>, nebo{' '}
                        <a className={'text-grey font-300 text-decoration-underline'}>
                            na nejbližší pobočce.
                        </a>
                    </p>
                    <div className={'d-flex flex-row mb-3 mb-lg-5'}>
                        <div className={'mr-1'}>
                            <Google background='transparent' fill='black' width={173} height={48} />
                        </div>
                        <div>
                            <Ios background='transparent' fill='black' width={173} height={48} />
                        </div>
                    </div>
                </Col>
            </Col>
        </div>
    )
}

export default Download
