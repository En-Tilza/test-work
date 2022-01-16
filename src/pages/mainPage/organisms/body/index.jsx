import React from 'react';

import { Container } from 'components';

import './style.scss';

export const Body = () => {
    return (
        <section className="body">
            <Container>
                <div className="body">
                    <div className="body__left">
                        <p className="text">Представляем</p>
                        <p className="title">Все лучшее<br /> впереди</p>
                    </div>
                    <div className="body__right">
                        <img className='banner' src="images/banner.png" alt="" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
