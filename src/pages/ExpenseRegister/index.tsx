import { FormContainer, RegisterContainer, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'

interface newExpenseForm {
  selectTypeExpense: string
  description: string
  transactionDate: string
  offerValue: number
}

export function ExpenseRegister() {
  const { register, handleSubmit, watch, reset } = useForm<newExpenseForm>({
    defaultValues: {
      selectTypeExpense: 'selecione',
      description: '',
      transactionDate: format(new Date(), 'yyyy-MM-dd'),
    },
  })

  function handleSubmitInfo(data: newExpenseForm) {
    console.log(data)
    reset()
  }

  const filledInputs =
    watch('selectTypeExpense') !== 'selecione' &&
    watch('description') &&
    watch('transactionDate') &&
    watch('offerValue')

  const isSubmitDisabled = !filledInputs

  return (
    <RegisterContainer>
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
            <label htmlFor="selectTypeExpense">Tipo</label>
            <select id="selectTypeExpense" {...register('selectTypeExpense')}>
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              <option value="fixedExp">Despesa Fixa</option>
              <option value="variableExp">Despesa Variável</option>
            </select>
          </div>
          <div>
            <div>
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                id="description"
                {...register('description')}
                placeholder="Digite a descrição aqui"
              />
            </div>
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
          </div>
          <SubmitButton type="submit" disabled={isSubmitDisabled}>
            Enviar
          </SubmitButton>
        </FormContainer>
      </form>
    </RegisterContainer>
  )
}
