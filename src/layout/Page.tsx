import { Container } from "react-bootstrap";
import { List } from "../components/List";    

export function Page() {
    return (
        <Container>
            <div>
                Header
            </div>
            <List />
            <div>
                Footer
            </div>
        </Container>
      );
}