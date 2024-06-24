import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  value: {
    project_title: string;
    project_description: string;
    project_attachment: any;
    project_member: any;
  };
};

const initialState: StateType = {
  value: {
    project_title: "",
    project_description: "",
    project_attachment: [],
    project_member: [],
  },
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addDetailProject: (state, action) => {
      const { project_title, project_body } = action.payload;
      console.log(project_title, project_body, "ini mereka berdua");
      state.value.project_title = project_title;
      state.value.project_description = project_body;
    },
  },
});

export const { addDetailProject } = projectSlice.actions;
export default projectSlice.reducer;
