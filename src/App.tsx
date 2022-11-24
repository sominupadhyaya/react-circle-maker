import { useState , MouseEvent } from "react";
import './styles/App.css'

type Point = {
  x : number
  y : number
}
const App = () =>{
  const [points, setPoints] = useState<Point[]>([])
  const [popped, setPopped] = useState<Point[]>([])
  const handleCircle = (e : MouseEvent<HTMLDivElement>) =>{
    
    const {pageX , pageY} = e
    setPoints([...points,{x : pageX, y: pageY}])
  }
  const undoPoints = () =>{
    const newPoints = [...points]
    const poppedPoint = newPoints.pop()
    if(!poppedPoint) return
    setPopped([...popped, poppedPoint])
    setPoints(newPoints)
  }
  const redoPoints = () =>{
    const newPopped = [...popped]
    const newPoints = [...points]
    const poppedPoints = newPopped.pop()
    if(!poppedPoints) return
    newPoints.push(poppedPoints) 
    setPopped(newPopped)
    setPoints(newPoints) 
  }
  return (<>
    <button onClick={undoPoints}>Undo</button>
    <button onClick={redoPoints}>Redo</button>
    <div className = "App" onClick={handleCircle}>
      {
        points.map(point =>{
          return(
            <div>
            <div className="point" style={{
              top : point.y + "px",
              left : point.x + "px"
            }}>
              <div className="circle"></div>
              </div>
            </div>
          )
        })
      }
    </div>
  </>
  )
}

export default App
