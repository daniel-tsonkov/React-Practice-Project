import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorGlobal, successGlobal } from '../reducers/notifications';

import axios from 'axios';
import { getAuthHeader } from '../../utils/tools';

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async ({ email, password }, { dispatch }) => {
        try {
            const request = await axios.post(`/api/auth/register`, {
                email: email,
                password: password
            });
            /// show a message
            dispatch(successGlobal('Wellcome check your emails to validate'))
            return { data: request.data.user, auth: true }
        } catch (error) {
            /// show a message
            dispatch(errorGlobal(error.response.data.message))
            throw error;
        }
    }
);

export const signInUser = createAsyncThunk(
    '/users/signInUser',
    async ({ email, password }, { dispatch }) => {
        try {
            const request = await axios.post(`/api/auth/signin`, {
                email: email,
                password: password
            });
            dispatch(successGlobal('Wellcome '))
            return { data: request.data.user, auth: true }
        } catch (error) {
            /// show a message
            dispatch(errorGlobal(error.response.data.message))
            throw error;
        }
    }
)

export const isAuth = createAsyncThunk(
    '/users/isAuth',
    async () => {
        try {
            const request = await axios.get('/api/auth/isauth', getAuthHeader());
            return {
                data: request.data,
                auth: true
            }
        } catch (error) {
            return {
                data: {},
                auth: false
            }
        }
    }
)