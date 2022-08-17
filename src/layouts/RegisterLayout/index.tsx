import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'
import { RegisterLayoutContainer } from './styles'

export function RegisterLayout() {
  return (
    <div>
      <RegisterLayoutContainer>
        <Header />
        <Outlet />
      </RegisterLayoutContainer>
    </div>
  )
}
