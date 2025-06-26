import { Outlet } from 'react-router';
import { ShadcnSidebar } from './ShadcnSidebar';

export function ShadcnDashboardLayout() {
    return (
        <div className="flex h-screen bg-background">
            <ShadcnSidebar />
            <main className="flex-1 overflow-auto">
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
} 