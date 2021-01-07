import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecapElement = (props) => {
    return (
        <Row className="recap_row">
            <Col className="recap-col-label"> {props.label} </Col>
            <Col className="recap-col-value"> {props.value} </Col>
        </Row>
    )

}

export default RecapElement;