import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productAdded } from './productsSlice';

const AddProducts = () => {
    const newProduct = useRef()
    const price = useRef()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newProduct && price) {
            dispatch(
                productAdded({
                  name: newProduct.current.value,
                  price: Number(price.current.value),
                  id: (products + 1).toString()
                })
              );
        }
        document.getElementById("form").reset()
    }

    return (
        <div className='border-2 w-[30%] m-2'>
            <form onSubmit={handleSubmit} id='form'>
            <div>
            <input className='border-2 m-2' type="text" placeholder='Produit' ref={newProduct}/>
            </div>
            <div>
            <input className='border-2 m-2' type="number" placeholder='Prix' min='1' max='100' ref={price}/>
            </div>
            <button type="submit" className='border-2 m-2 cursor-pointer'> Ajouter produit</button>
        </form>
      </div>
    );
};

export default AddProducts;