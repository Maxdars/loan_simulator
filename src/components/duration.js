import Range from './range';

const Duration = (props) => {
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

export default Duration;