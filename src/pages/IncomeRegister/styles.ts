// import { defineConfig } from 'vite'
import styled from 'styled-components'

export const IncomeRegisterContainer = styled.main`
  display: grid;
  grid-template-columns: 3fr 4fr;
  column-gap: 5rem;

  .deleteButton {
    color: ${(props) => props.theme['red-700']};

    &:hover {
      background-color: #00000012;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: bold;
    font-size: 1.4rem;
    color: ${(props) => props.theme['green-700']};
  }

  input,
  .inputSelect {
    color: ${(props) => props.theme['gray-900']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    padding: 0.75rem;
  }

  .saveButton {
    background-color: ${(props) => props.theme['blue-300']};
  }

  .submitButton {
    background-color: ${(props) => props.theme['adnv-green-2']};
  }
`

export const IncomesTableContainer = styled.div``

export const IncomesTabelTotalContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['blue-500']};
  margin-top: 1rem;
  max-width: 68.21%;
  min-width: 24rem;
`
