import Range from './range';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Interest = (props) => {
    if (props.open_simulator) {
        return (
            <Container className="field_container"> 
                <Row className="d-flex justify-content-center">
                    <Col><span> Interest </span></Col>
                    <Col><span className="d-flex justify-content-end font-weight-bold"> { `${(props.value * 100).toFixed(0)}%` }</span></Col>
                </Row>                     
                <Row>
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeInterest}
                        defaultValue = {props.value}
                        type = 'interest'
                    />
                </Row>
            </Container>
        )
    }
    else {
        return (
            <Container className="field_container"> 
                <Row>
                    <Col><span> Interest </span></Col>
                </Row>  
                <Row className='d-flex justify-content-center'>            
                    { props.fixed_interests.map((item, index) => (
                        <div className={`form-check form-check-inline ${index === 0 ? '' : 'border-left'} pl-2`} key={item}>
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