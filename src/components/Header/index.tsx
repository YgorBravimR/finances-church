import { HeaderContainer } from './styles'

import { Person, House, ArrowFatLineUp } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <House size={32} />
      </span>
      <nav>
        <a href="">
=======
import adnvSigla from '../../assets/adnv-sigla.png'

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
        </a>
        <a href="">Expense</a>
        <a href="">
          <Person size={32} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
