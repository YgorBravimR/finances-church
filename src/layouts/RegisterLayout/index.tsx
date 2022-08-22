import { Outlet } from 'react-router-dom'
import { RegisterHeader } from '../../components/Header/index'
import { RegisterLayoutContainer } from './styles'

export function RegisterLayout() {
  return (
    <div>
      <RegisterLayoutContainer>
        <RegisterHeader />
        <Outlet />
      </RegisterLayoutContainer>
    </div>
  )
}
