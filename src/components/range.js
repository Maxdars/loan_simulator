const Range = (props) => {
    return (
        <input 
            type = "range"
            max = {props.maxValue}
            min = {props.minValue}
            step = {props.step}
            onChange = {props.onChange}
            value = {props.defaultValue}
        />
    )
}

export default Range;