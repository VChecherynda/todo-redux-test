import { Issue, IssueStatus } from "../../../shared/types"

export interface IssueState {
    issues: Issue[]
}

export enum ActionType {
    SAVE_ISSUE_LIST = 'SAVE_ISSUE_LIST',
    UPDATE_ISSUE_LIST = 'UPDATE_ISSUE_LIST',
    SELECT_ISSUE = 'SELECT_ISSUE',
    UNSELECT_ALL_ISSUES = 'UNSELECT_ALL_ISSUES'
}

export interface SaveIssuesAction {
    type: string
    payload: Issue[]
}

export interface UpdateIssuesAction {
    type: string
    payload: IssueStatus
}

export interface SelectIssuesAction {
    type: string
    payload: {
        isMultiple: boolean,
        selectedId: string
    }
}