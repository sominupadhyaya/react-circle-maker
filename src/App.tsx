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
    setPoints([...points,{x : pageX, y: pageY}])
  }
  const undoPoints = () =>{
    const newPoints = [...points]
    newPoints.pop()
    setPoints(newPoints)
  }
  return (<>
    <button onClick={undoPoints}>Undo</button>
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
