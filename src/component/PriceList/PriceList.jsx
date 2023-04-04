import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices ] = useState([]);
    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    },[])
    return (
        <div>
            <h2 className='text-4xl text-center text-purple-900 font-bold py-4'>Grab your <span className='text-orange-400'>MemberShip</span></h2>
            <div className='grid md:grid-cols-3 gap-4 mx-5'>
            {
                prices.map(price =><PriceCard 
                                key= {price.id}
                                price = {price}
                ></PriceCard>)
            }
            </div>
            
        </div>
    );
};

export default PriceList;