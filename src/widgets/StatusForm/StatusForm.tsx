import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { updateSelectedIssues, IssueStatus } from "../../entities/issue"
import { useAppDispatch, useAppSelector } from "../../shared/model";

export function StatusForm() {
    const [status, setStatus] = useState("TODO");

    const issues = useAppSelector(state => state.issues);
    const dispatch = useAppDispatch();
    
    const onSelectStatus = (event: ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value)
    }

    const updateStatus = () => {
        dispatch(updateSelectedIssues(status as IssueStatus))
    }

    const isIssuesSelected = issues.some(issue => issue.selected === true)

    return (
        isIssuesSelected ? (
            <Form>
                <Form.Select aria-label="Status select" onChange={onSelectStatus}>
                    <option value="TODO">TODO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                </Form.Select>

                <Button variant="primary" onClick={updateStatus}>Update</Button>
            </Form>
        ) : null 
    )
}