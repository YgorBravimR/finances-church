import { HeaderContainer, RegisterPages } from './styles'

import { Person, House, ArrowFatLineUp, ArrowFatLineDown } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function RegisterHeader() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Voltar à pagina inicial">
        <House size={32} />
      </NavLink>
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

        <NavLink to="/member" className="memberAnchor" title="Adicionar membro">
          <Person size={32} />
        </NavLink>
      </RegisterPages>
    </HeaderContainer>
  )
}
