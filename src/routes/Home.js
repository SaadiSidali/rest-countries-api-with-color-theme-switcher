import React from "react";
import Main from "../components/Main";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Grid from "../components/Grid";
const Home = () => (<>
    <Main>
        <div className='sm:flex w-full justify-between'>
            <Search />
            <Filter />
        </div>
        <Grid />
    </Main>
</>);

export default Home;