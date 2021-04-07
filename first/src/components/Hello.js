import React from 'react';

//jsx format
const Hello =props =>{

    return(
    
    <div className="dummyClass">
{/* props value */}
<h1>Hello  {props.name} 
</h1>
{props.children}
         </div>
       
     )

    // //without using jsx
    // return React.createElement(
    //     'div',{id :'hello',className:'dummyClass'},
    //     React.createElement('h1',null,'hello vidhu')
    //     )
}
 export default Hello;