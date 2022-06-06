import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        "name" : "Figurine Luffy",
        "price" : 20,
        "id" : "1"
    }, {
        "name" : "Figurine Zoro",
        "price" : 23,
        "id" : "2"
    },  {
        "name" : "Figurine Sanji",
        "price" : 21,
        "id" : "3"
    },  {
        "name" : "Figurine Usopp" ,
        "price" : 19,
        "id" : "4"
    }, {
        "name" : "Figurine Nico Robin",
        "price" : 25,
        "id" : "5"
    }
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
      productAdded(state, action) {
        state.push(action.payload)
      },
      productEdited(state, action) {
        const { id, name, price } = action.payload
        const product = state.find((user) => user.id === id)
        if (product) {
            product.name = name;
            product.price = price;
      }
  },
}});

export const { productAdded, productEdited } = productsSlice.actions;

export default productsSlice.reducer