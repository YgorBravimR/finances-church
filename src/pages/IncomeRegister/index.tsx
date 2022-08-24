import {
  ButtonContainer,
  FormContainer,
  IncomeRegisterContainer,
  IncomesTabelTotalContainer,
  IncomesTableContainer,
} from './styles'
import { Controller, useForm } from 'react-hook-form'
import { format } from 'date-fns'
import TextField from '@mui/material/TextField/TextField'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  Autocomplete,
} from '@mui/material'
import { useState } from 'react'
import * as React from 'react'
import Grid from '@mui/material/Grid'
import { Trash } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
interface newIncomeForm {
  selectType: string
  selectModel: string
  transactionDate: string
  personName?: string
  offerValue: number
  incomeId: string
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

  const [openSave, setOpenSave] = useState<boolean>(false)
  const [openSubmit, setOpenSubmit] = useState<boolean>(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSave(false)
    setOpenSubmit(false)
  }

  const [incomes, setIncomes] = useState<newIncomeForm[]>([])

  function handleDeleteIncome(incomeId: string) {
    setIncomes(incomes.filter((incomes) => incomes.incomeId !== incomeId))
  }

  function handleCreateNewIncome(data: newIncomeForm) {
    const id = String(new Date().getTime())

    const newIncome = {
      incomeId: id,
      selectType: data.selectType,
      selectModel: data.selectModel,
      transactionDate: data.transactionDate,
      personName: data.personName,
      offerValue: data.offerValue,
    }

    setIncomes((state) => [...state, newIncome])
    setOpenSave(true)
    reset()
  }

  function handleSubmitInfo() {
    const answer = window.confirm(
      'Você tem certeza que quer enviar as informações?',
    )
    if (answer) {
      console.log('saved')
      setIncomes((state) => [])
      console.log(incomes)
      setOpenSubmit(true)
    } else {
      console.log('not saved')
    }
  }

  const isTypeDizimo = watch('selectType') === 'dizimo'

  const filledInputs =
    watch('selectType') !== 'selecione' &&
    watch('selectModel') !== 'selecione' &&
    watch('transactionDate') &&
    watch('offerValue')

  const isSaveDisabled = !filledInputs

  const isSubmitDisabled = incomes.length === 0

  function toFilterDizimoPix() {
    const filteredDizimoPixValue = incomes
      .filter(
        (income) =>
          income.selectType === 'dizimo' && income.selectModel === 'pix',
      )
      .map((income) => income.offerValue)
      .reduce((prev, curr) => prev + curr, 0)
    return filteredDizimoPixValue
  }

  function toFilterDizimoCash() {
    const filteredDizimoCashValue = incomes
      .filter(
        (income) =>
          income.selectType === 'dizimo' && income.selectModel === 'cash',
      )
      .map((income) => income.offerValue)
      .reduce((prev, curr) => prev + curr, 0)
    return filteredDizimoCashValue
  }

  function toFilterOfertaPix() {
    const filteredOfertaPixValue = incomes
      .filter(
        (income) =>
          income.selectType !== 'dizimo' && income.selectModel === 'pix',
      )
      .map((income) => income.offerValue)
      .reduce((prev, curr) => prev + curr, 0)
    return filteredOfertaPixValue
  }

  function toFilterOfertaCash() {
    const filteredOfertaCashValue = incomes
      .filter(
        (income) =>
          income.selectType !== 'dizimo' && income.selectModel === 'cash',
      )
      .map((income) => income.offerValue)
      .reduce((prev, curr) => prev + curr, 0)
    return filteredOfertaCashValue
  }

  function toSumPixSubtotal() {
    const filteredPixValue = incomes
      .filter((income) => income.selectModel === 'pix')
      .map((income) => income.offerValue)
      .reduce((prev, curr) => prev + curr, 0)

    return filteredPixValue
  }

  function toSumCashSubtotal() {
    const filteredCashValue = incomes
      .filter((income) => income.selectModel === 'cash')
      .map((income) => income.offerValue)
      .reduce((prev, curr) => prev + curr, 0)

    return filteredCashValue
  }

  const defaultAutoCompleteProps = {
    options: [
      'Paulo de Tarso',
      'Inácio de Loyola',
      'Thomás de Aquino',
      'Jesus de Nazaré',
    ],
  }

  return (
    <IncomeRegisterContainer>
      <FormContainer>
        <div>
          <InputLabel htmlFor="transactionDate">Data</InputLabel>

          <TextField
            type="date"
            id="transactionDate"
            fullWidth
            // disabled={incomes.length !== 0}
            {...register('transactionDate')}
          />
        </div>
        <div>
          <InputLabel htmlFor="selectType">Tipo</InputLabel>
          <Controller
            name="selectType"
            control={control}
            render={({ field: { value } }) => (
              <Select
                className="inputSelect"
                labelId="selectType"
                id="selectType"
                {...register('selectType')}
                value={value}
                fullWidth
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
        </div>

        <div>
          {isTypeDizimo && (
            <>
              <InputLabel htmlFor="personName">Nome</InputLabel>
              <FormControl fullWidth>
                <Autocomplete
                  {...defaultAutoCompleteProps}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      type="text"
                      id="personName"
                      {...register('personName')}
                      placeholder="Paulo de Tarso"
                      fullWidth
                    />
                  )}
                />
              </FormControl>
            </>
          )}
        </div>
        <div>
          <InputLabel htmlFor="selectModel">Modelo</InputLabel>
          <Controller
            name="selectModel"
            control={control}
            render={({ field: { value } }) => (
              <Select
                className="inputSelect"
                labelId="selectModel"
                id="selectModel"
                {...register('selectModel')}
                value={value}
                fullWidth
              >
                <MenuItem value="selecione" disabled>
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="cash">Dinheiro</MenuItem>
                <MenuItem value="pix">Pix</MenuItem>
              </Select>
            )}
          />
        </div>
        <div>
          <InputLabel htmlFor="offerValue">Valor</InputLabel>
          <Controller
            name="offerValue"
            control={control}
            render={({ field: { value } }) => (
              <FormControl fullWidth>
                <TextField
                  id="offerValue"
                  {...register('offerValue', { valueAsNumber: true })}
                  placeholder="00,00"
                />
              </FormControl>
            )}
          />
        </div>

        <ButtonContainer>
          <Button
            className="saveButton"
            onClick={handleSubmit(handleCreateNewIncome)}
            variant="contained"
            disabled={isSaveDisabled}
            sx={{ width: '40%' }}
          >
            Salvar
          </Button>
          <Snackbar
            open={openSave}
            autoHideDuration={1500}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Nova receita salva com sucesso!
            </Alert>
          </Snackbar>
          <Button
            className="submitButton"
            onClick={handleSubmit(handleSubmitInfo)}
            variant="contained"
            disabled={isSubmitDisabled}
            sx={{ width: '40%' }}
          >
            Enviar
          </Button>
          <Snackbar
            open={openSubmit}
            autoHideDuration={1500}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
              Lista Enviada com sucesso!!
            </Alert>
          </Snackbar>
        </ButtonContainer>
      </FormContainer>
      <IncomesTableContainer>
        <Grid container alignContent="flex-start">
          <Grid item xs={12} container>
            <Grid item xs={1.5}>
              Data:
            </Grid>
            <Grid item xs={10.5}>
              {incomes.length !== 0 &&
                format(new Date(incomes[0].transactionDate), 'dd/MM/yyyy')}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            Tipo
          </Grid>
          <Grid item xs={5}>
            Nome
          </Grid>
          <Grid item xs={2}>
            Modelo
          </Grid>
          <Grid item xs={2}>
            Valor
          </Grid>
          <Grid item xs={1}>
            {/* Void cell on Grid */}
          </Grid>

          {incomes.map((income) => {
            return (
              <Grid item xs={12} container key={income.incomeId}>
                <Grid item xs={2}>
                  {income.selectType}
                </Grid>
                <Grid item xs={5}>
                  {income.personName}
                </Grid>
                <Grid item xs={2}>
                  {income.selectModel}
                </Grid>
                <Grid item xs={2}>
                  {priceFormatter.format(income.offerValue)}
                </Grid>
                <Grid item xs={1}>
                  <Button
                    onClick={() => handleDeleteIncome(income.incomeId)}
                    className="deleteButton"
                  >
                    <Trash size={20} />
                  </Button>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
        {incomes.length !== 0 && (
          <IncomesTabelTotalContainer>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  {/* Void cell on Grid */}
                </Grid>
                <Grid item xs={4}>
                  Pix
                </Grid>
                <Grid item xs={4}>
                  Cash
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  Oferta
                </Grid>
                <Grid item xs={4}>
                  {priceFormatter.format(toFilterOfertaPix())}
                </Grid>
                <Grid item xs={4}>
                  {priceFormatter.format(toFilterOfertaCash())}
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  Dízimo
                </Grid>
                <Grid item xs={4}>
                  {priceFormatter.format(toFilterDizimoPix())}
                </Grid>
                <Grid item xs={4}>
                  {priceFormatter.format(toFilterDizimoCash())}
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  SubTotal
                </Grid>
                <Grid item xs={4}>
                  {priceFormatter.format(toSumPixSubtotal())}
                </Grid>
                <Grid item xs={4}>
                  {priceFormatter.format(toSumCashSubtotal())}
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  TotalFinal
                </Grid>
                <Grid item xs={8} textAlign="center">
                  {priceFormatter.format(
                    toSumPixSubtotal() + toSumCashSubtotal(),
                  )}
                </Grid>
              </Grid>
            </Grid>
          </IncomesTabelTotalContainer>
        )}
      </IncomesTableContainer>
    </IncomeRegisterContainer>
  )
}
