import { useRef } from "react";
import { ListGroup } from 'react-bootstrap';
import { ListItem } from './ListItem';
import { useAppSelector } from '../../store/hooks';

export function List() {
    const issues = useAppSelector(state => state.issues);


    if (issues.length === 0) {
        return <div>Loading...</div>
    }
    
    return (
        <ListGroup as="ul">
            {issues.map(issue => (
                <ListGroup.Item key={issue.id} active={issue.selected} as="li">
                    <ListItem 
                        id={issue.id}
                        summary={issue.summary} 
                        status={issue.status}
                    />
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}