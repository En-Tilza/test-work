import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Search } from 'react-feather';

import './style.scss';

export const SearchInput = () => {
    const timeout = useRef(null);
    const [stateButtonAnimation, setStateButtonAnimation] = useState(false);
    const [stateButton, setStateButton] = useState(false);
    const [inputFilled, setInputFilled] = useState(false);
    const [load, setLoad] = useState(false);

    const focusHandle = () => {
        setStateButton(true);

        timeout.current = setTimeout(() => {
            setStateButtonAnimation(true);
        }, 300);
    }

    const blurHandle = () => {
        setStateButton(false);
        setStateButtonAnimation(false);

        clearTimeout(timeout.current);
    }

    const changeHandle = event => {
        const val = event.target.value;

        setInputFilled(!!val);
    }

    const clickHandle = () => {
        setLoad(true);
    }

    return (
        <label className='search'>
            {load ? (
                <div className="loading-animate">
                    <div className="loading-animate__sqr loading-animate__sqr--1"></div>
                    <div className="loading-animate__sqr loading-animate__sqr--2"></div>
                    <div className="loading-animate__sqr loading-animate__sqr--3"></div>
                </div>
            ) : (
                <>
                    <input className='search__input' onChange={changeHandle} onFocus={focusHandle} onBlur={blurHandle} />
                    <span
                        className={classNames(
                            'search__placeholder',
                            {
                                'focus': stateButton,
                                'fill': inputFilled,
                            }
                        )}
                    >
                        Начать поиск
                    </span>
                    <button
                        type="button"
                        onClick={clickHandle}
                        className={classNames(
                            'search__button',
                            {
                                'focus': stateButton,
                                'fill': inputFilled,
                            }
                        )}
                    >
                        {stateButtonAnimation || inputFilled ? (
                            <span className="search__button-text">Найти</span>
                        ) : (
                            <Search className='search__icon'/>
                        )}
                    </button>
                </>
            )}
        </label>
    );
}