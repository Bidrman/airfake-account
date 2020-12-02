import React from 'react'
import { Container } from 'reactstrap'

import TopControls from './features/topControls'
import Hero from './features/hero'

const App = () => {
    return (
        <div className={'page'}>
            <header>
                <section className={'bg-lightGray'}>
                    <div className={'inner-container'}>
                        <Container className={'px-0'}>
                            <TopControls />
                        </Container>
                    </div>
                </section>
            </header>
            <section className={'bg-lightGray bg-dudes'}>
                <Container className={'px-0'}>
                    <Hero />
                </Container>
            </section>
        </div>
    )
}

export default App
