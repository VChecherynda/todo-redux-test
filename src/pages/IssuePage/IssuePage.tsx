import { useRef } from "react";
import { Container } from "react-bootstrap";
import { getIssues, saveIssuesList, unselectIssues } from "../../entities/issue"
// import { StatusForm } from "../../widgets/StatusForm";

import { IssueList } from "../../widgets/IssueList";

import { useAppDispatch, useAppSelector } from '../../shared/model';
// import { ActionType } from "../app/store/types";

import { useOutsideHandler } from "../../shared/model";
import { queryIssues } from "../../shared/api";

export function IssuePage() {
    const containerRef = useRef(null);
    const dispatch = useAppDispatch();
    const issues = useAppSelector(getIssues);

    const outsideHandler = () => {
        dispatch(unselectIssues())
    }

    useOutsideHandler({ ref: containerRef, outsideHandler });

    if (issues.length === 0) {
        queryIssues().then(issues => {
            dispatch(saveIssuesList(issues))
        });


        // dispatch({
        //     type: ActionType.SAVE_ISSUE_LIST,
        //     data: mockServerDB.issues
        // })
    }

    return (
        <Container ref={containerRef}>
            <IssueList />
            {/* <StatusForm /> */}
        </Container>
    );
}