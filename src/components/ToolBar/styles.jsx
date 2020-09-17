import styled from 'styled-components'

export const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  margin-right: 0.5rem;
  background-color: ${props => props.selected ? '#cbcbcb' : '#fafafa'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover:not(:disabled) {
    background-color: #cbcbcb;
  }

  :disabled {
    cursor: not-allowed;
  }
`

export const Point = styled.div`
  width: ${({width}) => width * 3}px;
  height: ${({width}) => width * 3}px;
  border-radius: 50%;
  background-color: ${({disabled, selectedColor}) => disabled ? '#cfcfcf' : selectedColor};
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center; 
  margin-right: 8rem;
`

export const Header = styled.header`
  height: 5rem;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  background-color: #282c34;
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`

export const StyledColorPicker = styled.input`
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  cursor: pointer;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
