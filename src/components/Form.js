import React from 'react';

const Form = ({ Focus, Change, Click, poke }) => {
    return (
        <div className="form">
            <input onFocus={Focus} onChange={Change} value={poke} />
            <button onClick={Click}>Search For {poke}</button>
        </div>
    )
}

export default Form;