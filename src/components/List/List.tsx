import { ListGroup } from 'react-bootstrap';
import { useAppSelector } from '../../store/hooks';
import { ListItem } from './ListItem';

export function List() {
    const issues = useAppSelector(state => state.issues);

    if (issues.length === 0) {
        return <div>Loading...</div>
    }
    
    return (
        <ListGroup as="ul">
            {issues.map(issue => (
                <ListGroup.Item key={issue.id} as="li">
                    <ListItem summary={issue.summary} status={issue.status}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}