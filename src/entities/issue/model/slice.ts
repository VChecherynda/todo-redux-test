import { createSlice } from "@reduxjs/toolkit";
import {
  IssueState,
  SaveIssuesAction,
  UpdateIssuesAction,
  SelectIssuesAction,
  Issue,
} from "./types";

function sortByStatus(a: Issue, b: Issue) {
  // TODO Обєкт statusOrder буде створюватись на кожній ітераціі, краще винисти його в константу з функціі.
  //  І не вистачає типізаціі, бо яещо добавиться або поміняэться статус, тут помилки не буде
  const statusOrder = { IN_PROGRESS: 1, TODO: 2, DONE: 3 };
  return statusOrder[a.status] - statusOrder[b.status];
}

const initialState: IssueState = {
  issues: [],
};

export const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    saveIssuesList: (state: IssueState, action: SaveIssuesAction) => {
      state.issues = action.payload;
      state.issues.sort(sortByStatus); // TODO Тут буде мутація action.payload, краще так не робити, бо може вилізти боком
    },
    startUpdateIssues: (state: IssueState) => {
      state.issues = state.issues.map((issue) => ({
        ...issue,
        loading: issue.selected,
      }));
    },
    updateSelectedIssues: (state: IssueState, action: UpdateIssuesAction) => {
      state.issues = state.issues
        .map((issue) => ({
          ...issue,
          status: issue.selected ? action.payload : issue.status,
          selected: false,
          loading: false,
        }))
        .sort(sortByStatus);
    },
    unselectIssues: (state: IssueState) => {
      state.issues = state.issues.map((issue) => ({
        ...issue,
        selected: false,
      }));
    },
    selectIssue: (state: IssueState, action: SelectIssuesAction) => {
      state.issues = state.issues.map((issue) => {
        if (issue.id === action.payload.selectedId) {
          return {
            ...issue,
            selected: true,
          };
        }

        if (action.payload.isMultiple) {
          return issue;
        }

        return {
          ...issue,
          selected: false,
        };
      });
    },
  },
});

export const {
  saveIssuesList,
  startUpdateIssues,
  updateSelectedIssues,
  unselectIssues,
  selectIssue,
} = issueSlice.actions;

export const getIssues = (state: IssueState) => state.issues;

export default issueSlice.reducer;
