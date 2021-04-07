import React from 'react'
import Person from './Person'

function List() {
    // const names= ['vichu','unni','malu']
    // // keeping return simple use by moving out list rendering logic 
    // const nameList= names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>{nameList}</div>
    //     // <div>
    //     //     {
    //     //     // names.map(name => <h2>{name}</h2>)

    //     //     }
    //     // </div>
    const persons=[
        {
            id:1,
            name:'vidhu',
            age:21,
            skill:'Vue js',
        },
        {
            id:2,
            name:'Prane',
            age:21,
            skill:'React js',
        },
    ]
    const PersonList= persons.map(person => 
    <Person key={person.id} person={person}/>
 )
    return (
          <div>{PersonList}</div>
    )
}

export default List