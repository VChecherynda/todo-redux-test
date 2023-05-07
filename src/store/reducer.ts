import { AppState, ActionType, Issue } from "./types";

const initialState: AppState = {
    issues: []
};

interface SaveIssuesAction {
    type: ActionType.SAVE_ISSUE_LIST
    data: Issue[]
}
  
interface UpdateIssuesAction {
    type: ActionType.UPDATE_ISSUE_LIST
    data: Issue[]
}

type AppAction = SaveIssuesAction | UpdateIssuesAction;
  
export function reducer(state: AppState = initialState, action: AppAction): AppState {
    switch(action.type) {
        case ActionType.SAVE_ISSUE_LIST:
            return {
                issues: action.data
            };
        case ActionType.UPDATE_ISSUE_LIST:
            return {
                issues: action.data
            };
        default:
            return state;
    }
}