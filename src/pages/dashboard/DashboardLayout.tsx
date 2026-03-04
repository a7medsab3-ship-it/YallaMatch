import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Calendar, Heart, Settings, LayoutDashboard, LogOut, Users, CheckCircle, LayoutGrid } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';

const DashboardLayout = () => {
    const { user, isLoading, setUser } = useAuthStore();
    const location = useLocation();

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    if (!user) return <Navigate to="/login" replace />;

    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    const isAdmin = user.role === 'Admin';
    const isOwner = user.role === 'Field Owner';

    const getNavClass = (path: string) => {
        const isActive = location.pathname === path;
        return `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                ? 'bg-surface text-primary border border-gray-800'
                : 'text-text-muted hover:text-text hover:bg-secondary'
            }`;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="card p-6 sticky top-24">
                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-800">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-xl font-bold text-primary shrink-0 uppercase">
                            {user.displayName?.charAt(0) || 'U'}
                        </div>
                        <div className="overflow-hidden">
                            <p className="font-bold text-text truncate">{user.displayName}</p>
                            <p className="text-xs text-text-muted truncate">{user.role}</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        {isAdmin && (
                            <>
                                <Link to="/dashboard" className={getNavClass('/dashboard')}><LayoutDashboard size={18} /> Admin Overview</Link>
                                <Link to="/dashboard/admin/users" className={getNavClass('/dashboard/admin/users')}><Users size={18} /> Manage Users</Link>
                                <Link to="/dashboard/admin/fields" className={getNavClass('/dashboard/admin/fields')}><CheckCircle size={18} /> Field Approvals</Link>
                            </>
                        )}

                        {isOwner && (
                            <>
                                <Link to="/dashboard" className={getNavClass('/dashboard')}><LayoutDashboard size={18} /> Partner Overview</Link>
                                <Link to="/dashboard/owner/fields" className={getNavClass('/dashboard/owner/fields')}><LayoutGrid size={18} /> My Fields</Link>
                                <Link to="/dashboard/owner/bookings" className={getNavClass('/dashboard/owner/bookings')}><Calendar size={18} /> Bookings</Link>
                            </>
                        )}

                        {!isAdmin && !isOwner && (
                            <>
                                <Link to="/dashboard" className={getNavClass('/dashboard')}><LayoutDashboard size={18} /> Overview</Link>
                                <Link to="/dashboard/bookings" className={getNavClass('/dashboard/bookings')}><Calendar size={18} /> My Bookings</Link>
                                <Link to="/dashboard/favorites" className={getNavClass('/dashboard/favorites')}><Heart size={18} /> Favorites</Link>
                            </>
                        )}

                        <Link to="/dashboard/settings" className={getNavClass('/dashboard/settings')}><Settings size={18} /> Settings</Link>

                        <div className="pt-6 mt-6 border-t border-gray-800">
                            <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-500 hover:bg-red-500/10 transition-colors text-left">
                                <LogOut size={18} /> Logout
                            </button>
                        </div>
                    </nav>
                </div>
            </aside>

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
