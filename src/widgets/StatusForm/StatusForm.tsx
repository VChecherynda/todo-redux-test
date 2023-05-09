import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { startUpdateIssues, updateSelectedIssues, IssueStatus, Issue } from "../../entities/issue"
import { useAppDispatch, useAppSelector } from "../../shared/model";

const STATUSES = ["TODO", "IN_PROGRESS", "DONE"];

export function StatusForm() {
    const [status, setStatus] = useState(STATUSES[0]);

    const issues = useAppSelector(state => state.issues);
    const dispatch = useAppDispatch();
    
    const onSelectStatus = (event: ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value)
    }

    const updateStatus = () => {
        dispatch(startUpdateIssues());
        setTimeout(() => dispatch(updateSelectedIssues(status as IssueStatus)), 1000)
    }

    const isIssuesSelected = issues.some((issue: Issue) => issue.selected === true)

    return (
        isIssuesSelected ? (
            <Form>
                <Form.Select aria-label="Status select" onChange={onSelectStatus}>
                    {STATUSES.map((status: string) => <option key={status} value={status}>{status}</option>)}
                </Form.Select>

                <Button variant="primary" onClick={updateStatus}>Update</Button>
            </Form>
        ) : null 
    )
}