import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface bimmer {
  series_name: string;
  hex_body: string;
  hex_upholstery: string;
  engine: string;
}

interface Car {
  id: string;
  series: string;
  year: number;
  price: number;
  odometer: number;
  photos: { url: string }[];
  exterior_color: string;
  interior_color: string;
  bimmer_work_check: bimmer;
}

interface Filters {
  series?: string;
  year?: string;
  page?: number;
  per_page?: number;
}

interface CarsState {
  data: Car[];
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  error: string | null;
  filters: Filters;
  totalItems: number;
}

const initialState: CarsState = {
  data: [],
  loading: false,
  error: null,
  filters: {
    page: 1,
    per_page: 10,
  },
  totalItems: 0,
  loadingMore: false,
  hasMore: true,
};

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters: Filters, { rejectWithValue }) => {
    try {
      console.log("Fetching cars with params:", filters);
      const token = localStorage.getItem("token");
      const response = await axios.get("http://45.91.201.37:2094/api/cars/", {
        params: {
          ...filters,
          page: filters.page || 1,
          per_page: filters.per_page || 10,
          series: filters.series,
        },
        headers: { Authorization: `${token}` },
      });

      return {
        data: Object.values(response.data.by_series).flat() as Car[],
        totalItems: response.data.total_items || 0,
      };
    } catch (error: any) {
      console.error("Fetch cars error:", error);
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        const isInitialLoad = action.meta.arg.page === 1;
        if (isInitialLoad) {
          state.loading = true;
          state.data = [];
        } else {
          state.loadingMore = true;
        }
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const isInitialLoad = action.meta.arg.page === 1;
        const newCars = action.payload.data;

        if (isInitialLoad) {
          state.data = newCars;
        } else {
          state.data = [...state.data, ...newCars];
        }

        state.loading = false;
        state.loadingMore = false;
        state.totalItems = action.payload.totalItems;
        state.hasMore = state.data.length < action.payload.totalItems; 
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.loadingMore = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFilters, resetFilters } = carsSlice.actions;
export default carsSlice.reducer;
