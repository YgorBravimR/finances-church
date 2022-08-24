import { FormContainer, IncomeRegisterContainer, SubmitButton } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { format } from 'date-fns'
import TextField from '@mui/material/TextField/TextField'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import { FormControl, Select, MenuItem } from '@mui/material'
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

  function handleSubmitInfo(data: newIncomeForm) {
    console.log(data)
    reset()
  }

  // const isTypeDizimo = watch('selectType') === 'dizimo'

  // const filledInputs =
  //   watch('selectType') !== 'selecione' &&
  //   watch('selectModel') !== 'selecione' &&
  //   watch('transactionDate') &&
  //   watch('offerValue')
  // const isSubmitDisabled = !filledInputs

  const createSelectTypeOptions = [
    {
      label: 'Oferta Culto',
      value: 'culto',
    },
    {
      label: 'Oferta Missões',
      value: 'missoes',
    },
    {
      label: 'Oferta EBD',
      value: 'ebd',
    },
    {
      label: 'Dízimo',
      value: 'dizimo',
    },
    {
      label: 'Selecione',
      value: 'selecione',
    },
  ]

  const generateSelectTypeOptions = () => {
    return createSelectTypeOptions.map((option) => {
      return (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <IncomeRegisterContainer>
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
            name={'selectType'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth>
                <Select
                  labelId="selectType"
                  id="selectType"
                  {...register('selectType')}
                >
                  {generateSelectTypeOptions()}
                </Select>
              </FormControl>
            )}
          />
        </FormContainer>
      </form>
    </IncomeRegisterContainer>
  )
}

// <div>
//   <label htmlFor="transactionDate">Data</label>
//   <input
//     type="date"
//     id="transactionDate"
//     {...register('transactionDate')}
//   />
// </div>
// <div>
//   <label htmlFor="selectType">Tipo</label>
//   <select id="selectType" {...register('selectType')}>
//     <option value="selecione" disabled hidden>
//       Selecione
//     </option>
//     <option value="culto">Oferta Culto </option>
//     <option value="missoes">Oferta Missões</option>
//     <option value="ebd">Oferta EBD</option>
//     <option value="dizimo">Dízimo</option>
//   </select>
// </div>
// {isTypeDizimo && (
//   <div>
//     <label htmlFor="personName">Nome</label>
//     <input
//       type="text"
//       id="personName"
//       {...register('personName')}
//       placeholder="Paulo de Tarso"
//     />
//   </div>
// )}
// <div>
//   <label htmlFor="selectModel">Modelo</label>
//   <select id="selectModel" {...register('selectModel')}>
//     <option value="selecione" disabled hidden>
//       Selecione
//     </option>
//     <option value="cash">Dinheiro</option>
//     <option value="pix">Pix</option>
//   </select>
// </div>
// <div>
//   <label htmlFor="offerValue">Valor</label>
//   <input
//     type="number"
//     id="offerValue"
//     {...register('offerValue')}
//     min={0}
//     placeholder="R$0,00"
//   />
// </div>
// <SubmitButton type="submit" disabled={isSubmitDisabled}>
//   Enviar
// </SubmitButton>
