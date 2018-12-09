import React from 'react';

const Info = ({pokeName, info, Class}) => {
    return (
        <div className={Class}>
            <div>
                <p>{pokeName}</p>
            </div>
            <div>
                {info}
            </div>
        </div>
    )
}

export default Info;