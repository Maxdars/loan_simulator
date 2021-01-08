const Switch = (props) => {

    return (
        <div className="switch">
           <input 
                type = "checkbox" 
                checked = { props.value } 
                onChange = { props.onChange }
                data-toggle="toggle"
            />
            <span> { props.label } </span>
        </div>
        
    )
};

export default Switch;