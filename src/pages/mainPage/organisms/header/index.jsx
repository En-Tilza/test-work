import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import classNames from 'classnames';

import { Container } from 'components';
import { SearchInput } from '../../molecules';
import { useIsMobile } from 'hooks/useIsMobile';

import './style.scss';

export const Header = () => {
    const isMobile = useIsMobile();
    const [stateMenu, setStateMenu] = useState(false);

    const renderHelper = () => {
        return <SearchInput />
    }

    const openHandle = () => {
        setStateMenu(true);
    }

    const closeHandle = () => {
        setStateMenu(false);
    }

    return (
        <header className='header'>
            <Container>
                {isMobile ? (
                    <div className="mobile-header">
                        <ChevronRight className="mobile-header__arrow" onClick={openHandle}/>

                        <div
                            className={classNames(
                                'mobile-menu',
                                {
                                    'open': stateMenu,
                                }
                            )}
                        >
                            <div className="mobile-menu__wrapper">
                                <ChevronLeft className="mobile-header__arrow" onClick={closeHandle}/>
                                {renderHelper()}
                            </div>
                        </div>
                    </div>
                ) : (
                    renderHelper()
                )}
            </Container>
        </header>
    );
}