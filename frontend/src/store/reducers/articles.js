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
            .addCase(addArticle.pending, (state) => {
                state.loading = true;
            })
            .addCase(addArticle.fulfilled, (state, action) => {
                state.loading = false;
                state.lastAdded = action.payload;
            })
            .addCase(addArticle.rejected, (state, action) => {
                state.loading = false;
            })
            //GET CATEGORY
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    }
});

export default articlesSlice.reducer;