import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BookOpen, Calendar, BarChart3, TrendingUp } from 'lucide-react';

export function ShadcnOverview() {
    const stats = [
        { label: 'Total Entries', value: '24', icon: BookOpen, color: 'bg-blue-500' },
        { label: 'This Month', value: '8', icon: Calendar, color: 'bg-green-500' },
        { label: 'Streak', value: '5 days', icon: TrendingUp, color: 'bg-purple-500' },
        { label: 'Mood Score', value: '8.2', icon: BarChart3, color: 'bg-orange-500' },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome to your journal dashboard. Here's what's happening today.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.label}
                                </CardTitle>
                                <div className={`p-2 rounded-lg ${stat.color}`}>
                                    <Icon className="h-4 w-4 text-white" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Your latest journal entries and activities.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">New journal entry created</p>
                                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Mood tracking updated</p>
                                    <p className="text-xs text-muted-foreground">Yesterday</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Common tasks and shortcuts.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <button className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors">
                                ✍️ Write new entry
                            </button>
                            <button className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors">
                                📊 View analytics
                            </button>
                            <button className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors">
                                ⚙️ Settings
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
} 