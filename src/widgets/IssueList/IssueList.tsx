import { MouseEvent } from 'react';
import { ListGroup } from 'react-bootstrap';
import { IssueItem, getIssues, selectIssue } from '../../entities/issue';
import { useAppDispatch, useAppSelector } from '../../shared/model';

export function IssueList() {
    const issues = useAppSelector(getIssues);
    const dispatch = useAppDispatch();

    const onIssueClick = (event: MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;

        dispatch(selectIssue({
            selectedId: target.id,
            isMultiple: event.ctrlKey
        }))
    }

    if (issues.length === 0) {
        return <div>Loading...</div>
    }
    
    return (
        <ListGroup as="ul">
            {issues.map(issue => (
                <ListGroup.Item key={issue.id} active={issue.selected} as="li">
                    <IssueItem 
                        id={issue.id}
                        summary={issue.summary} 
                        status={issue.status}
                        onClick={onIssueClick}
                    />
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}