import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecapElement = (props) => {
    return (
        <Row className="recap_row border-bottom">
            <Col className=""> {props.label} </Col>
            <Col className="d-flex justify-content-end font-weight-bold"> {props.value} </Col>
        </Row>
    )

}

export default RecapElement;