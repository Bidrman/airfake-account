import React from 'react'
import { Col, Button } from 'reactstrap'

import Google from '../../components/icons/google'
import Ios from '../../components/icons/ios'

const Hero = () => {
    return (
        <div className='w-100 d-flex flex-row hero'>
            <Col xs={12} md={6} className={'px-0 pb-mb-2 hero__text'}>
                <h1 className={'hero__heading'}>Založte si účet z mobilu na pár ťuknutí</h1>
                <span className={'d-block font-18 text-grey hero__desc'}>
                    Stačí si stáhnout aplikaci My Air a na pobočku nemusíte
                </span>
                <div className={'d-flex flex-row mb-3'}>
                    <a href='#' className={'d-block mr-2'}>
                        <Ios />
                    </a>
                    <a href='#' className={'d-block ml-2'}>
                        <Google background='transparent' fill='black' />
                    </a>
                </div>
                <div className={'hero__hr'}></div>
                <div className={'mb-4'}>
                    <span className={'font-20 text-grey'}>Chci běžný účet v Air Bank</span>
                    <Button className={'bg-green text-uppercase text-black font-14 hero__btn'}>
                        Založit účet
                    </Button>
                </div>
            </Col>
            <Col xs={0} md={6} className={'px-0 h-100 bg-dudes'}></Col>
        </div>
    )
}

export default Hero
