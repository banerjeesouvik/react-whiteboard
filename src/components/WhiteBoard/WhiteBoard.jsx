import React, {useState} from "react"

import ToolBar from '../ToolBar'
import Canvas from '../Canvas'

import { PEN, THIN , BLACK, YELLOW } from '../../lib/constants'

const WhiteBoard = () => {
  const [drawingTool, setDrawingTool] = useState(PEN)
  const [brushWidth, setBrushWidth] = useState(THIN)
  const [penColor, setPenColor] = useState(BLACK)
  const [highlightColor, setHighlightColor] = useState(YELLOW)

  const handleColorChange = color => {
    if (drawingTool === PEN) {
      setPenColor(color)
    } else {
      setHighlightColor(color)
    }
  }

  const selectedColor = drawingTool === PEN ? penColor : highlightColor

  return (
    <div>
      <ToolBar
        selectedTool={drawingTool}
        handleToolSelect={setDrawingTool}
        selectedWidth={brushWidth}
        handleWidthSelect={setBrushWidth}
        selectedColor={selectedColor}
        handleColorSelect={handleColorChange}
      />
      <Canvas
        selectedTool={drawingTool}
        selectedWidth={brushWidth}
        selectedColor={selectedColor}
      />
    </div>
  )
}

export default WhiteBoard
