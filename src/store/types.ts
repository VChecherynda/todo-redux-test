export type IssueStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Issue = {
    id: string;
    selected: boolean;
    summary: string;
    status: IssueStatus;
};

export interface AppState {    
    issues: Issue[];
}

export enum ActionType {
    SAVE_ISSUE_LIST = 'SAVE_ISSUE_LIST',
    UPDATE_ISSUE_LIST = 'UPDATE_ISSUE_LIST',
    SELECT_ISSUE = 'SELECT_ISSUE',
    UNSELECT_ALL_ISSUES = 'UNSELECT_ALL_ISSUES'
}