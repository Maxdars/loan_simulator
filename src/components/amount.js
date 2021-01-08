import Range from './range';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Amount = (props) => {
    if (props.open_simulator) {
        return (
            <Container className="field_container mt-2">
                <Row className="d-flex justify-content-center">
                    <Col><span> Amount </span></Col>
                    <Col><span className="d-flex justify-content-end font-weight-bold"> {props.value} </span></Col>
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
            <Container className="field_container mt-2"> 
                <Row>
                    <Col><span> Amount </span></Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    { props.fixed_amounts.map((item, index) =>(
                        <div className={`form-check form-check-inline ${index === 0 ? '' : 'border-left'} pl-2`} key={item}>
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