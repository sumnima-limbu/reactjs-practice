import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// or less ideally
// import { Button} from 'react-bootstrap' ;

const Home = () => {
  return (
    <Container>
      Home Page
      <Alert variant="primary">
        This is a primary alert with
        <Alert.Link href="#"> an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
