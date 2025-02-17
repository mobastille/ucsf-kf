import { createAsyncThunk } from '@reduxjs/toolkit';
import { NotebookApi } from 'services/api/notebook';
import { TNotebookApiResponse } from 'services/api/notebook/model';
import { RootState } from 'store/types';
import { handleThunkApiReponse } from 'store/utils';

const startNotebookCluster = createAsyncThunk<
  TNotebookApiResponse,
  {
    onSuccess: () => void;
  },
  { rejectValue: string; state: RootState }
>('notebook/start', async (args, thunkAPI) => {
  const { data, error } = await NotebookApi.start();

  if (error) {
    return thunkAPI.rejectWithValue(error?.message);
  }

  args.onSuccess();

  return handleThunkApiReponse({
    error,
    data: data!,
    reject: thunkAPI.rejectWithValue,
  });
});

const getNotebookClusterStatus = createAsyncThunk<
  TNotebookApiResponse,
  void,
  { rejectValue: string; state: RootState }
>('notebook/get', async (_, thunkAPI) => {
  const { data, error } = await NotebookApi.get();

  if (error) {
    return thunkAPI.rejectWithValue(error?.message);
  }

  return handleThunkApiReponse({
    error,
    data: data!,
    reject: thunkAPI.rejectWithValue,
  });
});

const stopNotebookCluster = createAsyncThunk<
  void,
  {
    onSuccess: () => void;
  },
  { rejectValue: string; state: RootState }
>('notebook/stop', async (args, thunkAPI) => {
  const { data, error } = await NotebookApi.stop();

  if (error) {
    return thunkAPI.rejectWithValue(error?.message);
  }

  args.onSuccess();

  return handleThunkApiReponse({
    error,
    data,
    reject: thunkAPI.rejectWithValue,
  });
});

export { startNotebookCluster, getNotebookClusterStatus, stopNotebookCluster };
