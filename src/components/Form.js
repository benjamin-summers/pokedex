import React from 'react';

const Form = props => {
    return (
        <div className="form">
            <input onFocus={props.Focus} onChange={props.Change} value={props.poke} />
            <button onClick={props.Click}>Click To Search Poke</button>
        </div>
    )
}

export default Form;