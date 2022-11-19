import { useState , MouseEvent } from "react";
import './styles/App.css'

type Point = {
  x : number
  y : number
}
const App = () =>{
  const [points, setPoints] = useState<Point[]>([])
  const handleCircle = (e : MouseEvent<HTMLDivElement>) =>{

    const {pageX , pageY} = e
    console.log(pageX , pageY);
  }
  return (
    <div className = "App" onClick={handleCircle}>
    </div>
  )
}

export default App
