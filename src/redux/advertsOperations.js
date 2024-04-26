import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdvertsAPI, fetchAllAdvertsAPI } from '../services/advertsApi.js';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAllAdverts',
  async (page, { rejectWithValue }) => {
    try {
      const adverts = await fetchAdvertsAPI(page);
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (_, { rejectWithValue }) => {
    try {
      const adverts = await fetchAllAdvertsAPI();
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
