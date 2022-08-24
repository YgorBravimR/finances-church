import {
  FormContainer,
  MembersListContainer,
  RegisterContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as React from 'react'
import {
  InputLabel,
  FormControl,
  TextField,
  Button,
  InputAdornment,
  OutlinedInput,
  Alert,
  Snackbar,
} from '@mui/material'

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

  const [open, setOpen] = useState<boolean>(false)

  const [members, setMembers] = useState<newMemberForm[]>([])

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  function handleCreateNewMember(data: newMemberForm) {
    const id = String(new Date().getTime())

    const newMember: newMemberForm = {
      memberName: data.memberName,
      memberNumber: data.memberNumber,
      memberId: id,
    }

    setMembers((state) => [...state, newMember])
    setOpen(true)
    reset()
  }

  const filledInputs = watch('memberName')
  const isSubmitDisabled = !filledInputs

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(handleCreateNewMember)} action="">
        <FormContainer>
          <div>
            <InputLabel htmlFor="memberName">Nome</InputLabel>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="memberName"
                {...register('memberName')}
                placeholder="Paulo de Tarso"
              />
            </FormControl>
          </div>
          <InputLabel htmlFor="memberNumber">Número</InputLabel>
          <FormControl fullWidth>
            <OutlinedInput
              id="memberNumber"
              startAdornment={
                <InputAdornment position="start">+55 </InputAdornment>
              }
              {...register('memberNumber')}
              placeholder="(00) 00000-0000"
            />
          </FormControl>
          <Button
            onClick={handleSubmit(handleCreateNewMember)}
            variant="contained"
            disabled={isSubmitDisabled}
          >
            Enviar
          </Button>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Novo membro adicionado com sucesso!
            </Alert>
          </Snackbar>
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
  )
}
