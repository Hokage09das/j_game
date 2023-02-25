import { configureStore } from "@reduxjs/toolkit";

import { jeoparjyApi } from "../api/jeoparjy-api/jeoparjyApi";
import entranceSlice from "./slice/entrance-slice";

export const store = configureStore({
  reducer: {
    [jeoparjyApi.reducerPath]: jeoparjyApi.reducer,
    [entranceSlice.name]: entranceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jeoparjyApi.middleware),
});
