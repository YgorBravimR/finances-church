<<<<<<< Updated upstream
import { MemberRegisterContainer } from './styles'

export function MemberRegister() {
  return (
    <MemberRegisterContainer>
      <h1>MemberRegister</h1>
    </MemberRegisterContainer>
=======
import {
  FormContainer,
  MembersListContainer,
  RegisterContainer,
  SubmitButton,
} from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface newMemberForm {
  memberId: string
  memberName: string
  memberNumber?: number
}

export function MemberRegister() {
  const { register, handleSubmit, watch, reset } = useForm<newMemberForm>({
    defaultValues: {
      memberName: '',
    },
  })

  const [members, setMembers] = useState<newMemberForm[]>([])

  function handleCreateNewMember(data: newMemberForm) {
    const id = String(new Date().getTime())

    const newMember: newMemberForm = {
      memberName: data.memberName,
      memberNumber: data.memberNumber,
      memberId: id,
    }

    setMembers((state) => [...state, newMember])
    reset()
    // members.sort((a, b) => {
    //   if (a.memberName > b.memberName) {
    //     return 1
    //   }
    //   if (a.memberName < b.memberName) {
    //     return -1
    //   }
    //   return 0
    // })
  }

  const filledInputs = watch('memberName')
  const isSubmitDisabled = !filledInputs

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(handleCreateNewMember)} action="">
        <FormContainer>
          <div>
            <label htmlFor="personName">Nome</label>
            <input
              type="text"
              id="memberName"
              {...register('memberName')}
              placeholder="Digite o nome"
            />
          </div>
          <div>
            <label htmlFor="memberNumber">Número</label>
            <input
              type="number"
              id="memberNumber"
              placeholder="(00) 00000-0000"
              {...register('memberNumber')}
            />
          </div>
          <SubmitButton type="submit" disabled={isSubmitDisabled}>
            Enviar
          </SubmitButton>
        </FormContainer>
      </form>
      <MembersListContainer>
        <h1>Lista de membros</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Número</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => {
              return (
                <tr key={member.memberId}>
                  <td>{member.memberName}</td>
                  <td>{member.memberNumber}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </MembersListContainer>
    </RegisterContainer>
>>>>>>> Stashed changes
  )
}
