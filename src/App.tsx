import { MouseEvent } from "react";
import './styles/App.css'
const App = () =>{
  const handleCircle = (e : MouseEvent<HTMLDivElement>) =>{
    console.log(e);
  }
  return (
    <div className = "App" onClick={handleCircle}>
    </div>
  )
}

export default App
