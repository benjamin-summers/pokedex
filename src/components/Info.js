import React from 'react';

const imgStyles = {
    height: 25 + 'px',
    width: 25 + 'px'
}

const Info = ({pokeName, info, Class}) => {
    return (
        <div className={Class}>
            <div>
                <p>{pokeName}</p>
            </div>
            <div>
                <img style={imgStyles} src="https://i.imgur.com/jztFqA0.jpg" alt="pokeball" />
            </div>
            <div>
                {info}
            </div>
        </div>
    )
}

export default Info;