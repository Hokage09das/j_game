import { configureStore } from "@reduxjs/toolkit";

import { jeoparjyApi } from "../../api/jeoparjy-api/jeoparjyApi";
// import { dataSlice } from "../slice/data-slice";
import entranceSlice from "../slice/entrance-slice";

export const store = configureStore({
  reducer: {
    [jeoparjyApi.reducerPath]: jeoparjyApi.reducer,
    [entranceSlice.name]: entranceSlice.reducer,
    // [dataSlice.name]: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jeoparjyApi.middleware),
});
