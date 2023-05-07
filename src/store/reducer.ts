import { AppState, ActionType } from "./types";

const initialState: AppState = {
    issues: []
};

interface SaveIssuesAction {
    type: ActionType.SAVE_ISSUE_LIST;
}
  
interface UpdateIssuesAction {
    type: ActionType.UPDATE_ISSUE_LIST;
}

type AppAction = SaveIssuesAction | UpdateIssuesAction;
  
export function reducer(state: AppState = initialState, action: AppAction): AppState {
    switch(action.type) {
        case ActionType.SAVE_ISSUE_LIST:
            return {
                ...state,
                issues: []
            };
        case ActionType.UPDATE_ISSUE_LIST:
            return {
                ...state,
                issues: []
            };
        default:
            return state;
    }
}