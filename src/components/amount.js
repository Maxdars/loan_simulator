import Range from './range';

const Amount = (props) => {
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

export default Amount;