import Range from './range';

const Duration = (props) => {
    if (props.open_simulator) {
        return (
            <div className="duration_componenet"> 
                <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeDuration}
                />
                <span>{props.minValue}</span>
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeDuration}
                        defaultValue = {props.value}
                    />
                <span>{props.maxValue}</span>
            </div>
        )
    }
    else {
        return (
            <div className="duration_component"> 
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