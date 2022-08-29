import React from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from '../store/filterSlice';

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const filter = e.target.value;
        dispatch(setFilter(filter))
    }

    return (
        <>
            <select
                id='countries'
                className='dark:bg-DarkBlue dark:text-White text-sm rounded border-none outline-none mb-6 sm:my-8 py-2 px-3 '
                onChange={handleChange}
            >
                <option defaultValue>Filter by Region</option>
                <option>Africa</option>
                <option>Europe</option>
                <option>Asia</option>
                <option>America </option>
            </select>
        </>
    );
};

export default Filter;
