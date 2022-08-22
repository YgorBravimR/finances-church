import { FormContainer, IncomeRegisterContainer } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { format } from 'date-fns'
import TextField from '@mui/material/TextField/TextField'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import {
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  OutlinedInput,
  Button,
  Snackbar,
  Alert,
} from '@mui/material'
import { useState } from 'react'
import * as React from 'react'
interface newIncomeForm {
  selectType: string
  selectModel: string
  transactionDate: string
  personName?: string
  offerValue: number
}
export function IncomeRegister() {
  const { register, handleSubmit, control, watch, reset } =
    useForm<newIncomeForm>({
      defaultValues: {
        selectType: 'selecione',
        selectModel: 'selecione',
        personName: '',
        transactionDate: format(new Date(), 'yyyy-MM-dd'),
      },
    })

  const [open, setOpen] = useState<boolean>(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  function handleSubmitInfo(data: newIncomeForm) {
    console.log(data)
    setOpen(true)
    reset()
  }

  const isTypeDizimo = watch('selectType') === 'dizimo'

  const filledInputs =
    watch('selectType') !== 'selecione' &&
    watch('selectModel') !== 'selecione' &&
    watch('transactionDate') &&
    watch('offerValue')
  //  && (isTypeDizimo ? watch('personName') : null)

  const isSubmitDisabled = !filledInputs

  return (
    <IncomeRegisterContainer>
      <form action="">
        <FormContainer>
          <InputLabel htmlFor="transactionDate">Data</InputLabel>
          <TextField
            type="date"
            id="transactionDate"
            {...register('transactionDate')}
          />
          <InputLabel htmlFor="selectType">Tipo</InputLabel>
          <Controller
            name="selectType"
            control={control}
            render={({ field: { value } }) => (
              <Select
                labelId="selectType"
                id="selectType"
                {...register('selectType')}
                value={value}
              >
                <MenuItem value="selecione" disabled>
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="culto">Oferta Culto</MenuItem>
                <MenuItem value="missoes">Oferta Missões</MenuItem>
                <MenuItem value="ebd">Oferta EBD</MenuItem>
                <MenuItem value="dizimo">Dízimo</MenuItem>
              </Select>
            )}
          />
          {isTypeDizimo && (
            <div>
              <InputLabel htmlFor="personName">Nome</InputLabel>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  id="personName"
                  {...register('personName')}
                  placeholder="Paulo de Tarso"
                />
              </FormControl>
            </div>
          )}
          <InputLabel htmlFor="selectModel">Modelo</InputLabel>
          <Controller
            name="selectModel"
            control={control}
            render={({ field: { value } }) => (
              <Select
                labelId="selectModel"
                id="selectModel"
                {...register('selectModel')}
                value={value}
              >
                <MenuItem value="selecione" disabled>
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="cash">Dinheiro</MenuItem>
                <MenuItem value="pix">Pix</MenuItem>
              </Select>
            )}
          />
          <InputLabel htmlFor="offerValue">Valor</InputLabel>

          <Controller
            name="offerValue"
            control={control}
            render={({ field: { value } }) => (
              <FormControl fullWidth>
                <OutlinedInput
                  id="offerValue"
                  startAdornment={
                    <InputAdornment position="start">R$</InputAdornment>
                  }
                  {...register('offerValue')}
                  placeholder="00,00"
                />
              </FormControl>
            )}
          />
          <Button
            onClick={handleSubmit(handleSubmitInfo)}
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
              Nova receita adicionada com sucesso!
            </Alert>
          </Snackbar>
        </FormContainer>
      </form>
    </IncomeRegisterContainer>
  )
}
