import { Users, Search } from 'lucide-react';

const AdminUsers = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">User Management</h1>
            <div className="flex gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input type="text" placeholder="Search users by name or email..." className="input-field pl-10" />
                </div>
            </div>
            <div className="bg-secondary rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center py-12 text-center text-text-muted">
                <Users size={48} className="mb-4 opacity-50 text-primary" />
                <p className="text-xl font-bold text-text mb-2">User list is empty</p>
                <p className="max-w-md mx-auto mb-6">No users found based on the selected criteria.</p>
            </div>
        </div>
    );
};

export default AdminUsers;
