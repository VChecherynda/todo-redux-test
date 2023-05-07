import { ListGroup } from 'react-bootstrap';
import { ListItem } from './ListItem';

export function List() {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li">
                <ListItem summary={"Create simple todo list"} status={"IN_PROGRESS"}/>
            </ListGroup.Item>
        </ListGroup>
    )
}