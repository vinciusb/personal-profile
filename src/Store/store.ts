import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pagesSlice from './slices/pages';
import classesSlice from './slices/classes';

export const store = configureStore({
    reducer: {
        pages: pagesSlice,
        classes: classesSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
