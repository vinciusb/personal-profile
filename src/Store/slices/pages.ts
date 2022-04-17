import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageState, PageType } from '../../interfaces/interface';

const initialState: PageState = {
    page: PageType.Classes,
};

export const pageSlice = createSlice({
    name: 'pages',
    initialState,

    reducers: {
        changePage: (state, action: PayloadAction<PageType>) => {
            state.page = action.payload;
        },
    },
});

export const { changePage } = pageSlice.actions;

export const selectPage = (state: RootState): PageType => {
    return state.pages.page;
};

export default pageSlice.reducer;
