import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cardData }) => (
    <>
        <Link to={cardData.name.common} state={cardData}>
            <div
                className={`
            flex
            flex-col
            rounded-sm
            text-VeryDarkBlue
            bg-VeryLightGray
            dark:text-White
            dark:bg-DarkBlue
            shadow
            shadow-VeryDarkBlue
            cursor-pointer
            `}
            >
                <img src={cardData.flags.png} alt='flag'></img>
                <div className='p-4 text-sm font-light'>
                    <h1 className='font-bold text-lg mb-2'>{cardData.name.common}</h1>
                    <p>
                        <span className='font-semibold'> Population:</span> {cardData.population.toLocaleString()}
                    </p>
                    <p>
                        <span className='font-semibold'> Region:</span> {cardData.region}
                    </p>
                    <p>
                        <span className='font-semibold'> Capital:</span> {cardData.capital}
                    </p>
                </div>
            </div>
        </Link>
    </>
);

export default Card;
