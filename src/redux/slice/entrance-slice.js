import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const isEntrance = JSON.parse(localStorage.getItem("auth") || "false");
const data = JSON.parse(localStorage.getItem("data") || "[]");

const BASE_URL = "http://jservice.io/";

export const getData = createAsyncThunk("data/fetch", async (number) => {
  const response = await fetch(`${BASE_URL}api/category?id=${number}`);
  const data = await response.json();
  return data;
});

const initialState = {
  isEntrance: isEntrance?.auth,
  userName: isEntrance?.userName,
  data: data,
  statistic: {
    // isCorrect: null,
    question: {
      value: 0,
      title: [],
    },
  },
};

const entranceSlice = createSlice({
  name: "entrance",
  initialState,
  reducers: {
    getUser(state, { payload }) {
      state.isEntrance = true;
      state.userName = payload;
      localStorage.setItem(
        "auth",
        JSON.stringify({ auth: state.isEntrance, userName: payload }),
      );
    },

    log_out(state, { payload }) {
      localStorage.removeItem("auth");
      localStorage.removeItem("data");
      state.isEntrance = false;
    },

    copyFirstFiveElementOfArray(state, { payload }) {
      state.data = state.data.map((item) => {
        const newObj = { ...item };
        const newArray = newObj?.clues?.slice(0, 5);

        const element = newArray.map((item, index) => {
          const example = {
            ...item,
            value: (index + 1) * 100,
          };
          return example;
        });
        newObj.clues = element;
        return newObj;
      });
      localStorage.setItem("data", JSON.stringify(state.data));
    },

    baningEnterUser(state, { payload }) {
      const { itemId, id } = payload;
      state.data = state.data.map((item) =>
        item.id === itemId
          ? {
              ...item,
              clues: item.clues.map((el) =>
                el.id === id ? { ...el, invalid_count: true } : el,
              ),
            }
          : item,
      );
    },

    getTrueAnswer(state, { payload }) {
      state.statistic.question.title.push(payload.title);
      state.statistic = {
        // isCorrect: payload.isCorrect,
        question: {
          value: state.statistic.question.value + payload.value,
          title: [...new Set(state.statistic.question.title)],
        },
      };
    },
  },

  extraReducers: (build) =>
    build.addCase(getData.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state.data.push(action.payload);
      }
      if (state.data.length > 5) return state.data.pop();
      localStorage.setItem("data", JSON.stringify(state.data));
    }),
});

export const entranceAction = entranceSlice.actions;
export default entranceSlice;
