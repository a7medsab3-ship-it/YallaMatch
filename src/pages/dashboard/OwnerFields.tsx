import { LayoutGrid, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const OwnerFields = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">My Fields</h1>
                <Link to="/fields/new" className="btn-primary py-2 px-4 rounded-lg flex items-center gap-2">
                    <Plus size={20} /> Add New Field
                </Link>
            </div>
            <div className="bg-secondary rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center py-12 text-center text-text-muted">
                <LayoutGrid size={48} className="mb-4 opacity-50 text-primary" />
                <p className="text-xl font-bold text-text mb-2">Manage your fields</p>
                <p className="max-w-md mx-auto mb-6">You currently have no active fields listed. Start by adding one to accept bookings.</p>
                <Link to="/fields/new" className="btn-primary py-2 px-6 rounded-lg text-sm">Add New Field</Link>
            </div>
        </div>
    );
};

export default OwnerFields;
