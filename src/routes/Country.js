import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Country = () => {
    const countries = useSelector((state) => state.countries.value)[0];

    // cca3
    const borderCountries = (borders) => {
        return countries
            .filter((c) => borders.findIndex((b) => b === c.cca3) !== -1)
            .map((dd) => dd.name.common);
    };

    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    if (!countries) {
        return <>Loading...</>;
    }
    console.log();

    const handleBack = () => {
        navigate('/');
    };
    const nativeName =
        data.name.nativeName[Object.keys(data.name.nativeName)[0]].official;
    const currencies = Object.keys(data.currencies)[0];
    const languages = data.languages[Object.keys(data.languages)[0]];

    return (
        <>
            <div className='bg-VeryLightGray dark:bg-VeryDarkBlueBg px-16 dark:text-White h-screen'>
                <button
                    onClick={handleBack}
                    className='dark:bg-DarkBlue px-6 py-2 font-light rounded shadow my-2'
                >
                    ⬅ Back
                </button>
                <div className='grid grid-cols-2 my-16 text-sm'>
                    <img src={data.flags.png} alt={data.name.common} className='h-72' />
                    <div>
                        <h1 className='text-2xl font-bold my-4'>{data.name.common}</h1>
                        <div className='flex'>
                            <div className='mr-16 '>
                                <p>
                                    <span className='font-semibold'> Native Name:</span>{' '}
                                    {nativeName}
                                </p>
                                <p>
                                    <span className='font-semibold'> Population:</span>{' '}
                                    {data.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className='font-semibold'> Region:</span> {data.region}
                                </p>
                                <p>
                                    <span className='font-semibold'> Sub Regions:</span>{' '}
                                    {data.subregion}
                                </p>
                                <p>
                                    <span className='font-semibold'> Capital:</span>{' '}
                                    {data.capital}
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className='font-semibold'> Top Level Domain:</span>{' '}
                                    {data.tld[0]}
                                </p>
                                <p>
                                    <span className='font-semibold'> currencies:</span>{' '}
                                    {currencies}
                                </p>
                                <p>
                                    <span className='font-semibold'> Languages:</span> {languages}
                                </p>
                            </div>
                        </div>
                        <div className='mt-16'>
                            <div className='flex flex-wrap'>
                                <span className='font-semibold my-2'> Border Countries:</span>{' '}
                                {borderCountries(data.borders).map((n) => (
                                    <div
                                        key={n}
                                        className='outline-1 px-4 mx-1 my-2 rounded-sm bg-VeryLightGray shadow-sm dark:bg-DarkBlue'
                                    >
                                        {n}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Country;
