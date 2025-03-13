import { createSlice } from '@reduxjs/toolkit';

let DEFAULT_USER_STATE = {

}

export const usersSlice = createSlice({
    name: 'users',
    initialState: DEFAULT_USER_STATE
});