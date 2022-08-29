import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../store/searchSlice';

const Search = () => {
    const darkTheme = useSelector((state) => state.darkTheme.value);
    const searchTerm = useSelector((state) => state.search.value);

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(setSearch(searchTerm))
    }

    return (
        <>
            <div className='relative'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button
                        type='submit'
                        className='p-1 focus:outline-none focus:shadow-outline'
                    >
                        <svg
                            fill='none'
                            stroke={darkTheme ? '#fff' : '#111517'}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                        </svg>
                    </button>
                </span>
                <input
                    onChange={handleChange}
                    type='text'
                    className='py-2 text-sm dark:bg-DarkBlue VeryDarkBlueBg rounded pl-10 focus:outline-none dark:text-White w-96 my-8 shadow'
                    placeholder='Search for a country...'
                    autoComplete='off'
                    value={searchTerm}
                />
            </div>
        </>
    );
};

export default Search;
