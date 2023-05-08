import { createSlice } from "@reduxjs/toolkit";
import { IssueState, SaveIssuesAction, UpdateIssuesAction, SelectIssuesAction } from "./types";

const initialState: IssueState = {
    issues: []
}

export const issueSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        saveIssuesList: (state: IssueState, action: SaveIssuesAction) => {
            state.issues = 
                action.payload
                    .sort((a,b) => {
                        const statusOrder = { IN_PROGRESS: 1, TODO: 2, DONE: 3 };
                        return statusOrder[a.status] - statusOrder[b.status];
                    })
        },
        updateSelectedIssues: (state: IssueState, action: UpdateIssuesAction) => {
            state.issues = state.issues
                        .map(issue => ({
                            ...issue,
                            status: issue.selected ? action.payload : issue.status
                        }))
                        .sort((a,b) => {
                            const statusOrder = { IN_PROGRESS: 1, TODO: 2, DONE: 3 };
                            return statusOrder[a.status] - statusOrder[b.status];
                        })
        },
        unselectIssues: (state: IssueState) => {
            state.issues = state.issues.map(issue => ({ ...issue, selected: false }))
        },
        selectIssue: (state: IssueState, action: SelectIssuesAction) => {
            state.issues = state.issues.map(issue => {
                if (issue.id === action.payload.selectedId) {
                    return {
                        ...issue,
                        selected: true
                    }
                }

                if (action.payload.isMultiple) {
                    return issue
                }

                return {
                    ...issue,
                    selected: false
                }
            })
        }      
    },
});

export const { 
    saveIssuesList,
    updateSelectedIssues,
    unselectIssues,
    selectIssue
} = issueSlice.actions

export const getIssues = (state: IssueState) => state.issues

export default issueSlice.reducer