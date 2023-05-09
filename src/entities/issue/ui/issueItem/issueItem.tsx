import { MouseEvent } from 'react';
import { Stack } from 'react-bootstrap';
import { IssueStatus } from "../../../../entities/issue";

interface IssueItemProps {
    id: string
    summary: string
    loading?: boolean
    status?: IssueStatus
    onClick: (event: MouseEvent<HTMLElement>) => void
}

export function IssueItem({ id, summary, loading, status, onClick }: IssueItemProps) {
    return (
        <Stack id={id} direction="horizontal" gap={3} onClick={onClick}>
            {loading ? 'Loading...' : (
                <>
                   {`${summary} ${status}`}
                </>
            )}
        </Stack>
    );
}