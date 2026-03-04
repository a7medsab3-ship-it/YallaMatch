import { CheckCircle } from 'lucide-react';

const AdminFields = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-8">Field Approvals</h1>
            <div className="bg-secondary rounded-xl border border-gray-800 p-6 flex flex-col items-center justify-center py-12 text-center text-text-muted">
                <CheckCircle size={48} className="mb-4 opacity-50 text-primary" />
                <p className="text-xl font-bold text-text mb-2">All Caught Up</p>
                <p className="max-w-md mx-auto mb-6">There are no pending fields requiring your approval.</p>
            </div>
        </div>
    );
};

export default AdminFields;
