import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productEdited } from './productsSlice';

const EditProducts = ({id, setEdit}) => {
    const newProduct = useRef()
    const newPrice = useRef()
    const dispatch = useDispatch()

    const product = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newProduct && newPrice) {
            dispatch(
                productEdited({
                  name: newProduct.current.value,
                  price: Number(newPrice.current.value),
                  id: product.id
                })
              );
        }
        setEdit(null)
        document.getElementById("form").reset()
    }
    return (
        <div className='border-2 w-[30%] m-2'>
            <form onSubmit={handleSubmit} id='form'>
            <div>
            <input className='border-2 m-2' type="text" placeholder='Produit' ref={newProduct}/>
            </div>
            <div>
            <input className='border-2 m-2' type="number" placeholder='Prix' min='1' max='100' ref={newPrice}/>
            </div>
            <button type="submit" className='border-2 m-2 cursor-pointer'> Valider </button>
        </form>
      </div>
    );
};

export default EditProducts;