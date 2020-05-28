import React from 'react';


const UserInput = (props) => {
   
    const handleChange = (e) => {
        props.changed(e.target.value);
    }
    return (
        <input
        type="text"
        onChange={handleChange} />
    );
};

export default UserInput;