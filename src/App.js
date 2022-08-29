import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { setCountries } from './store/countriesSlice';

import Header from './components/Header';

import Home from './routes/Home';
import Country from './routes/Country';

function App() {
  const darkTheme = useSelector((state) => state.darkTheme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchData = async () => {
      const { data } = await axios.get('/all');
      dispatch(setCountries(data));
    };
    FetchData().catch(console.error);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`App ${darkTheme ? 'dark' : ''}`}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />
          <Route path='/:country' element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
