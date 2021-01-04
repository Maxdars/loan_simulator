import Range from './range';

const Monthly = (props) => {
    return (
        <div className="field_container">
            <div className="element_container">
                <span className="element_label"> Monthly </span> 
                <span className="element_value"> {props.value} </span>
            </div>
            {/* <input 
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
            <span>{props.maxValue}</span> */}
        </div>
    )
}

export default Monthly;