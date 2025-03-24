import { createSlice } from '@reduxjs/toolkit';
//import { current } from 'page';
import { getCategories, addArticle } from '../actions/articles'

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

    },
    extraReducers: (builder) => {
        builder
            //ADD ARTICLE
            .addCase(addArticle.fulfilled, (state, action) => { })
            .addCase(addArticle.fulfilled, (state, action) => { })
            .addCase(addArticle.fulfilled, (state, action) => { })
            //GET CATEGORY
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    }
});

export default articlesSlice.reducer;