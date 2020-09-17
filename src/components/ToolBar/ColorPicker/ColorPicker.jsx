import React from 'react'

import { ERASER } from '../../../lib/constants'
import { FlexContainer, StyledColorPicker } from '../styles'


const ColorPicker = ({ selected, handleSelect, selectedTool }) => {
  const handleColorChange = e => {
    const {value} = e.target
    handleSelect(value)
  }

  const disabled = selectedTool === ERASER

  return (
    <FlexContainer>
      <StyledColorPicker
        type="color"
        value={selected}
        onChange={handleColorChange}
        disabled={disabled}
      />
    </FlexContainer>
  )
}

export default ColorPicker
