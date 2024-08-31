import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from '../store/store';

interface ThemeState {
    theme: 'light' | 'dark';
}

const initialState: ThemeState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeSlice.reducer);

export const { toggleTheme, setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): 'light' | 'dark' => state.theme.theme;

export default persistedThemeReducer;
