import { useRef } from "react";
import { Container } from "react-bootstrap";
import { List } from "../components/List";    
import { StatusesForm } from "../widgets";
import { useOutsideHandler } from "./hooks/useOutsideList";

import { useAppDispatch } from '../store/hooks';
import { ActionType } from "../store/types";
import { mockServerDB } from "../store/mock";

export function Page() {
    const containerRef = useRef(null);
    const dispatch = useAppDispatch();

    const unselectIssues = () => {
        dispatch({ type: ActionType.UNSELECT_ALL_ISSUES })
    }

    useOutsideHandler(containerRef, unselectIssues);

    setTimeout(() => {
        dispatch({
            type: ActionType.SAVE_ISSUE_LIST,
            data: mockServerDB.issues
        })
    }, 1000)

    return (
        <Container ref={containerRef}>
            <List />
            <StatusesForm />
        </Container>
    );
}