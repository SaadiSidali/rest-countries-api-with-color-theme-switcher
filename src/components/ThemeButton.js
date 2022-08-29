import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggle } from '../store/darkThemeSlice';
import moonLogo from '../assets/moon-regular.svg';

const ThemeButton = () => {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state) => state.darkTheme.value);

    return (
        <div
            className='flex items-center cursor-pointer select-none'
            onClick={() => dispatch(toggle())}
        >
            <img
                src={moonLogo}
                height={16}
                width={16}
                alt='Dark Mode'
                style={{
                    filter: darkTheme
                        ? 'invert(100%) sepia(0%) saturate(7477%) hue-rotate(195deg) brightness(94%) contrast(108%)'
                        : '',
                }}
            />

            <p className='font-semibold ml-1 text-VeryDarkBlue dark:text-White'>
                Dark Mode
            </p>
        </div>
    );
};

export default ThemeButton;
