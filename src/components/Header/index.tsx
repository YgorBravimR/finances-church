import { HeaderContainer, RegisterPages } from './styles'

import { Person, House, ArrowFatLineUp, ArrowFatLineDown } from 'phosphor-react'

import adnvSigla from '../../assets/adnv-sigla.png'
import { NavLink } from 'react-router-dom'

export function RegisterHeader() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Voltar à pagina inicial" className="homeAnchor">
          <House size={32} />
        </NavLink>
        <img src={adnvSigla} alt="" />
      </div>

      <RegisterPages>
        <NavLink
          to="/income"
          className="incomeAnchor"
          title="Adicionar entrada"
        >
          <ArrowFatLineUp size={32} />
        </NavLink>

        <NavLink
          to="/expense"
          className="expenseAnchor"
          title="Adicionar despesa"
        >
          <ArrowFatLineDown size={32} />
        </NavLink>

        <NavLink
          to="/member"
          className="memberAnchor"
          title="Adicionar novo membro"
        >
          <Person size={32} />
        </NavLink>
      </RegisterPages>
    </HeaderContainer>
  )
}
