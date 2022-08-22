import styled from 'styled-components'

export const MemberRegisterContainer = styled.div``

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

export const MembersListContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['adnv-gray-1-ts']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  table {
    width: 90%;
  }
  h1 {
    padding: 0.5rem 0rem;
    font-family: 'Poppins', sans-serif;
  }
  th {
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  }
  tr {
    display: grid;
    grid-template-columns: 3fr 1fr;
    line-height: 1.6rem;
    td {
      color: ${(props) => props.theme['gray-900']};
      font-weight: 700;
    }
  }
`
