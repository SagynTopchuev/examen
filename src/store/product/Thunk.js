import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../../JS/dataService'

export const getProductsThunk = createAsyncThunk(
    'product/getProduct',
    async (_, { rejectWithValue }) => {
        try {
            const products = await getProducts()
            return products.products
        } catch (error) {
            return rejectWithValue(error.message || 'Something went wrong')
        }
    }
)
