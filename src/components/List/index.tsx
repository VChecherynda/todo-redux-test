import { ListGroup, Stack } from 'react-bootstrap'

export function List() {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li">
            <Stack direction="horizontal" gap={3}>
                <div>Create simple todo list</div>
                <div>IN_PROGRESS</div>
            </Stack>
            </ListGroup.Item>
            <ListGroup.Item as="li">
            <Stack direction="horizontal" gap={3}>
                <div>Fix the bathroom door lock</div>
                <div>DONE</div> 
            </Stack>
            </ListGroup.Item>
        </ListGroup>
    )
}