import Range from './range';

const Monthly = (props) => {
    return (
        <div className="monthly_component"> 
            <input 
                type = 'text'
                value = {props.value}
                onChange = {props.changeMonthly}
            />
            <span>{props.minValue}</span>
                <Range 
                    minValue = {props.minValue}
                    maxValue = {props.maxValue}
                    step = {props.step}
                    onChange = {props.changeMonthly}
                    defaultValue = {props.value}
                />
            <span>{props.maxValue}</span>
        </div>
    )
}

export default Monthly;