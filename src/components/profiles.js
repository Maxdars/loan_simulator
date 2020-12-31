// import {find as _find} from 'lodash';

const Profiles = (props) => {
    return (
        <div className="profile_component"> 
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