import React ,{useState} from 'react';
import DATA from '../staticdata/Data';
import Productcontext  from './Context';
import LeftBar from '../components/LeftBar/LeftBar';
import Nav from '../components/Nav/Nav';
import Products from '../components/Products/Products';


const Home = () => {
    const [PRODUCTS, SetPRODUCTS] = useState(DATA);
    return (
        
          <Productcontext.Provider value={{PRODUCTS, SetPRODUCTS}}>
            <Nav/>
            <LeftBar/>
            <Products/>
          </Productcontext.Provider>
        
    )
}

export default Home

