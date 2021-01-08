import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Range = (props) => {
    return (
        <Container className="range_container">
            <Row>
                <Col><span className="range_limit d-flex justify-content-end font-weight-light small">{ props.type === 'interest' ? `${(props.minValue * 100).toFixed(0)}%` : props.minValue }</span></Col>
                <Col className="d-flex col-8">
                    <input  
                        type = "range"
                        max = {props.maxValue}
                        min = {props.minValue}
                        step = {props.step}
                        onChange = {props.onChange}
                        value = {props.defaultValue}
                        className = 'd-flex-fill w-100'
                    />
                </Col>
                <Col> <span className="range_limit font-weight-light small">{ props.type === 'interest' ? `${(props.maxValue * 100).toFixed(0)}%` : props.maxValue }</span></Col>
               
            </Row>
        </Container>
        
    )
}

export default Range;