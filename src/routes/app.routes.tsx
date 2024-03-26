import { Navigate, Route, Routes } from 'react-router-dom'

import { Add } from '../pages/add'
import { Dish } from '../pages/dish'
import { Edit } from '../pages/edit'
import { Home } from '../pages/home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/create" element={<Add />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/dish/:id/edit" element={<Edit />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
