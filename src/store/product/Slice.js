import { createSlice } from '@reduxjs/toolkit'
import { getProductsThunk } from './Thunk'

const initialState = {
    products: [],
    isLoading: false,
    error: '',
    count: 0,
    totalPrice: 0,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        increment: (state, action) => {
            console.log('state: ', state)
            state.products.map((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1
                    item.total = item.total + item.price
                }
                return item
            })
        },
        decrement: (state, action) => {
            state.products.map((item) => {
                if (item.id === action.payload) {
                    item.quantity--
                    item.total = item.total - item.price
                }
                return item
            })
        },
        incrementByPrice: (state, action) => {
            state.totalPrice += action.payload
        },
        decrementByPrice: (state, action) => {
            state.totalPrice -= action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.products = action.payload.map((item) => ({
                    ...item,
                    quantity: 0,
                    total: 0,
                }))
                state.error = ''
                state.isLoading = false
            })
            .addCase(getProductsThunk.rejected, (state) => {
                state.isLoading = false
                state.error = 'Something went wrong!'
            })
    },
})

export const productActions = productSlice.actions
