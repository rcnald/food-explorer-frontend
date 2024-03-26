import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/signin'
import { SignUp } from '../pages/signup'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
