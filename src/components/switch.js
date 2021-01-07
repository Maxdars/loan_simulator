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
        // <ToggleButton
        //     checked = { props.value }
        //     type = 'checkbox'
        //     id = { props.label }
        //     label = { props.label }
        //     onChange = { props.onChange }
        // >
        //     { props.label } 
        // </ToggleButton>
            
    )
};

export default Switch;