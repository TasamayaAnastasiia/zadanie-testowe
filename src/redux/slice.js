import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
        isOpenMenu: false,
    },
    reducers: {
        openModal(state, action) {
            state.isOpen = action.payload;
        },
        openModalMenu(state, action) {
            state.isOpenMenu = action.payload;
        }
    }
})

export const { openModal, openModalMenu } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;