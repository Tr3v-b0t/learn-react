import React from 'react'

function ChilldComponent({greetHandler}) {
    return (
        <div>
            <button onClick={()=>greetHandler('Child Component')}>Greet Parent</button>
        </div>
    )
}

export default ChilldComponent
