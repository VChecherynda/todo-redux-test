import { Button, Form } from "react-bootstrap";

export function StatusesForm() {
    return (
        <Form>
            <Form.Select aria-label="Default select example">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Button variant="primary">Update</Button>
        </Form>
    )
}