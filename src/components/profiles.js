import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Profiles = (props) => {
    return (
        <Container className="field_container mt-2">
            <Row>
                <Col><span> Profile </span></Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <select
                        className = "form-control-sm w-75"
                        id = 'profile-select'
                        name = 'profile'
                        value = {props.value}
                        onChange = {props.changeProfile}
                    >
                        {props.options.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </Col>
            </Row> 
            
        </Container>
    )
}

export default Profiles;