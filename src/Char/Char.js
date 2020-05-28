import React, {useState} from 'react';

const Char = (props) => {
   
   const {click, id} = props;
    
    
    return (
        <li  onClick={() => click(id)} >{props.valueInput}</li>
    );
}

export default Char;