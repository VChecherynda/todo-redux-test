import { Container } from "react-bootstrap";
import { List } from "../components/List";    
import { StatusesForm } from "../widgets";

import { useAppDispatch } from '../store/hooks';
import { ActionType } from "../store/types";
import { mockServerDB } from "../store/mock";

export function Page() {
    const dispatch = useAppDispatch();

    setTimeout(() => {
        dispatch({
            type: ActionType.SAVE_ISSUE_LIST,
            data: mockServerDB.issues
        })
    }, 1000)

    return (
        <Container>
            <List />
            <StatusesForm />
        </Container>
    );
}