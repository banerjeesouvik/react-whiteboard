import React from 'react'

import { THIN, MEDIUM, THICK, PEN } from '../../../lib/constants'
import { Button, Point, FlexContainer } from '../styles'

const BrushSizeSelector = ({ selected, handleSelect, selectedTool, selectedColor }) => {
  const penSelected = selectedTool === PEN
  const handleWidthSelect = key => () => {
    if (penSelected) handleSelect(key)
  }

  return (
    <FlexContainer>
      {[THIN, MEDIUM, THICK].map(width => (
        <Button
          key={`brush-${width}`}
          selected={penSelected && width === selected}
          onClick={handleWidthSelect(width)}
          disabled={!penSelected}
          title={`${width}px`}
        >
          <Point width={width} disabled={!penSelected} selectedColor={selectedColor} />
        </Button>
      ))}
    </FlexContainer>
  )
}

export default BrushSizeSelector
