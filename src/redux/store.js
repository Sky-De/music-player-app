import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamApi } from './services/shazamApi';
import { shazamApi2 } from './services/shazamApi2';

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    [shazamApi2.reducerPath]: shazamApi2.reducer,
    player: playerReducer,
  },
  // check if crashed--fixIt
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamApi2.middleware),
});
