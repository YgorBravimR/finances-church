import { FormContainer, RegisterContainer, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'

interface newIncomeForm {
  selectTipo: string
  selectModel: string
  transactionDate: Date
  personName?: string
  offerValue: number
}

export function Register() {
  const { register, handleSubmit, watch, reset } = useForm<newIncomeForm>({
    defaultValues: {
      selectTipo: 'selecione',
      selectModel: 'selecione',
      personName: '',
    },
  })

  function handleSubmitInfo(data: newIncomeForm) {
    console.log(data)
    reset()
  }

  const filledInputs =
    watch('selectTipo') !== 'selecione' &&
    watch('selectModel') !== 'selecione' &&
    watch('transactionDate') &&
    watch('personName') &&
    watch('offerValue')

  const isSubmitDisabled = !filledInputs

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(handleSubmitInfo)} action="">
        <FormContainer>
          <div>
            <label htmlFor="selectTipo">Tipo</label>
            <select id="selectTipo" {...register('selectTipo')}>
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              <option value="culto">OFERTAAAAAAAAAAAAAAAAAAAAAAAA </option>
              <option value="missoes">Oferta Missões</option>
              <option value="ebd">Oferta EBD</option>
              <option value="dizimo">Dízimo</option>
            </select>
          </div>

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
            <label htmlFor="transactionDate">Data</label>
            <input
              type="date"
              id="transactionDate"
              {...register('transactionDate')}
            />
          </div>

          <div>
            <label htmlFor="personName">Nome</label>
            <input
              type="text"
              id="personName"
              {...register('personName')}
              placeholder="Digite seu nome aqui"
            />
          </div>

          <div>
            <label htmlFor="offerValue">Valor</label>
            <input
              type="number"
              id="offerValue"
              {...register('offerValue')}
              min={0}
              step={1}
              placeholder="R$0"
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
