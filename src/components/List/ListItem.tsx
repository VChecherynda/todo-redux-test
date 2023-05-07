import { Stack } from 'react-bootstrap';
import { ActionType, IssueStatus } from "../../store/types";
import { useAppDispatch } from '../../store/hooks';

interface ListItemProps {
    id: string
    summary: string
    status: IssueStatus
}

export function ListItem({ id, summary, status }: ListItemProps) {
    const dispatch = useAppDispatch();

    const onItemClick = (event) => {
        dispatch({
            type: ActionType.SELECT_ISSUE,
            data: {
                selectedId: id,
                isMultiple: event.ctrlKey
            }
        })
    }

    return (
        <Stack id={id} direction="horizontal" gap={3} onClick={onItemClick}>
            <div>{summary}</div>
            <div>{status}</div> 
        </Stack>
    );
}