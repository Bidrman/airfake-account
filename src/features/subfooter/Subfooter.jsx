import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Navbar from 'react-bootstrap/Navbar'

import LinkedIn from '../../components/icons/linkedin'
import Facebook from '../../components/icons/fb'
import Youtube from '../../components/icons/youtube'
import Twitter from '../../components/icons/twitter'

const Subfooter = () => {
    return (
        <Container>
            <Navbar
                expand={'lg'}
                collapseOnSelect
                className={'w-100 mt-3 mt-lg-5 align-items-start subfooter__navigation'}
            >
                <Col xs={12} sm={6} md={3}>
                    <h4 className='green mb-3 font-500 font-20 text-black'>Časté dotazy</h4>
                    <p className={'text-grey'}>Zde najdete odpovědi na všemožné dotazy k založení účtu</p>

                    <ul className='subfooter__list'>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__link'>
                                Časté otázky
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <h4 className='green mb-3 font-500 font-20 text-black'>Zavoláme Vám</h4>
                    <p className={'text-grey'}>
                        Nevíte si rady? Dejte nám na sebe telefon a my se vám ozveme.
                    </p>

                    <ul className='subfooter__list'>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__link'>
                                Zavoláme Vám
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <h4 className='green mb-3 font-500 font-20 text-black'>Napište nám</h4>
                    <p className={'text-grey'}>Rádi vám poradíme i po e-mailu.</p>

                    <ul className='subfooter__list'>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__link'>
                                Napište nám
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <h4 className='green mb-3 font-500 font-20 text-black'>Sledujte nás</h4>
                    <ul className='subfooter__list-socials'>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__social'>
                                <Facebook />
                            </a>
                        </li>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__social'>
                                <LinkedIn />
                            </a>
                        </li>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__social'>
                                <Twitter />
                            </a>
                        </li>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__social'>
                                <Twitter />
                            </a>
                        </li>
                        <li className='subfooter__list-item mb-2'>
                            <a href='#' className='subfooter__social'>
                                <Youtube />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Navbar>
            <Col xs='12' className={'px-0 pt-4 w-100 d-flex flex-row justify-content-start'}>
                <Col className={'px-0'}>
                    <span className={'d-block text-grey footer__text'}>
                        Člen skupiny PPF, IČO 29045371 / Evropská 2690/17, 160 00 Praha 6, zapsaná u
                        rejstříkového soudu v Praze — spisová značka B 16013
                    </span>
                </Col>
            </Col>
        </Container>
    )
}

export default Subfooter
