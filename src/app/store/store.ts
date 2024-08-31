import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedThemeReducer from '../Features/themeSlice';

export const store = configureStore({
    reducer: {
        theme: persistedThemeReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
