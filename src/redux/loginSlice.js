import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    isLoading: false
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = !state.isLoading
        }
    }
}
);

export const { loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
