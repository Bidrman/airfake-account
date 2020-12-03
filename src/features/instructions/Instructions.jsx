import React from 'react'
import { Row, Col } from 'reactstrap'

import CustomCard from '../../components/card'

const Instructions = () => {
    return (
        <div className={'instructions'}>
            <div className={'d-flex flex-column align-items-center'}>
                <h2 className={'mt-3 mt-md-5 font-36 text-black font-100 instructions__main-heading'}>
                    Stihnete to dřív, než řeknete appka
                </h2>
                <span className={'text-grey mb-3 mb-md-5 font-20'}>
                    Chcete vědět víc? Mrkněte na <u>video</u>, které vás porvede založením krok za krokem
                </span>
            </div>
            <div className={'d-flex instructions__row'}>
                <Col xs={12} md={6} lg={4} className={'mb-3 px-0'}>
                    <CustomCard className={'instructions__card'}>
                        <div className={'instructions__img'}>
                            <div className={'w-100  h-100 step-one'}></div>
                        </div>
                        <div className={'d-flex flex-column instructions__text'}>
                            <h3 className={'font-24 font-500 mb-3 instructions__heading-first'}>
                                Stáhněte si aplikaci My Air
                            </h3>
                            <p className={'m-0 text-grey instructions__desc'}>
                                Jednoduše ze svého obchodu s aplikace, nebo kliknutím sem.
                            </p>
                        </div>
                    </CustomCard>
                </Col>{' '}
                <Col xs={12} md={6} lg={4} className={'mb-3 px-0'}>
                    <CustomCard className={'instructions__card'}>
                        <div className={'instructions__img'}>
                            <div className={'w-100  h-100 step-two'}></div>
                        </div>
                        <div className={'d-flex flex-column instructions__text'}>
                            <h3 className={'font-24 font-500 mb-3 instructions__heading-second'}>
                                Vyfoťte občanku a jeden další doklad
                            </h3>
                            <p className={'m-0 text-grey instructions__desc'}>
                                Jednoduše ze svého obchodu s aplikace, nebo kliknutím sem.
                            </p>
                        </div>
                    </CustomCard>
                </Col>{' '}
                <Col xs={12} md={6} lg={4} className={'mb-3 px-0'}>
                    <CustomCard className={'instructions__card'}>
                        <div className={'instructions__img'}>
                            <div className={'w-100  h-100 step-three'}></div>
                        </div>
                        <div className={'d-flex flex-column instructions__text'}>
                            <h3 className={'font-24 font-500 mb-3 instructions__heading-third'}>
                                Pošlete si aspoň korunu ze starého účtu
                            </h3>
                            <p className={'m-0 text-grey instructions__desc'}>
                                Jednoduše ze svého obchodu s aplikace, nebo kliknutím sem.
                            </p>
                        </div>
                    </CustomCard>
                </Col>
            </div>
        </div>
    )
}

export default Instructions
