import { Outlet } from 'react-router-dom'
import { RegisterHeader } from '../../components/Header/index'
import { RegisterLayoutContainer } from './styles'

export function RegisterLayout() {
  return (
    <RegisterLayoutContainer>
      <RegisterHeader />
      <Outlet />
    </RegisterLayoutContainer>
  )
}
