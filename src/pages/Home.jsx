import React, { useState } from 'react';
import { useSelector } from "react-redux";
import AddProducts from '../features/products/AddProducts';
import EditProducts from '../features/products/EditProducts';

const Home = () => {
    const [edit, setEdit] = useState(null)
    const products = useSelector((state) => state.products);

    console.count();
    return (
        <>
        
        <div className='flex justify-around'>
            <h3 className='mx-2'> Redux Toolkit Cart </h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </div>
        <div className='flex flex-wrap'>
        {products.map((product,index) => {
            return (
                <>
                {edit === product.id ? (
                    <EditProducts key={index} id={product.id} setEdit={setEdit}/>
                ) : (
                    
                    <div key={product.id} className='border-2 w-[30%] m-3'>
                    <div className='flex justify-between items-center mb-2'>
                    <h5 className='font-semibold'> Produit : {product.name} </h5>
                    <button className='bg-blue-400 rounded p-1' onClick={() => setEdit(product.id)}> Edit Product</button>
                    </div>
                    <div className='flex justify-between items-center'>
                    <p className='font-semibold'> Prix : {product.price}€ </p>
                    <button className='bg-amber-400 rounded p-1'> Add to cart</button>
                    </div>
                    <button className='bg-red-400 rounded p-1 w-[40%] ml-[30%]'> Delete Product </button>
                </div>
                )}
                
                </>
            )
        })}
        </div>
        <AddProducts/>
        </>
    );
};

export default Home;