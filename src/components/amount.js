import Range from './range';

const Amount = (props) => {
    if (props.open_simulator) {
        return (
            <div className="field_container"> 
                <div className="element_container">
                    <span className="element_label"> Amount </span> 
                    <span className="element_value"> {props.value} </span>
                </div>
                
                {/* <input 
                    type = 'text'
                    value = {props.value}
                    onChange = {props.changeAmount}
                /> */}
                <Range 
                    minValue = {props.minValue}
                    maxValue = {props.maxValue}
                    step = {props.step}
                    onChange = {props.changeAmount}
                    defaultValue = {props.value}
                />
            </div>
        )
    }
    else {
        return (
            <div className="field_container"> 
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