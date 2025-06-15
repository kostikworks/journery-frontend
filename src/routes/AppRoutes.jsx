import { Routes, Route } from 'react-router'
import { routes } from './routeConfig';

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        return ( 
        <Route
        key={route.path}
        path={route.path}
        element={<route.element />}
        />)
      })}
    </Routes>
  )
}

export default AppRoutes