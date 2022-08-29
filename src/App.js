import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

import { setCountries } from './store/countriesSlice'

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Grid from './components/Grid';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const darkTheme = useSelector((state) => state.darkTheme.value);
  const dispatch = useDispatch()

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await axios.get('/all');
      dispatch(setCountries(data));
    };
    FetchData().catch(console.error);
    // eslint-disable-next-line 
  }, []);

  return (
    <div className={`App ${darkTheme ? 'dark' : ''} `}>
      <Header />
      <Main>
        <div className='flex w-full justify-between'>
          <Search />
          <Filter />
        </div>
        <Grid />
      </Main>
    </div>
  );
}

export default App;
