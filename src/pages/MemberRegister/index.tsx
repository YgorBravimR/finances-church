import { FormContainer, RegisterContainer, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface newMemberForm {
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
    const newMember: newMemberForm = {
      memberName: data.memberName,
      memberNumber: data.memberNumber,
    }

    setMembers((state) => [...state, newMember])
    console.log(data)
    reset()
  }

  const filledInputs = watch('memberName')
  const isSubmitDisabled = !filledInputs

  console.log(members)
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
    </RegisterContainer>
  )
}
