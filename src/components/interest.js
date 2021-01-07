import Range from './range';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Interest = (props) => {
    if (props.open_simulator) {
        return (
            <Container className="field_container"> 
                <Row>
                    <Col><span className="element_label"> Interest </span></Col>
                    <Col><span className="element_value"> { `${(props.value * 100).toFixed(0)}%` }</span></Col>
                </Row>                     
                                    {/* <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeInterest}
                /> */}
                <Row>
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeInterest}
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
                    <label> Interest </label>
                </Row>  
                <Row>            
                    { props.fixed_interests.map((item) => (
                        <div className='form-check form-check-inline' key={item}>
                            <input 
                                className = "form-check-input"
                                type = "radio" 
                                id = {item}
                                name = "interest" 
                                value = {item}
                                onChange = {props.changeOpenInterest}
                                checked = {parseFloat(props.value) === parseFloat(item) ? 'checked' : ''}
                            />
                            <label className = "form-check-label">{ `${(item * 100).toFixed(0)}%` }</label>
                        </div>
                    ))}
                </Row>  
            </Container>

        ) 
    }
}

export default Interest;