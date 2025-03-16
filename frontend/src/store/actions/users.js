import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async ({ email, password }, { dispatch }) => {
        try {
            const request = await axios.post(`/api/auth/register`, {
                email: email,
                password: password
            });
            //show message
            return { data: request.data.user, auth: true }
        } catch (err) {
            //show message
            throw err;
        }
    }
)