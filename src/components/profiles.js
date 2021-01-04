// import {find as _find} from 'lodash';

const Profiles = (props) => {
    return (
        <div className="field_container"> 
            <select
                id = 'profile-select'
                name = 'profile'
                value = {props.value}
                onChange = {props.changeProfile}
            >
             {props.options.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.label}
                </option>
            ))}
            </select>
        </div>
    )
}

export default Profiles;