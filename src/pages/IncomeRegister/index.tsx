import { FormContainer, IncomeRegisterContainer, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
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

  const filledInputs =
    watch('selectType') !== 'selecione' &&
    watch('selectModel') !== 'selecione' &&
    watch('transactionDate') &&
    watch('offerValue')
  // (isTypeDizimo === false ? watch('personName') : null)

  const isSubmitDisabled = !filledInputs

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
          <SubmitButton type="submit" disabled={isSubmitDisabled}>
            Enviar
          </SubmitButton>
        </FormContainer>
      </form>
    </IncomeRegisterContainer>
  )
}
