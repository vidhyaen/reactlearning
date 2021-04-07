import React from 'react'

function Child(props) {
    return (
        <div>
            {/* //Access method as props object */}
           {/* button onClick={props.greetHandler}>greetParent</button> */}
        {/* //pass para calling from parent to click use arrow function */}
            <button onClick={() => props.greetHandler('child')}>greetParent</button>
        </div>
    )
}

export default Child
