import React from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';

const Grid = () => {
    const countries = useSelector((state) => state.countries.value);
    const searchTerm = useSelector((state) => state.search.value);
    const filter = useSelector((state) => state.filter.value);

    if (!countries[0]) {
        return <p>Loading...</p>;
    }

    let filteredCountries = countries[0];

    if (filter.toLowerCase() !== 'Filter by Region'.toLocaleLowerCase()) {
        filteredCountries = filteredCountries.filter(
            (c) => c.region.toLocaleLowerCase() === filter.toLocaleLowerCase()
        );
    }

    if (!!searchTerm) {
        filteredCountries = filteredCountries.filter((c) =>
            c.name.common
                .toLocaleLowerCase()
                .startsWith(searchTerm.toLocaleLowerCase())
        );
    }

    const cards = filteredCountries.map((c) => (
        <Card key={c.cca2} cardData={c} />
    ));

    return (
        <>
            <div className='grid sm:grid-cols-4 grid-cols-1 gap-14 '>{cards}</div>
        </>
    );
};
export default Grid;
