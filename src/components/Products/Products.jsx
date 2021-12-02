import React, { useContext,useState } from 'react';
import Product from './Product';
import { Collapse } from "react-collapse";
import Productcontext from '../../pages/Context';
import './Product.css';
const Products = () => {
    const{PRODUCTS,SetPRODUCTS}=
    useContext(Productcontext);
   const [activeIndex,setactiveIndex]= useState(null);
   const index="true";
    return (
    <>
        <div>    
                <h3 className="lefttitle">New Arrivals</h3>   
                <h4  className="righttitle" onClick={(e)=>setactiveIndex(activeIndex === index ? null : index)}>
                    sort by
                    <span className={activeIndex === index?'fa fa-angle-down':'fa fa-angle-up'}></span>
                </h4>
            
                <Collapse isOpened={activeIndex === index}>
                        <div
                            className={{
                            show: activeIndex === index,
                            hide: activeIndex !== index
                            }}
                        >
                            <div className="container productscontainer">
                                {PRODUCTS.map(item => {       
                                    return (
                                            <Product key={item.id} item={item} />
                                    )
                                })}
                            </div>
                        </div>
                </Collapse>
        </div>
    </>
    )
}

export default Products;
