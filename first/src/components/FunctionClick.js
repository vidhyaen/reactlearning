import React from 'react'

 function FunctionClick() {
   function clickhandler()
    {
        console.log('clickmee');
    }
    return (
        <div>
              <button onClick={clickhandler}>Click me</button>
            </div>
       
    )
}
export default FunctionClick