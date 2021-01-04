const Range = (props) => {
    return (
        <div className="range_container">
            <span className="range_limit">{props.minValue}</span>
            <input  
                type = "range"
                max = {props.maxValue}
                min = {props.minValue}
                step = {props.step}
                onChange = {props.onChange}
                value = {props.defaultValue}
            />
            <span className="range_limit">{props.maxValue}</span>
        </div>
        
    )
}

export default Range;