// import React, { Component } from 'react';

// class Notes extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             theVal : '',
//             myAr   : []
//         };

//         this.additem = this.additem.bind(this);

//         this.add = this.add.bind(this);
//     }
//     additem(event) {
         
//         this.setState( {
//            theVal :  event.target.value
//         })

//         event.preventDefault();
//     }

//     add = () => {
//         this.setState( state => {
//                 const myAr = state.myAr.push(state.theVal);
//                 return {
//                     myAr,
//                     theVal : ''
//                 }
//         })
//         console.log(this.state.myAr);

//     }
    
//     render() {
//         return (
//             <div>
//                 <form>
//                 <input type="text" value = { this.state.theVal }   onChange = { this.additem }/>

//                 <button onClick={ this.add}>ghfhfhf</button>
//                 </form>

//                 {this.state.myAr}
//             </div>
//         );
//     }
// }

// export default Notes;