import { FormContainer, ExpenseRegisterContainer, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
interface newExpenseForm {
  description: string
  transactionDate: string
  selectType: string
  expenseValue: number
}

export function ExpenseRegister() {
  const { register, handleSubmit, watch, reset } = useForm<newExpenseForm>({
    defaultValues: {
      description: '',
      selectType: 'selecione',
      transactionDate: format(new Date(), 'yyyy-MM-dd'),
    },
  })

  function handleSubmitInfo(data: newExpenseForm) {
    console.log(data)
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
          <div>
            <label htmlFor="transactionDate">Data</label>
            <input
              type="date"
              id="transactionDate"
              {...register('transactionDate')}
            />
          </div>
          <div>
            <label htmlFor="selectType">Tipo</label>
            <select id="selectType" {...register('selectType')}>
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              <option value="fixedExpense">Fixa</option>
              <option value="variableExpense">Variável</option>
            </select>
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              {...register('description')}
              placeholder="Escreva a descrição da despesa"
            />
          </div>
          <div>
            <label htmlFor="expenseValue">Valor</label>
            <input
              type="number"
              id="expenseValue"
              {...register('expenseValue')}
              min={0}
              placeholder="R$0,00"
            />
          </div>
          <SubmitButton type="submit" disabled={isSubmitDisabled}>
            Enviar
          </SubmitButton>
        </FormContainer>
      </form>
    </ExpenseRegisterContainer>
  )
}
