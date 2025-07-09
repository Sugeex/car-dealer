import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface FilterOption {
  name: string;
  option_id: string;
}

interface FiltersData {
  options: FilterOption[];
  series: string[];
  year: number[];
  odometer: number[];
  price: number[];
  body_color: string[];
  upholstery_color: string[];
}

interface FiltersState {
  data: FiltersData;
  loading: boolean;
  error: string | null;
}

const initialState: FiltersState = {
  data: {
    options: [],
    series: [],
    year: [],
    odometer: [],
    price: [],
    body_color: [],
    upholstery_color: [],
  },
  loading: false,
  error: null,
};

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://45.91.201.37:2094/api/cars/filters",
        {
          headers: { Authorization: `${token}` },
        }
      );
      return response.data.items;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default filtersSlice.reducer;