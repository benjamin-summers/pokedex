import React from 'react';

const Info = ({pokeName, info}) => {
    return (
        <div>
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