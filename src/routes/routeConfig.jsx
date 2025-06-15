import Login from '../pages/Login/login.jsx'
import Register from '../pages/Registration/registration.jsx'
import Landing from '../pages/Landing/landing.jsx'

export const routes = [
    { path: '/', element: Landing },
    { path: '/registration', element: Register },
    { path: '/login', element: Login}
]