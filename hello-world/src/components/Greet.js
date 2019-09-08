import React from 'react';

const greet = ({name, children}) => {
    return (
        <div>
        <h1> hello {name}</h1>
        {children}
        </div>
        )
}

export default greet;