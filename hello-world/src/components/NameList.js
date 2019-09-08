import React from 'react'

function NameList() {
    const names = ['bon', 'vic', 'bundi', 'nyabuya', 'bonvic', 'trev']
    const persons = [
        {
            name: 'bon',
            age: 21,
            language: 'Javascript'
        },
        {
            name: 'vic',
            age: 20,
            language: 'Python'
        },
        {
            name: 'trev',
            age: 19,
            language: 'C'
        }
    ];
    const nameList = persons.map(person => <h1>I'm {person.name}, {person.age} and I code using {person.language} language</h1>)
    return (
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        //     <h2>{names[3]}</h2>
        //     <h2>{names[4]}</h2>
        //     <h2>{names[5]}</h2>
        // </div>
        // <div>
        // {
        //     names.map(name => <h2>{name}</h2>)
        // }
        // </div>
        <div>{nameList}</div>
    )
}

export default NameList
