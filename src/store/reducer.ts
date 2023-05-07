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

interface SelectIssuesAction {
    type: ActionType.SELECT_ISSUE
    data: {
        isMultiple: boolean,
        selectedId: string
    }
}

interface UnselectAllIssuesAction {
    type: ActionType.UNSELECT_ALL_ISSUES
}

type AppAction = SaveIssuesAction | UpdateIssuesAction | SelectIssuesAction | UnselectAllIssuesAction;

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
        case ActionType.UNSELECT_ALL_ISSUES: {
            return {
                issues: state.issues.map(issue => ({
                    ...issue,
                    selected: false
                }))
            };
        }
        case ActionType.SELECT_ISSUE:
            return {
                issues: state.issues.map(issue => {
                    if (issue.id === action.data.selectedId) {
                        return {
                            ...issue,
                            selected: true
                        }
                    }

                    if (action.data.isMultiple) {
                        return issue
                    }

                    return {
                        ...issue,
                        selected: false
                    }
                })
            };
        default:
            return state;
    }
}