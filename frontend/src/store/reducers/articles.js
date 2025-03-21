import { createSlice } from '@reduxjs/toolkit';
//import { current } from 'page';

export const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        hoemSort: {
            sortby: '_id',
            order: 'desc',
            limit: 8,
            skip: 0
        },
        loading: false,
        articles: [],
        current: null,
        categories: []
    },
    reducers: {

    }
});

export default articlesSlice.reducer;