import Range from './range';

const Duration = (props) => {
    if (props.open_simulator) {
        return (
            <div className="field_container"> 
                <div className="element_container">
                    <span className="element_label"> Duration </span> 
                    <span className="element_value"> {props.value} </span>
                </div>
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
            </div>
        )
    }
    else {
        return (
            <div className="field_container"> 
                { props.fixed_durations.map((item) => (
                    <div className='radio-group' key={item}>
                        <input 
                            type = "radio" 
                            id = {item}
                            name = "duration" 
                            value = {item}
                            onChange = {props.changeOpenDuration}
                            checked = {parseInt(props.value) === parseInt(item) ? 'checked' : ''}
                        />
                        <label>{item}</label>
                    </div>
                ))}
            </div>

        ) 
    }
}

export default Duration;