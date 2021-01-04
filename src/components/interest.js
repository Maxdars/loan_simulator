import Range from './range';

const Interest = (props) => {
    if (props.open_simulator) {
        return (
            <div className="field_container"> 
                <div className="element_container">
                    <span className="element_label"> Interest </span> 
                    <span className="element_value"> { `${(props.value * 100).toFixed(0)}%` }</span>
                </div>
                {/* <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeInterest}
                /> */}
                <Range 
                    minValue = {props.minValue}
                    maxValue = {props.maxValue}
                    step = {props.step}
                    onChange = {props.changeInterest}
                    defaultValue = {props.value}
                />
            </div>
        )
    }
    else {
        return (
            <div className="field_container"> 
                { props.fixed_interests.map((item) => (
                    <div className='radio-group' key={item}>
                        <input 
                            type = "radio" 
                            id = {item}
                            name = "interest" 
                            value = {item}
                            onChange = {props.changeOpenInterest}
                            checked = {parseFloat(props.value) === parseFloat(item) ? 'checked' : ''}
                        />
                        <label>{ `${(item * 100).toFixed(0)}%` }</label>
                    </div>
                ))}
            </div>

        ) 
    }
}

export default Interest;