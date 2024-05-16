import { useState } from "react";
import Myproduct from "./components/Myproduct";

const App =()=> {
  
  const [num , setNump] = useState(0)

  const plus = () =>{
    setNump(num+1)
  }

  const m = () =>{
    if(num > 0){
      setNump(num-1)
    }
  }

  const reset = () =>{
    setNump(0)
  }
  return (

    <div>
      <h1>Counter is here</h1>
      <Myproduct Plus={plus}  M={m}  Reset={reset} Num={num}/>
    </div>
  );
}



export default App;
