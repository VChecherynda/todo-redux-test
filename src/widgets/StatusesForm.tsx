import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ActionType } from "../store/types";

export function StatusesForm() {
    const [status, setStatus] = useState("TODO");

    const issues = useAppSelector(state => state.issues);
    const dispatch = useAppDispatch();
    
    const onSelectStatus = (event) => {
        setStatus(event.target.value)
    }

    const updateStatus = () => {
        dispatch({
            type: ActionType.UPDATE_ISSUE_LIST,
            data: {
                status
            }
        })
    }

    const isIssuesSelected =issues.some(issue => issue.selected === true)

    return (
        isIssuesSelected ? (
            <Form>
                <Form.Select aria-label="Default select example" onChange={onSelectStatus}>
                    <option value="TODO">TODO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                </Form.Select>

                <Button variant="primary" onClick={updateStatus}>Update</Button>
            </Form>
        ) : null 
    )
}