import { Routes, Route } from 'react-router'
import { routes } from './routeConfig';

function AppRoutes() {
    const renderRoutes = (routes) => {
        return routes.map((route) => {
            if (route.children) {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    >
                        {route.children.map((child) => (
                            <Route
                                key={child.path}
                                path={child.path}
                                element={<child.element />}
                            />
                        ))}
                    </Route>
                );
            }
            
            return (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            );
        });
    };

    return (
        <Routes>
            {renderRoutes(routes)}
        </Routes>
    );
}

export default AppRoutes;