import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Monthly = (props) => {
    return (
        <Container className="field_container">
            <Row className="d-flex justify-content-center border shadow-sm m-2">
                <Col><span className="d-flex justify-content-center m-2"> Monthly payment </span></Col>
                <Col><span className="d-flex justify-content-center font-weight-bold m-2"> {props.value} </span></Col>
            </Row>
        </Container>
    )
}

export default Monthly;