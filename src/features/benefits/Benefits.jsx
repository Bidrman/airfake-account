import React from 'react'
import { Row, Col } from 'reactstrap'
import { CreditCard2Back, EmojiSmile, Gem, Cash } from 'react-bootstrap-icons'

import CustomCard from '../../components/card'

const Benefits = () => {
    return (
        <div className={'benefits'}>
            <div className={'text-center'}>
                <h3 className={' font-36 text-grey mt- benefits__heading'}>Co u nás získate?</h3>
            </div>
            <Row className={'d-flex flex-column flex-sm-row justify-content-center'}>
                <Col xs={12} md={6} lg={3} className={'mb-2 mb-md-3'}>
                    <CustomCard className={'benefits__card text-center mx-auto'}>
                        <div className={'benefits__card__image text-center'}>
                            <EmojiSmile color={'#9c3'} size={80} className={'mb-4'} />
                        </div>
                        <div className={'benefits__card__heading '}>
                            <h4 className={'font-500 font-24 mb-3 mb-md-4'}>Učet bez absurdních poplatků</h4>
                        </div>
                        <div className={'benefits__card__desc'}>
                            <p className={'benefits__card__desc-text text-grey'}>
                                Žádné poplatky za příchozí platbu nebo zrušení inkasa u nás nenajdete.
                            </p>
                        </div>
                    </CustomCard>
                </Col>
                <Col xs={12} md={6} lg={3} className={'mb-2 mb-md-3'}>
                    <CustomCard className={'benefits__card text-center mx-auto'}>
                        <div className={'benefits__card__image text-center'}>
                            <Cash color={'#9c3'} size={80} className={'mb-4'} />
                        </div>
                        <div className={'benefits__card__heading '}>
                            <h4 className={'font-500 font-24 mb-3 mb-md-4'}>Úrok 1 % i na běžném účtu</h4>
                        </div>
                        <div className={'benefits__card__desc'}>
                            <p className={'benefits__card__desc-text text-grey'}>
                                Stačí pětkrát měsíčně zaplatit kartou a vaše peníze vám zúročíme o 1 % ročně.
                            </p>
                        </div>
                    </CustomCard>
                </Col>
                <Col xs={12} md={6} lg={3} className={'mb-2 mb-md-3'}>
                    <CustomCard className={'benefits__card text-center mx-auto'}>
                        <div className={'benefits__card__image text-center'}>
                            <Gem color={'#9c3'} size={80} className={'mb-4'} />
                        </div>
                        <div className={'benefits__card__heading '}>
                            <h4 className={'font-500 font-24 mb-3 mb-md-4'}>Dměny za časté nákupy</h4>
                        </div>
                        <div className={'benefits__card__desc'}>
                            <p className={'benefits__card__desc-text text-grey'}>
                                Vyberte si z desítek obchodů a my vám z každého nákupu vrátíme část peněz
                                zpět.
                            </p>
                        </div>
                    </CustomCard>
                </Col>
                <Col xs={12} md={6} lg={3} className={'mb-2 mb-md-3'}>
                    <CustomCard className={'benefits__card text-center mx-auto'}>
                        <div className={'benefits__card__image text-center'}>
                            <CreditCard2Back color={'#9c3'} size={80} className={'mb-4'} />
                        </div>
                        <div className={'benefits__card__heading '}>
                            <h4 className={'font-500 font-24 mb-3 mb-md-4'}>2 karty a 1 platební nálepka</h4>
                        </div>
                        <div className={'benefits__card__desc'}>
                            <p className={'benefits__card__desc-text text-grey'}>
                                K běžnému účtu u nás máte zdarma hned dvě karty a jednu platební nálepku.
                            </p>
                        </div>
                    </CustomCard>
                </Col>
            </Row>
        </div>
    )
}

export default Benefits
