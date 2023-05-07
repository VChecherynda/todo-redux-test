import { Stack } from 'react-bootstrap';
import { IssueStatus } from "../../store/types";

interface ListItemProps {
    summary: string,
    status: IssueStatus
}

export function ListItem({ summary, status }: ListItemProps) {
    return (
        <Stack direction="horizontal" gap={3}>
            <div>{summary}</div>
            <div>{status}</div> 
        </Stack>
    );
}