import Range from './range';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Duration = (props) => {
    if (props.open_simulator) {
        return (
            <Container className="field_container"> 
                <Row>
                    <Col><span className="element_label"> Duration </span> </Col>
                    <Col><span className="element_value"> {props.value} </span></Col>
                </Row>
                <Row>
                {/* <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeDuration}
                /> */}
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeDuration}
                        defaultValue = {props.value}
                    />
                </Row>
            </Container>
        )
    }
    else {
        return (
            <Container className="field_container"> 
                <Row>
                    <label> Duration </label>
                </Row>  
                <Row>          
                    { props.fixed_durations.map((item) => (
                        <div className='form-check form-check-inline' key={item}>
                            <input 
                                className = "form-check-input"
                                type = "radio" 
                                id = {item}
                                name = "duration" 
                                value = {item}
                                onChange = {props.changeOpenDuration}
                                checked = {parseInt(props.value) === parseInt(item) ? 'checked' : ''}
                            />
                            <label className = "form-check-label">{item}</label>
                        </div>
                    ))}
                </Row>    
            </Container>

        ) 
    }
}

export default Duration;