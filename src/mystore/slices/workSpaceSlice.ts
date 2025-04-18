import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWorkspaceData } from '@/api'; // Replace with your actual API call
import { WorkspaceType } from '@/types/api.types';

interface WorkspaceState {
  workspace?: WorkspaceType;
  isLoading: boolean;
  error: any;
}

const initialState: WorkspaceState = {
  workspace: undefined,
  isLoading: false,
  error: null,
};

export const fetchWorkspace = createAsyncThunk(
  'workspace/fetchWorkspace',
  async (workspaceId: string) => {
    const response = await getWorkspaceData(workspaceId); // Your API
    return response.workspace;
  }
);

const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    clearWorkspace: (state) => {
      state.workspace = undefined;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWorkspace.fulfilled, (state, action) => {
        state.workspace = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWorkspace.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const { clearWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;
