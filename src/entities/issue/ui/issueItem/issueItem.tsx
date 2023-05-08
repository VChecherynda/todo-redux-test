import { Stack } from 'react-bootstrap';
import { IssueStatus } from "../../../../shared/types";

interface IssueItemProps {
    id: string
    summary: string
    status: IssueStatus
    onClick: () => void
}

export function IssueItem({ id, summary, status, onClick }: IssueItemProps) {
    return (
        <Stack id={id} direction="horizontal" gap={3} onClick={onClick}>
            <div>{summary}</div>
            <div>{status}</div> 
        </Stack>
    );
}