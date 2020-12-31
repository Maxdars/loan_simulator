const Switch = (props) => {

    return (
        <div className="switch">
           <input 
                type = "checkbox" 
                checked = { props.value } 
                onChange = { props.onChange }
            />
        </div>
    )
};

export default Switch;