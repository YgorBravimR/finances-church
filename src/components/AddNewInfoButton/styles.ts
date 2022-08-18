import styled from 'styled-components'

export const SubmitButton = styled.button`
  margin-top: 1rem;
  background: ${(props) => props.theme['blue-300']};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  width: 100%;

  &:disabled {
    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['gray-500']};
  }
`
