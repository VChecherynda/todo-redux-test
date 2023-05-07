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
                issues: action.data.sort((a,b) => {
                    const statusOrder = { IN_PROGRESS: 1, TODO: 2, DONE: 3 };
                    return statusOrder[a.status] - statusOrder[b.status];
                })
            };
        case ActionType.UPDATE_ISSUE_LIST:
            return {
                issues: action.data
            };
        default:
            return state;
    }
}