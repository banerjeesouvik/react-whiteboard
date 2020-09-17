import React from "react"

import DrawingTool from './DrawingTool'
import BrushSizeSelector from './BrushSizeSelector'
import ColorPicker from './ColorPicker'

import { Header } from './styles'


const ToolBar = ({
  selectedTool,
  handleToolSelect,
  selectedWidth,
  handleWidthSelect,
  selectedColor,
  handleColorSelect
}) => {
  return (
    <Header>
      <DrawingTool
        selected={selectedTool}
        handleSelect={handleToolSelect}
      />
      <BrushSizeSelector
        selected={selectedWidth}
        handleSelect={handleWidthSelect}
        selectedTool={selectedTool}
        selectedColor={selectedColor}
      />
      <ColorPicker
        selected={selectedColor}
        handleSelect={handleColorSelect}
        selectedTool={selectedTool}
      />
    </Header>
  )
}

export default ToolBar
