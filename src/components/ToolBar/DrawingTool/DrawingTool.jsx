import React from 'react'

import PenIcon from '../../../icons/pen.svg'
import MarkerIcon from '../../../icons/highlighter.svg'
import EraserIcon from '../../../icons/eraser.svg'

import { FlexContainer, Button, StyledImage } from '../styles'
import { ERASER, HIGHLIGHTER, PEN } from '../../../lib/constants'

const Icons = [
  {
    icon: PenIcon, 
    name: PEN,
  },
  {
    icon: MarkerIcon,
    name: HIGHLIGHTER
  },
  {
    icon: EraserIcon,
    name: ERASER
  }
]

const DrawingTool = ({ selected, handleSelect }) => {
  const handleToolSelect = key => () => handleSelect(key)
  return (
    <FlexContainer>
      {Icons.map((item) => (
        <Button
          key={item.name}
          selected={item.name === selected}
          onClick={handleToolSelect(item.name)}
        >
          <StyledImage src={item.icon} alt='icon' />
        </Button>
      ))}
    </FlexContainer>
  )
}

export default DrawingTool
