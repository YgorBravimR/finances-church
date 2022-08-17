// import { DefaultLayout } from './layouts/DefaultLayout'
import { Routes, Route } from 'react-router-dom'
import { RegisterLayout } from './layouts/RegisterLayout/index'
import { ExpenseRegister } from './pages/ExpenseRegister'
import { Home } from './pages/Home/index'
import { IncomeRegister } from './pages/IncomeRegister/index'
import { MemberRegister } from './pages/MemberRegister'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<RegisterLayout />}>
        <Route path="/income" element={<IncomeRegister />} />
        <Route path="/expense" element={<ExpenseRegister />} />
        <Route path="/member" element={<MemberRegister />} />
      </Route>
    </Routes>
  )
}
