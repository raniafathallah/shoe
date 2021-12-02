import React,{useContext} from 'react';
import './LeftBar.css';
import Productcontext from '../../pages/Context';
import DATA from '../../staticdata/Data';
const Leftbar = () => {
    const{PRODUCTS,SetPRODUCTS}=
    useContext(Productcontext);
    var ALL =  DATA;   
      
    var USA =  PRODUCTS.filter(function(pro) {
        return pro.country == 'USA' ;   
         });
    var EGYPT =  PRODUCTS.filter(function(pro) {
        return pro.country == 'egypt' ;   
        });
    var UK =  PRODUCTS.filter(function(pro) {
        return pro.country == 'uk' ;   
    });
    var SIZE37 =  PRODUCTS.filter(function(pro) {return pro.size == "37" ;   });
    var SIZE38 =  PRODUCTS.filter(function(pro) {return pro.size == "38" ;   });
    var SIZE39 =  PRODUCTS.filter(function(pro) {return pro.size == "39" ;   });
    var SIZE40 =  PRODUCTS.filter(function(pro) {return pro.size == "40" ;   });
    var SIZE41 =  PRODUCTS.filter(function(pro) {return pro.size == "41" ;   });
    return (
        <>
        <div className="leftbar">
        <div className="selectbar">
          <p className="toptitle">  Categories </p>
          <label class="main" onClick={(e)=>SetPRODUCTS(ALL)}>Made In Any country
            <input type="checkbox"/>
            <span class="w3docs"></span>
            </label>

            <label class="main" onClick={(e)=>SetPRODUCTS(EGYPT)}>Made In Egypt
            <input type="checkbox"/>
            <span class="w3docs"></span>
            </label>
            <label class="main" onClick={(e)=>{SetPRODUCTS(UK)}}>Made In UK
            <input type="checkbox"/>
            <span class="w3docs"></span>
            </label>
            <label class="main" onClick={(e)=>{SetPRODUCTS(USA)}}>Made In USA
            <input type="checkbox"/>
            <span class="w3docs"></span>
            </label>
        </div>
        <div className="progressbar">
        <div className="selectsize">
            <section className="priceblock">
                <p className="pricerange">price range</p>
        
                <ol className="progress-bar">
                    <li className=""><span> </span></li>  
                    <li className=""><span></span></li>  
                    <li className="start"><span>size</span></li>
                    <li className="is-complete "><span></span></li>  
                    <li className="is-complete "><span></span></li>
                    <li className="is-complete  end"><span>save</span></li>  
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>  
                </ol>
            </section>
        </div>
        <div className="sizeitems">
            <p className="sizetitle">size</p>
            <div className="sizeblocks">
              <button className="sizebtn" onClick={(e)=>SetPRODUCTS(SIZE37)}>37</button>
              <button className="sizebtn" onClick={(e)=>SetPRODUCTS(SIZE38)}>38</button>
              <button className="sizebtn" onClick={(e)=>SetPRODUCTS(SIZE39)}>39</button>
              <button className="sizebtn" onClick={(e)=>SetPRODUCTS(SIZE40)}>40</button>
              <button className="sizebtn" onClick={(e)=>SetPRODUCTS(SIZE41)}>41</button>
              <button className="sizebtn">42</button>
              <button className="sizebtn">43</button>
              <button className="sizebtn">44</button>
              <button className="sizebtn">45</button>
              <button className="sizebtn">46</button>
              <button className="sizebtn">47</button>
              <button className="sizebtn">48</button>
              <button className="sizebtn">49</button>
              <button className="sizebtn">50</button>
              <button className="sizebtn">51</button>
              <button className="sizebtn">52</button>
              <button className="sizebtn">53</button>
              <button className="sizebtn">54</button>
              <button className="sizebtn">55</button>
              <button className="sizebtn">56</button>
              <button className="sizebtn">57</button>
              <button className="sizebtn">58</button>
             </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Leftbar
