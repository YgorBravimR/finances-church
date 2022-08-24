import { FormContainer, ExpenseRegisterContainer } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { format } from 'date-fns'
import * as React from 'react'
import {
  Alert,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  TextField,
} from '@mui/material'
interface newExpenseForm {
  description: string
  transactionDate: string
  selectType: string
  expenseValue: number
}

export function ExpenseRegister() {
  const { register, handleSubmit, watch, reset, control } =
    useForm<newExpenseForm>({
      defaultValues: {
        description: '',
        selectType: 'selecione',
        transactionDate: format(new Date(), 'yyyy-MM-dd'),
      },
    })

  const [open, setOpen] = React.useState<boolean>(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  function handleSubmitInfo(data: newExpenseForm) {
    console.log(data)
    setOpen(true)
    reset()
  }

  const filledInputs =
    watch('selectType') !== 'selecione' &&
    watch('description') &&
    watch('transactionDate') &&
    watch('expenseValue')

  const isSubmitDisabled = !filledInputs

  return (
    <ExpenseRegisterContainer>
      <form onSubmit={handleSubmit(handleSubmitInfo)} action="">
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
                <MenuItem value="fixedExpense">Fixa</MenuItem>
                <MenuItem value="variableExpense">Variável</MenuItem>
              </Select>
            )}
          />
          <div>
            <InputLabel htmlFor="description">Descrição</InputLabel>
            <FormControl fullWidth>
              <TextField
                type="text"
                id="description"
                {...register('description')}
                placeholder="Escreva a descrição"
                multiline
                maxRows={4}
              />
            </FormControl>
          </div>
          <InputLabel htmlFor="expenseValue">Valor</InputLabel>
          <FormControl fullWidth>
            <OutlinedInput
              id="expenseValue"
              startAdornment={
                <InputAdornment position="start">R$</InputAdornment>
              }
              {...register('expenseValue')}
              placeholder="00,00"
            />
          </FormControl>
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
              Nova despesa adicionada com sucesso!
            </Alert>
          </Snackbar>
        </FormContainer>
      </form>
    </ExpenseRegisterContainer>
  )
}
