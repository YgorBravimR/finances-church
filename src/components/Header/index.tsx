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
