import React from 'react'

const Hello = () => {
    // return (
    //     <div className='hello'>
    //         <h1>here is a jsx exmple</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Here is a jsx example'))
}

export default Hello
