import React from 'react';

const Validation = (props) => {
    
    return (
        <div>
            <h1>Validation</h1>
            { props.valueInputLength < 5 ?
                <h3>Text too short</h3> : <h3>Text too long</h3>
            }
        </div>
    );
}

export default Validation;