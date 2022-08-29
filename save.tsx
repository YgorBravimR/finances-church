import { FormContainer, IncomeRegisterContainer, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { Button, Snackbar, Stack } from '@mui/material'
import React from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
// import * as React from 'react'
// import Select from '@mui/material/Select'
// import { InputLabel, MenuItem } from '@mui/material'
// import NumberFormat from 'react-number-format'

interface newIncomeForm {
  selectType: string
  selectModel: string
  transactionDate: string
  personName?: string
  offerValue: number
}
export function IncomeRegister() {
  const { register, handleSubmit, watch, reset } = useForm<newIncomeForm>({
    defaultValues: {
      selectType: 'selecione',
      selectModel: 'selecione',
      personName: '',
      transactionDate: format(new Date(), 'yyyy-MM-dd'),
    },
  })

  function handleSubmitInfo(data: newIncomeForm) {
    console.log(data)
    reset()
  }

  const isTypeDizimo = watch('selectType') === 'dizimo'

  // const filledInputs =
  //   watch('selectType') !== 'selecione' &&
  //   watch('selectModel') !== 'selecione' &&
  //   watch('transactionDate') &&
  //   watch('offerValue')
  // (isTypeDizimo === false ? watch('personName') : null)

  // const isSubmitDisabled = !filledInputs

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <IncomeRegisterContainer>
      <form onSubmit={handleSubmit(handleSubmitInfo)} action="">
        <FormContainer>
          <div>
            <label htmlFor="transactionDate">Data</label>
            <input
              type="date"
              id="transactionDate"
              {...register('transactionDate')}
            />
          </div>
          <div>
            {/* <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              {...register('selectType')}
            >
              <MenuItem value="culto">Ten</MenuItem>
              <MenuItem value="missoes">Twenty</MenuItem>
              <MenuItem value="ebd">Thirty</MenuItem>
            </Select> */}
            <label htmlFor="selectType">Tipo</label>
            <select id="selectType" {...register('selectType')}>
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              <option value="culto">Oferta Culto </option>
              <option value="missoes">Oferta Missões</option>
              <option value="ebd">Oferta EBD</option>
              <option value="dizimo">Dízimo</option>
            </select>
          </div>
          {isTypeDizimo && (
            <div>
              <label htmlFor="personName">Nome</label>
              <input
                type="text"
                id="personName"
                {...register('personName')}
                placeholder="Paulo de Tarso"
              />
            </div>
          )}
          <div>
            <label htmlFor="selectModel">Modelo</label>
            <select id="selectModel" {...register('selectModel')}>
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              <option value="cash">Dinheiro</option>
              <option value="pix">Pix</option>
            </select>
          </div>
          <div>
            <label htmlFor="offerValue">Valor</label>
            <input
              type="number"
              id="offerValue"
              {...register('offerValue')}
              min={0}
              placeholder="R$0,00"
            />
            {/* <NumberFormat
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'R$'}
              id="offerValue"
              {...register('offerValue')}
              min={0}
              step={1}
              placeholder="R$0,00"
            /> */}
          </div>
          {/* <SubmitButton type="submit" disabled={isSubmitDisabled}>
            Enviar
          </SubmitButton> */}
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Button variant="outlined" onClick={handleClick}>
              Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                This is a success message!
              </Alert>
            </Snackbar>
            {/* <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert> */}
          </Stack>
        </FormContainer>
      </form>
    </IncomeRegisterContainer>
  )
}
