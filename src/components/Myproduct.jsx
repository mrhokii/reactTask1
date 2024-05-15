// const Myproduct = (props) =>{
//     return(
//         <div>
//             <h1>{props.Name}</h1>
//             <p> price :{props.price}</p>
//             <p> color :{props.color || "blue"}</p>
//         </div>
//     )
// }

// Myproduct.defaultProps= {
//     Name: "red"
// };
// import { Component } from "react"
// class Mysite extends Component{
//     static defaultProps={
//         Name : "گل 55"
//     }
//     render(){
//         const {Name , price , color} = this.props
//         return(
            
//             <div>
//                 <h1>{Name}</h1>
//                 <p> price :{price}</p>
//                 <p> color :{color || "blue"}</p>
//             </div>
//         )
//     }
// }





// const Myproduct = (props) =>{
//     return(
//         <div>
//             <div style={{border : "10px solid red" , width:"200px" , height : "200px" , borderTopRightRadius : "8px" , borderBottomRightRadius : "8px" , display : "flex" , flexDirection :"column" , alignItems :"center" , background :"black" , color : "white" , margin : "260px auto"}}>
//                 <p> دوره اموزش : {props.Name}</p>
//                 <p> طول دوره : {props.time}</p>
//                 <p>امکان ثبت نام : {props.signup}</p>
//                 <p> هزینه : {props.price}</p>
//             </div>
//         </div>
//     )
// }



// import { Component } from "react"
// class Mysite extends Component{
//    state ={
//     name:"ali",
//     age : 14
//    }
//    changename = ()=>{
//     this.setState({name : "akbar"})
//    }
//     render(){
//         return(
        
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.age}</h1>
//                 <button onClick={this.changename}>click here</button>
                
//             </div>
//         )
//     }
// }


import { useState } from "react"

const Mysite = () =>{

    // const [name , setName] = useState("ali")
    const [num , setnump] = useState(0)
    // const [favColor , setColor] = useState("red")

    function chengp(){
            setnump(num+1)
    }
    
    function chengm(){
        if(num == 0){
        }else{
            
        setnump(num-1)
        }
}
    function reset(){
            setnump(0)
        
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={chengp}>+</button>
            <button onClick={chengm}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Mysite