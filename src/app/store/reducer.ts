// import { AppAction } from "shared/types/actions";
// import { AppState } from "./types"


// const initialState: AppState = {
//     issues: []
// };

// export function reducer(state: AppState = initialState, action: AppAction): AppState {
//     switch(action.type) {
//         case ActionType.SAVE_ISSUE_LIST:
//             return {
//                 issues: action.data.sort((a,b) => {
//                     const statusOrder = { IN_PROGRESS: 1, TODO: 2, DONE: 3 };
//                     return statusOrder[a.status] - statusOrder[b.status];
//                 })
//             };
//         case ActionType.UPDATE_ISSUE_LIST:
//             return {
//                 issues: 
//                     state.issues
//                         .map(issue => ({
//                             ...issue,
//                             status: issue.selected ? action.data.status : issue.status
//                         }))
//                         .sort((a,b) => {
//                             const statusOrder = { IN_PROGRESS: 1, TODO: 2, DONE: 3 };
//                             return statusOrder[a.status] - statusOrder[b.status];
//                         })
//                 };
//         case ActionType.UNSELECT_ALL_ISSUES:
//             return {
//                 issues: state.issues.map(issue => ({
//                     ...issue,
//                     selected: false
//                 }))
//             };
//         case ActionType.SELECT_ISSUE:
//             return {
//                 issues: state.issues.map(issue => {
//                     if (issue.id === action.data.selectedId) {
//                         return {
//                             ...issue,
//                             selected: true
//                         }
//                     }

//                     if (action.data.isMultiple) {
//                         return issue
//                     }

//                     return {
//                         ...issue,
//                         selected: false
//                     }
//                 })
//             };
//         default:
//             return state;
//     }
// }