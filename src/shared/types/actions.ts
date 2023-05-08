import { Issue, IssueStatus } from "./issue";

// export enum ActionType {
//     SAVE_ISSUE_LIST = 'SAVE_ISSUE_LIST',
//     UPDATE_ISSUE_LIST = 'UPDATE_ISSUE_LIST',
//     SELECT_ISSUE = 'SELECT_ISSUE',
//     UNSELECT_ALL_ISSUES = 'UNSELECT_ALL_ISSUES'
// }

// export interface SaveIssuesAction {
//     type: ActionType.SAVE_ISSUE_LIST
//     data: Issue[]
// }
  
// export interface UpdateIssuesAction {
//     type: ActionType.UPDATE_ISSUE_LIST
//     data: {
//         status: IssueStatus
//     }
// }

// export interface SelectIssuesAction {
//     type: ActionType.SELECT_ISSUE
//     payload: {
//         isMultiple: boolean,
//         selectedId: string
//     }
// }

// export interface UnselectAllIssuesAction {
//     type: ActionType.UNSELECT_ALL_ISSUES
// }

// export type AppAction = SaveIssuesAction | UpdateIssuesAction | SelectIssuesAction | UnselectAllIssuesAction;