import { useAuthStore } from '../../store/useAuthStore';
import AdminDashboard from './AdminDashboard';
import OwnerDashboard from './OwnerDashboard';
import UserDashboard from './UserDashboard';

const DashboardIndex = () => {
    const { user } = useAuthStore();

    if (!user) return null;

    if (user.role === 'Admin') {
        return <AdminDashboard />;
    }

    if (user.role === 'Field Owner') {
        return <OwnerDashboard />;
    }

    return <UserDashboard />;
};

export default DashboardIndex;
