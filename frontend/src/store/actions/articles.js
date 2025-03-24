import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorGlobal, successGlobal } from '../reducers/notifications';
import { getAuthHeader } from '../../utils/tools'

import axios from 'axios';

export const addArticle = createAsyncThunk(
    'articles/addArticle',
    async (article, { dispatch }) => {
        try {
            const request = await axios.post(`/api/articles`, article, getAuthHeader());
            dispatch(successGlobal('Post created!!!'));
            return request.data;
        } catch (err) {
            dispatch(errorGlobal(err.response.data.message));
            throw err;
        }
    }
);

export const getAdminArticle = createAsyncThunk(
    'articles/getAdminArticle',
    async (_id, { dispatch }) => {
        try {
            const request = await axios.get(`/articles/edit/${_id}`, getAuthHeader());
            return request.data;
        } catch (err) {
            dispatch(errorGlobal(err.response.data.message));
            throw err;
        }
    }
);

export const getCategories = createAsyncThunk(
    'articles/getCategories',
    async (object, { dispatch }) => {
        try {
            const request = await axios.get(`/api/articles/categories`, getAuthHeader());
            return request.data;
        } catch (err) {
            dispatch(errorGlobal(err.response.data.message));
            throw err;
        }
    }
);