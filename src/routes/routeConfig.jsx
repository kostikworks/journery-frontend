import Login from '../pages/Login/login.jsx'
import Registration from '../pages/Registration/registration.jsx'
import Landing from '../pages/Landing/landing.jsx'
import { ShadcnDashboardLayout } from '../components/ShadcnDashboardLayout.jsx'
import { ShadcnOverview } from '../pages/Dashboard/ShadcnOverview.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

export const routes = [
    { 
        path: '/', 
        element: Landing 
    },
    { 
        path: '/registration', 
        element: Registration 
    },
    { 
        path: '/login', 
        element: Login
    },
    { 
        path: '/dashboard', 
        element: () => (
            <ProtectedRoute>
                <ShadcnDashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: '', element: ShadcnOverview },
            { path: 'journal', element: () => <div className="p-6"><h1 className="text-3xl font-bold">Journal</h1><p>Journal view coming soon...</p></div> },
            { path: 'entries', element: () => <div className="p-6"><h1 className="text-3xl font-bold">Entries</h1><p>Entries view coming soon...</p></div> },
            { path: 'calendar', element: () => <div className="p-6"><h1 className="text-3xl font-bold">Calendar</h1><p>Calendar view coming soon...</p></div> },
            { path: 'analytics', element: () => <div className="p-6"><h1 className="text-3xl font-bold">Analytics</h1><p>Analytics view coming soon...</p></div> },
            { path: 'settings', element: () => <div className="p-6"><h1 className="text-3xl font-bold">Settings</h1><p>Settings view coming soon...</p></div> }
        ]
    }
]