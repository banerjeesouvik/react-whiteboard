import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { ERASER, HIGHLIGHTER, BASE_ERASER_SIZE, PEN } from '../../lib/constants'

const getProperCursor = (selectedTool) => {
  switch(selectedTool) {
    case PEN:
      return 'url("https://i.ibb.co/7VF7KZN/pencil.png") 16 24, auto'
    case HIGHLIGHTER:
      return 'url("https://i.ibb.co/zmVd8rc/marker.png") 8 16, auto'
    case ERASER:
      return 'url("https://i.ibb.co/JnTDTQd/p-blank.png"), auto'
    default:
      return 'auto'
  }
}

const StyledCanvas = styled.canvas`
  cursor: ${props => getProperCursor(props.selectedTool)};
`

const Canvas = ({ selectedTool, selectedWidth, selectedColor }) => {
  const canvasRef = useRef(null)
  const canvasContext = useRef(null)
  const drawing = useRef(false)
  
  useEffect(() => {
    // Setting the canvas dimension
    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = window.innerHeight - 80 // subtracting height of the header
    
    const context = canvasRef.current.getContext('2d')
    canvasContext.current = context
  }, [])

  const drawLine = (xCoor, yCoor) => {
    const canvas = canvasContext.current
    canvas.globalCompositeOperation = 'source-over'
    canvas.lineTo(xCoor, yCoor)
    canvas.strokeStyle = selectedColor
    canvas.lineWidth = selectedWidth
    canvas.stroke()
  }

  const highlight = (xCoor, yCoor) => {
    const canvas = canvasContext.current
    canvas.globalCompositeOperation = 'multiply'
    canvas.lineTo(xCoor, yCoor)
    canvas.strokeStyle = selectedColor
    canvas.lineWidth = 6
    canvas.stroke()
  }

  const erase = (xCoor, yCoor) => {
    canvasContext.current.clearRect(xCoor, yCoor, BASE_ERASER_SIZE, BASE_ERASER_SIZE)
  }

  const draw = (currentX, currentY) => {
    if (canvasContext.current) {
      if (selectedTool === ERASER) {
        erase(currentX, currentY)
      } else if (selectedTool === HIGHLIGHTER) {
        highlight(currentX, currentY)
      } else { // Pen
        drawLine(currentX, currentY)
      }
    } 
  }
  
  const handleMouseMove = ({nativeEvent}) => {
    const {offsetX, offsetY } = nativeEvent

    if (drawing.current) {
      draw(offsetX, offsetY)
    }
  }

  const handleMouseUp = () => {
    canvasContext.current.closePath()
    drawing.current = false
  }

  const handleMouseDown = ({nativeEvent, button}) => {
    // Ignore mousedown events triggered due to right-click
    if (button === 2) {
      return
    }

    const {offsetX, offsetY} = nativeEvent
    drawing.current = true

    canvasContext.current.beginPath()
    canvasContext.current.moveTo(offsetX, offsetY)
  }
  
  return (
    <StyledCanvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      selectedTool={selectedTool}
    />
  )
}


export default Canvas
