import React from 'react'
import { Col, Button } from 'reactstrap'

import { ArrowRight } from 'react-bootstrap-icons'

import Google from '../../components/icons/google'
import Ios from '../../components/icons/ios'

const Hero = () => {
    return (
        <div className='w-100 d-flex flex-row hero'>
            <Col xs={12} md={12} lg={6} className={'px-0 pb-mb-2 hero__text'}>
                <h1 className={'hero__heading'}>Založte si účet z mobilu na pár ťuknutí</h1>
                <span className={'d-block font-18 text-grey hero__desc'}>
                    Stačí si stáhnout aplikaci My Air a na pobočku nemusíte
                </span>
                <div className={'d-flex flex-row mb-3'}>
                    <a href='#' className={'d-block mr-1'}>
                        <Ios background='transparent' fill='black' width={152} height={44} />
                    </a>
                    <a href='#' className={'d-block ml-1'}>
                        <Google background='transparent' fill='black' width={152} height={44} />
                    </a>
                </div>
                <div className={'hero__hr'}></div>
                <div className={'d-flex flex-row hero__btn-section'}>
                    <span className={'font-20 text-grey font-500'}>Chci běžný účet v Air Bank</span>
                    <Button
                        className={'bg-green text-uppercase text-black font-14 hero__btn align-items-center'}
                    >
                        <span className={'font-500 font-14 hero__btn-text'}>Založit účet</span>
                        <ArrowRight size={21} className={'ml-3 hero__arrow'} />
                    </Button>
                </div>
            </Col>
            <Col xs={0} lg={6} className={'px-0 h-100 bg-dudes'}></Col>
        </div>
    )
}

export default Hero
