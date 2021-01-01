import Range from './range';

const Interest = (props) => {
    if (props.open_simulator) {
        return (
            <div className="interest_component"> 
                <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeInterest}
                />
                <span>{ `${props.minValue * 100}%` }</span>
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeInterest}
                        defaultValue = {props.value}
                    />
                <span>{ `${props.maxValue * 100}%` }</span>
            </div>
        )
    }
    else {
        return (
            <div className="interest_component"> 
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