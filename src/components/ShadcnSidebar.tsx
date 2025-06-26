import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { 
    Home, 
    BookOpen, 
    Calendar, 
    Settings, 
    BarChart3, 
    FileText,
    ChevronLeft,
    ChevronRight,
    User,
    LogOut
} from 'lucide-react';

interface SidebarProps {
    className?: string;
}

export function ShadcnSidebar({ className }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Check on mount
        checkMobile();
        
        // Check on resize
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Set initial collapsed state based on screen size
    useEffect(() => {
        setIsCollapsed(isMobile);
    }, [isMobile]);

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: Home, path: '/dashboard' },
        { id: 'journal', label: 'Journal', icon: BookOpen, path: '/dashboard/journal' },
        { id: 'entries', label: 'Entries', icon: FileText, path: '/dashboard/entries' },
        { id: 'calendar', label: 'Calendar', icon: Calendar, path: '/dashboard/calendar' },
        { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
        { id: 'settings', label: 'Settings', icon: Settings, path: '/dashboard/settings' },
    ];

    return (
        <div className={cn(
            "flex h-full flex-col bg-background border-r",
            // Mobile: full width when expanded, collapsed width when collapsed
            // Desktop: normal width (w-64) when expanded, collapsed width when collapsed
            isCollapsed 
                ? "w-16" 
                : isMobile 
                    ? "w-full" 
                    : "w-64",
            className
        )}>
            {/* Header */}
            <div className="flex h-16 items-center justify-between px-4 border-b">
                {!isCollapsed && (
                    <h2 className="text-lg font-semibold">Journery</h2>
                )}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="h-8 w-8 p-0"
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-4 w-4" />
                    ) : (
                        <ChevronLeft className="h-4 w-4" />
                    )}
                </Button>
            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3 py-4">
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={cn(
                                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {!isCollapsed && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>
            </ScrollArea>

            {/* User section */}
            <div className="border-t p-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                        <User className="h-4 w-4 text-primary-foreground" />
                    </div>
                    {!isCollapsed && (
                        <>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">User Name</p>
                                <p className="text-xs text-muted-foreground truncate">user@example.com</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
} 