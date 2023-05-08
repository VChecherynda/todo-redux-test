import { MouseEvent } from 'react';
import { Stack } from 'react-bootstrap';
import { IssueStatus } from "../../../../entities/issue";

interface IssueItemProps {
    id: string
    summary: string
    status: IssueStatus
    onClick: (event: MouseEvent<HTMLElement>) => void
}

export function IssueItem({ id, summary, status, onClick }: IssueItemProps) {
    return (
        <Stack id={id} direction="horizontal" gap={3} onClick={onClick}>
            <div>{summary}</div>
            <div>{status}</div> 
        </Stack>
    );
}