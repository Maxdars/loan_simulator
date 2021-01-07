import Range from './range';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Amount = (props) => {
    if (props.open_simulator) {
        return (
            <Container className="field_container w-100">
                <Row>
                    <Col><span className="element_label"> Amount </span></Col>
                    <Col><span className="element_value"> {props.value} </span></Col>
                    {/* <input 
                        type = 'text'
                        value = {props.value}
                        onChange = {props.changeAmount}
                    /> */}
                </Row>
                <Row>
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeAmount}
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
                    <label> Amount </label>
                </Row>
                <Row>
                    { props.fixed_amounts.map((item) =>(
                        <div className='form-check form-check-inline' key={item}>
                             <input 
                                className = "form-check-input"
                                type = "radio" 
                                id = {item}
                                name = "amount" 
                                value = {item}
                                onChange = {props.changeOpenAmount}
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

export default Amount;