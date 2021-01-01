import Range from './range';

const Amount = (props) => {
    if (props.open_simulator) {
        return (
            <div className="amount_componenet"> 
                <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeAmount}
                />
                <span>{props.minValue}</span>
                    <Range 
                        minValue = {props.minValue}
                        maxValue = {props.maxValue}
                        step = {props.step}
                        onChange = {props.changeAmount}
                        defaultValue = {props.value}
                    />
                <span>{props.maxValue}</span>
            </div>
        )
    }
    else {
        return (
            <div className="amount_componenet"> 
                { props.fixed_amounts.map((item) =>(
                    <div className='radio-group' key={item}>
                        <input 
                            type = "radio" 
                            id = {item}
                            name = "amount" 
                            value = {item}
                            onChange = {props.changeOpenAmount}
                            checked = {parseInt(props.value) === parseInt(item) ? 'checked' : ''}
                        />
                        <label>{item}</label>
                    </div>
                ))}
            </div>

        ) 
    }
    
}

export default Amount;