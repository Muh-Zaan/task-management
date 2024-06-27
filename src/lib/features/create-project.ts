import { AttachmentData } from "@/types/project";
import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  value: {
    project_title: string;
    project_description: string;
    project_attachment: AttachmentData[];
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
      state.value.project_title = project_title;
      state.value.project_description = project_body;
    },
    addAttachmentData: (state, action) => {
      const data: AttachmentData = {
        name: action.payload.name,
        url: action.payload.url,
      };
      state.value.project_attachment = [
        ...state.value.project_attachment,
        data,
      ];
    },
    deleteAttachment: (state, action) => {
      const url = action.payload.url;
      state.value.project_attachment = state.value.project_attachment.filter(
        (attachment) => attachment.url != url
      );
    },
  },
});

export const { addDetailProject, addAttachmentData, deleteAttachment } =
  projectSlice.actions;
export default projectSlice.reducer;
