import { Navigate, Route, Routes } from 'react-router-dom'

import { Dish } from '../pages/dish'
import { Home } from '../pages/home'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
