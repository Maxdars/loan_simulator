// import Range from './range';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Monthly = (props) => {
    return (
        <Container className="field_container">
            <Row>
                <Col><span className="element_label"> Monthly </span></Col>
                <Col><span className="element_value"> {props.value} </span></Col>
            </Row>
            <div className="element_container">
                 
                
            </div>
            {/* <input 
                type = 'text'
                value = {props.value}
                onChange = {props.changeMonthly}
            />
            <span>{props.minValue}</span>
                <Range 
                    minValue = {props.minValue}
                    maxValue = {props.maxValue}
                    step = {props.step}
                    onChange = {props.changeMonthly}
                    defaultValue = {props.value}
                />
            <span>{props.maxValue}</span> */}
        </Container>
    )
}

export default Monthly;