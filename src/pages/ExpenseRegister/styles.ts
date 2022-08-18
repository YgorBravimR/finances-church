import styled from 'styled-components'

<<<<<<< Updated upstream
export const ExpenseRegisterContainer = styled.div``
=======
export const RegisterContainer = styled.main``

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  select {
    width: 100%;
    border-radius: 3px;
    border: none;
    padding: 0.4rem;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const SubmitButton = styled.button`
  margin-top: 1rem;
  background: ${(props) => props.theme['blue-300']};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  width: 100%;
  font-weight: bold;

  &:disabled {
    background-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['gray-500']};
  }
`
>>>>>>> Stashed changes
