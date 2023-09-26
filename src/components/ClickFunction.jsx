

//---------------- Event Hanlding in Class components-------//

// import React, { Component } from 'react';

// export default class ClickFunction extends Component {

//    HelloFunction() {
//       alert("Hello dear");
//     }

//   render() {
//     return (
//       <div>
//         <input type="button" value="Click" onClick={this.HelloFunction} />
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';

export default class ClickFunction extends Component {


  render() {

    const HelloFunction = (name) => { 
          alert("Hello" + name);
        }

    return (
      <div>
        <input type="button" value="Click" onClick={() => HelloFunction(this.props.name)} />
      </div>
    )
  }
}


//---------------- Event Hanlding in functional components-------//

// import React from 'react'

// function ClickFunction() {

// function HelloFunction() {
//   alert("Hello dear");
// }

//   return (
//     <div>
//       <input type="button" value="Click" onClick={HelloFunction} />
//     </div>
//   )
// }

//export default ClickFunction

//--------------Passing arguments to arrow function-------------//

// import React from 'react'

// function ClickFunction(props) {

//    //its also called binding event handler
//   const HelloFunction = (name) => { 
//     alert("Hello" + name);
//   }

//   return (
//     <div>
//       <input type="button" value="Click" onClick={()=> HelloFunction(props.name)} />
//     </div>
//   )
// }

// export default ClickFunction


