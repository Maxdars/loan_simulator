import Range from './range';

const Interest = (props) => {
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

export default Interest;