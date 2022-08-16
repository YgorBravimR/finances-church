import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
// import { DefaultLayout } from './layouts/DefaultLayout'
import { Register } from './pages/Register/index'

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<DefaultLayout />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      {/* </Route> */}
    </Routes>
  )
}
