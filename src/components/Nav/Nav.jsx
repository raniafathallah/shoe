import React from 'react';
import './Nav.css';

const Nav = () => { 
    return (
        <>
            <div class="topnav">
            <a href="#about">Shoe .</a>
            <div class="search-container">
                <form>
                  <button type="submit"><i class="fa fa-search"></i></button>
                  <input type="text" placeholder="" name="search"/>
                </form>
            </div>
            </div>
        </>
    )
}

export default Nav;


